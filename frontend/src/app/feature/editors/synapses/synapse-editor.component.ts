import { throwError, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Comparator, EditorComponent, Model } from 'app/core';
import { Block, Privilege, Synapse } from 'app/models';
import { SynapseFormBuilder } from './synapse-editor.builder';
import { GENERAL_SLUG } from 'app/models';


/**
 * Synapse editor component.
 */
@Component({
    selector: 'app-synapse-editor',
    templateUrl: 'synapse-editor.component.html',
    styleUrls: [ 'synapse-editor.component.scss' ]
})
export class SynapseEditorComponent extends EditorComponent {

    /** Active editor tab */
    public tab = 'synapse';

    /** Synapse being edited */
    public synapse = null;


    /**
     * {@inheritDoc}
     */
    public edit(id: number) {
        this.tab = 'synapse';
        super.edit(id);
    }


    /**
     * {@inheritDoc}
     */
    public reset() {
        this.tab = 'synapse';
        super.reset();
    }


    /**
     * {@inheritDoc}
     */
    public createForm(): FormGroup {
        return SynapseFormBuilder.createEditorForm();
    }


    /**
     * Returns an obsevable authorizing the edition of a synapse.
     *
     * A subscription error is emitted if the current user does not
     * have enough permissions to edit the synapse. Otherwise an
     * observable with the synapse will be emitted.
     *
     * @param synapse       Synapse object
     * @returns             Observable
     */
    private authorize(synapse: Synapse): Observable<Synapse> {
        // Only authenticated users can edit synapses

        if (this.session.check() === false) {
            return throwError({ status: 403 });
        }

        // Check if user policies grant access to the synapse

        if (!this.policies.can('update-synapse', synapse)) {
            return throwError({ status: 401 });
        }

        // Disable any controls that must not be editable

        if (synapse.slug === GENERAL_SLUG) {
            this.form.get('synapse.slug').disable();
        }

        if (!this.policies.can('manage-privileges', synapse)) {
            this.form.get('privileges').disable();
        }

        if (!this.policies.can('manage-blocks', synapse)) {
            this.form.get('blocks').disable();
        }

        return Observable.of(synapse);
    }


    /**
     * {@inheritDoc}
     */
    public fetchModels(id: number): Observable<any> {
        return this.getSynapse(id)
            .map(synapse => this.synapse = synapse)
            .concatMap(synapse => this.authorize(synapse))
            .concatMap(synapse => Observable.forkJoin([
                Observable.of(synapse),
                this.getBlocks(synapse),
                this.getPrivileges(synapse)
            ]))
            .map(values => ({
                synapse: values[0],
                blocks: values[1],
                privileges: values[2]
            }));
    }


    /**
     * {@inheritDoc}
     */
    public updateModels(changes: any): Observable<any> {
        return Observable.of(null)
            .concatMap(v => this.updateBlocks(changes))
            .concatMap(v => this.updateSynapse(changes))
            .concatMap(v => this.updatePrivileges(changes));
    }


    /**
     * Update the synapse if it has changed.
     *
     * @param changes       Form changes object
     * @returns             Observable with the response
     */
    private updateSynapse(changes: any): Observable<any> {
        const id = this.synapse.id;

        // Update only if the synapse changed

        if (!changes.hasOwnProperty('synapse')) {
            return Observable.of({ id: id });
        }

        // Convert any models to their ID properties an then
        // update the synapse with the normalized values

        const values = changes['synapse'];
        const params = Comparator.normalize(values);

        // Make sure the parent synapse can be cleared

        if (params.hasOwnProperty('synapse')) {
            if (params['synapse'] === null) {
                params['synapse_id'] = null;
                delete params['synapse'];
            }
        }

        return this.store.update('/api/synapses', id, params);
    }


