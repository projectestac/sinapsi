import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { Collection, Model, FetchState } from 'app/core';
import { Comparator, StoreService } from 'app/core';
import { SessionService, UserChanged } from 'app/core';
import { PoliciesService } from 'app/core';
import { ScrollTop } from 'app/core/core.decorators';
import { Block, Privilege, Synapse } from 'app/models';
import { EDITOR_FORM } from './synapse-editor.forms';


/**
 * Returns a deep copy of a simple object
 */
function clone(object: any): any {
    return JSON.parse(JSON.stringify(object));
}

/**
 * Default values for the editor
 */
const DEFAULT_VALUE = clone(EDITOR_FORM.value);


/**
 * Synapse editor component.
 */
@Component({
    selector: 'app-synapse-editor',
    templateUrl: 'synapse-editor.component.html',
    styleUrls: [ 'synapse-editor.component.scss' ]
})
export class SynapseEditorComponent implements OnDestroy, OnInit {

    /** Active tab */
    public tab = 'synapse';

    /** Form being edited */
    public form = EDITOR_FORM;

    /** Models being edited */
    public models = clone(DEFAULT_VALUE);

    /** Current state */
    public state: FetchState = FetchState.PENDING;

    /** Last HTTP error code or null */
    public status: number = null;

    /** Component states subject */
    private _states = new ReplaySubject<FetchState>(1);

    /** Unsubscribe subject */
    protected unsubscribe = new Subject();


    /**
     * Component constructor.
     */
    constructor(
        private route: ActivatedRoute,
        private session: SessionService,
        private policies: PoliciesService,
        private store: StoreService
    ) {}


    /**
     * Component initialization.
     */
    ngOnInit() {
        // Update the component state on changes

        this.states
            .takeUntil(this.unsubscribe)
            .subscribe(state => this.state = state);

        // Refresh the page when the URL changes

        this.route.params
            .takeUntil(this.unsubscribe)
            .subscribe(params => this.edit(params.id));

        // Refresh when the logged in user changes

        this.session.events
            .takeUntil(this.unsubscribe)
            .filter(e => e instanceof UserChanged)
            .subscribe(params => this.edit(
                this.route.snapshot.params.id
            ));
    }


    /**
     * Component destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


    /**
     * Observable of state changes.
     */
    get states(): Subject<FetchState> {
        return this._states;
    }


    /**
     * Returns the synapse blocks being edited.
     */
    get blocks(): Block[] {
        return this.models['blocks'];
    }


    /**
     * Sets the synapse blocks being edited.
     */
    set blocks(blocks: Block[]) {
        this.models['blocks'] = blocks;
    }


    /**
     * Returns the synapse privileges being edited.
     */
    get privileges(): Privilege[] {
        return this.models['privileges'];
    }


    /**
     * Sets the synapse privileges being edited.
     */
    set privileges(privileges: Privilege[]) {
        this.models['privileges'] = privileges;
    }


    /**
     * Returns the synapse model being edited.
     */
    get synapse(): Synapse {
        return this.models['synapse'];
    }


    /**
     * Sets the synapse model being edited.
     */
    set synapse(synapse: Synapse) {
        this.models['synapse'] = synapse;
    }


    /**
     * Initialize the editor for an object.
     *
     * @param id        Unique ID of the synapse
     */
    @ScrollTop()
    public edit(id: number) {
        this.clear();
        this.tab = 'synapse';
        this.fetchModels(id);
    }


    /**
     * Save the current form data.
     */
    public save(form: FormGroup, models: any) {
        this.saveBlocks(form, models);
        this.savePrivileges(form, models);
        this.saveSynapse(form, models);
    }


    private saveSynapse(form, models) {
        const olds = models['synapse'];
        const news = form.get('synapse').value;
        const changes = Comparator.changes(news, olds);

        if (Object.keys(changes).length > 0) {
            const id = models['synapse'].id;
            const params = Comparator.normalize(changes);

            this.store.update('/api/synapses', id, params)
                .subscribe(success => console.log('Synapse saved'));
        }
    }


    private savePrivileges(form, models) {
        const olds = models['privileges'];
        const news = form.get('privileges').value;

        if (!Comparator.equals(news, olds)) {
            console.log('Synch privileges');
            console.log(Comparator.changes(news, olds));
            console.log(Comparator.changes(olds, news));
        }
    }


    private saveBlocks(form, models) {
        const olds = models['blocks'];
        const news = form.get('blocks').value;

        if (!Comparator.equals(news, olds)) {
            const id = models['synapse'].id;
            const batch = [];

            news.forEach(block => batch.push({
                path: '/api/blocks',
                method: 'post',
                params: {...block, synapse_id: id }
            }));

            this.store.create('/api/$batch', { entries: batch })
                .subscribe(success => console.log('Blocks updated'));
        }
    }


    /**
     * Reset the forms to its initial values.
     */
    @ScrollTop()
    public reset() {
        this.form.reset(clone(DEFAULT_VALUE));
        this.form.patchValue(clone(this.models));
    }


    /**
     * Reset the forms to its default values.
     */
    public clear() {
        this.form.reset(clone(DEFAULT_VALUE));
    }


    /**
     * Fetch all the editable models from the backend.
     *
     * This method fetches the synapse object along with its blocks
     * and privileges if the current user can edit/manage the synapse.
     *
     * @param id        Synapse identifier
     */
    protected fetchModels(id: number) {
        this.states.next(FetchState.PENDING);

        this.getSynapse(id)
            .concatMap(synapse => {
                if (!this.userCanEdit(synapse)) {
                    return Observable.throw({
                        status: 403,
                        message: 'Forbidden'
                    });
                }

                return Observable.forkJoin([
                    Observable.of(synapse),
                    this.getBlocks(synapse),
                    this.getPrivileges(synapse)
                ]);
            })
            .catch(error => {
                this.synapse = null;
                this.status = error.status;

                this.states.next(this.status === 404 ?
                    FetchState.EMPTY : FetchState.ERROR);

                return Observable.throw(error);
            })
            .subscribe(values => {
                this.models = {
                    synapse: values[0],
                    blocks: values[1],
                    privileges: values[2],
                    block: this.models['block']
                };

                this.form.reset(clone(DEFAULT_VALUE));
                this.form.patchValue(clone(this.models));
                this.states.next(FetchState.READY);
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
        return this.store.get('/api/synapses', id).map(synapse => {
            synapse['filters'] = synapse['filters'] || {};
            synapse['synapse'] = synapse['parent'] || null;

            return synapse;
        });
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


    /**
     * Returns if the current user can edit the given synapse.
     *
     * @param synapse       Synapse object
     * @returns             True if a user is logged in and has
     *                      edition rights over the synapse.
     */
    public userCanEdit(synapse: Synapse): boolean {
        return this.policies.can('update-synapse', synapse);
    }


    /**
     * Returns if the current user can manage the given synapse.
     *
     * @param synapse       Synapse object
     * @returns             True if a user is logged in and has
     *                      edition rights over the synapse.
     */
    public userCanManage(synapse: Synapse): boolean {
        return this.policies.can('manage-privileges', synapse);
    }


    /**
     * Adds a block to the begining of the sidebar.
     *
     * @param block     Block element
     */
    public unshiftBlock(block: Block) {
        const form = this.form.get('block');
        const models = this.form.get('blocks').value;

        models.unshift(block);
        form.reset(clone(DEFAULT_VALUE['block']));
    }

}