    /**
     * Update the synapse blocks if they have changed. If the blocks
     * have changed their identifiers will be propagated into the
     * synapse changes object for later storage.
     *
     * @param changes       Form changes object
     * @returns             Observable with the response
     */
    private updateBlocks(changes: any): Observable<any> {
        const id = this.synapse.id;
        const entries = [];

        // Update the blocks only if they have changed

        if (!changes.hasOwnProperty('blocks')) {
            return Observable.of({ id: id });
        }

        // Obtain the blocks to remove and those to create

        const news = changes['blocks'];
        const olds = this.models['blocks'];

        const remove = olds.filter(v => !news.some(n => n.id === v.id));
        const create = news.filter(v => !olds.some(o => o.id === v.id));

        // Create the batch update request for the blocks

        remove.forEach(block => entries.push({
            method: 'delete',
            path: `/api/blocks/${block.id}`
        }));

        create.forEach(block => entries.push({
            method: 'post',
            path: '/api/blocks',
            params: { ...block, synapse_id: id }
        }));

        // If no blocks where created or removed, simply update
        // the blocks order on the changes array

        if (entries.length < 1) {
            const ids = news.map(v => v.id);
            this.assignChanges(changes, { synapse: { blocks: ids }});

            return Observable.of({ id: id });
        }

        // Create the batch update observable and map the responses
        // into the changes array so the order is preserved

        return this.store.batch('/api/$batch', { entries: entries })
            .map(responses => {
                const vs = responses.map(v => v.id).slice(remove.length);
                const ids = news.map(v => v.id ? v.id : vs.shift());
                this.assignChanges(changes, { synapse: { blocks: ids } });
            });
    }


    /**
     * Update the synapse privileges if they have changed.
     *
     * @param changes       Form changes object
     * @returns             Observable with the response
     */
    private updatePrivileges(changes: any): Observable<any> {
        const id = this.synapse.id;
        const entries = [];

        // Update the privileges only if they have changed

        if (!changes.hasOwnProperty('privileges')) {
            return Observable.of({ id: id });
        }

        // Obtain the privileges to remove, create or update

        const news = changes['privileges'];
        const olds = this.models['privileges'];

        const remove = olds.filter(v => !news.some(n => n.id === v.id));
        const create = news.filter(v => !olds.some(o => o.id === v.id));
        const update = news.filter(v => olds.some(o => o.id === v.id));

        // Create the batch update request for the blocks

        remove.forEach(privilege => entries.push({
            method: 'delete',
            path: `/api/synapses/privileges/${privilege.id}`
        }));

        create.forEach(privilege => entries.push({
            method: 'post',
            path: '/api/synapses/privileges',
            params: {
                ...Comparator.normalize(privilege),
                synapse_id: id
            }
        }));

        update.forEach(privilege => entries.push({
            method: 'put',
            path: `/api/synapses/privileges/${privilege.id}`,
            params: {
                ...Comparator.normalize(privilege),
                synapse_id: id
            }
        }));

        // Make sure there are entries to update

        if (entries.length < 1) {
            return Observable.of(null);
        }

        // Create the batch update observable

        return this.store.batch('/api/$batch', { entries: entries })
    }


    /**
     * Assigns the given parameters to a form changes object.
     *
     * This differs from {@code Object.assign} in that it preserves
     * the existing properties of the object.
     *
     * @param changes       Object to modify
     * @param params        Parameters to assign
     */
    private assignChanges(changes: any, params: any) {
        Object.entries(params).forEach(([key, value]) => {
            if (changes.hasOwnProperty(key)) {
                Object.assign(changes[key], value);
            } else {
                changes[key] = value;
            }
        });
    }


    /**
     * Obtains the blocks collection for the given synapse.
     * Results are sorted by their position on the synapse object.
     *
     * @param synapse   Synapse object
     * @returns         Observable with the blocks
     */
    private getBlocks(synapse: Synapse): Observable<any> {
        const ids = synapse['blocks'];

        if (!Array.isArray(ids) || !ids.length) {
            return Observable.of([]);
        }

        return this.store.query('/api/blocks', { id: ids })
            .map(blocks => this.sortByIndex(ids, blocks));
    }


    /**
     * Obtains the privileges collection for the given synapse.
     *
     * @param synapse   Synapse object
     * @returns         Observable with the privileges
     */
    private getPrivileges(synapse: Synapse): Observable<any> {
        return this.store.query('/api/synapses/privileges', {
            synapse_id: synapse.id, with: ['user']
        });
    }


    /**
     * Obtains a synapse object from the backend.
     *
     * @param id        Synapse identifier
     * @returns         Observable with the synapse object
     */
    private getSynapse(id: number): Observable<any> {
        return this.store.get('/api/synapses', id);
    }


    /**
     * Sorts an array of models in-place by their position on
     * the given IDs array.
     *
     * @param ids       Model identifiers
     * @param models    Models to sort
     */
    private sortByIndex(ids: number[], models: Model[]): any[] {
        return models.sort((a, b) => {
            return ids.indexOf(a.id) - ids.indexOf(b.id);
        });
    }

}
