import { throwError, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Comparator, EditorComponent, Model } from 'app/core';
import { Author, AuthorType, Synapse } from 'app/models';
import { of } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs'
import { AuthorFormBuilder } from './author-editor.builder';


/** Author owners map */
const OWNER_KEYS = {
    'projects': 'project',
    'schools': 'school',
    'users': 'user'
};


/**
 * Author editor component.
 */
@Component({
    selector: 'app-author-editor',
    templateUrl: 'author-editor.component.html',
    styleUrls: ['author-editor.component.scss']
})
export class AuthorEditorComponent extends EditorComponent {

    /** Default active tab */
    private DEFAULT_TAB = 'synapse';

    /** Author being edited */
    private author = null;

    /** Active editor tab */
    public tab = this.DEFAULT_TAB;


    /**
     * Author owner model.
     */
    get owner(): any {
        if (this.author && this.author['type']) {
            const type = this.author.type;
            return this.author[OWNER_KEYS[type]];
        }

        return null;
    }


    /**
     * {@inheritDoc}
     */
    public edit(id: number) {
        this.tab = this.DEFAULT_TAB;
        super.edit(id);
    }


    /**
     * {@inheritDoc}
     */
    public reset() {
        this.tab = this.DEFAULT_TAB;
        super.reset();
    }


    /**
     * {@inheritDoc}
     */
    public createForm(): FormGroup {
        return AuthorFormBuilder.createEditorForm();
    }


    /**
     * Returns an obsevable authorizing the edition of an author.
     *
     * A subscription error is emitted if the current user does not
     * have enough permissions to edit the author. Otherwise an
     * observable with the author will be emitted.
     *
     * @param author        Author object
     * @returns             Observable
     */
    private authorize(author: Author): Observable<Author> {
        // Only authenticated users can edit authors

        if (this.session.check() === false) {
            return throwError({ status: 403 });
        }

        // Check if user policies grant access to the author

        if (!this.policies.can('update-author', author)) {
            return throwError({ status: 401 });
        }

        // Disable any controls that must not be editable

        if (author.type === AuthorType.SCHOOLS) {
            const group = this.form.get('author') as FormGroup;
            group.removeControl('school');
        }

        if (author.type === AuthorType.USERS) {
            if (!this.policies.can('update-user', author.user)) {
                this.form.removeControl('user');
            }
        }

        return of(author);
    }


    /**
     * {@inheritDoc}
     */
    public fetchModels(id: number): Observable<any> {
        return this.getAuthor(id)
            .pipe(map(author => {
                this.author = author;
                author['name'] = this.owner['name'];
                console.log(this.owner);
                return author;
            }))
            .pipe(concatMap(author => this.authorize(author)))
            .pipe(concatMap(author => forkJoin([
                of(author),
                this.getFeeds(author),
                of(author['synapse']),
                this.getBlocks(author['synapse']),
                of(author['user'])
            ])))
            .pipe(map(values => ({
                author: values[0],
                feeds: values[1],
                synapse: values[2],
                blocks: values[3],
                user: values[4]
            })));
    }


    /**
     * {@inheritDoc}
     */
    public updateModels(changes: any): Observable<any> {
        return of(null)
            .pipe(concatMap(v => this.updateBlocks(changes)))
            .pipe(concatMap(v => this.updateSynapse(changes)))
            .pipe(concatMap(v => this.updateAuthor(changes)))
            .pipe(concatMap(v => this.updateUser(changes)))
            .pipe(concatMap(v => this.updateFeeds(changes)));
    }


    /**
     * Update the author if it has changed.
     *
     * @param changes       Form changes object
     * @returns             Observable with the response
     */
    private updateAuthor(changes: any): Observable<any> {
        const id = this.author.id;

        // Update only if the author changed

        if (!changes.hasOwnProperty('author')) {
            return of({ id: id });
        }

        // Convert any models to their ID properties an then
        // update the author with the normalized values

        const values = changes['author'];
        const params = Comparator.normalize(values);

        // Make sure the school can be cleared

        if (params.hasOwnProperty('school')) {
            if (params['school'] === null) {
                params['school_id'] = null;
                delete params['school'];
            }
        }

        // Make sure the category can be cleared

        if (params.hasOwnProperty('category')) {
            if (params['category'] === null) {
                params['category_id'] = null;
                delete params['category'];
            }
        }

        // Make sure the territory can be cleared

        if (params.hasOwnProperty('territory')) {
            if (params['territory'] === null) {
                params['territory_id'] = null;
                delete params['territory'];
            }
        }

        // Make sure the municipality can be cleared

        if (params.hasOwnProperty('municipality')) {
            if (params['municipality'] === null) {
                params['municipality_id'] = null;
                delete params['municipality'];
            }
        }

        return this.store.update('/api/authors', id, params);
    }


    /**
     * Update the user if it has changed.
     *
     * @param changes       Form changes object
     * @returns             Observable with the response
     */
    private updateUser(changes: any): Observable<any> {
        // Update only if the synapse changed

        if (!changes.hasOwnProperty('user')) {
            return of(null);
        }

        // Update the user information

        const id = this.author.user.id;
        const params = changes['user'];

        return this.store.update('/api/users', id, params);
    }


    /**
     * Update the synapse if it has changed.
     *
     * @param changes       Form changes object
     * @returns             Observable with the response
     */
    private updateSynapse(changes: any): Observable<any> {
        const id = this.author.synapse.id;

        // Update only if the synapse changed

        if (!changes.hasOwnProperty('synapse')) {
            return of({ id: id });
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
        const id = this.author.synapse.id;
        const entries = [];

        // Update the blocks only if they have changed

        if (!changes.hasOwnProperty('blocks')) {
            return of({ id: id });
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
            this.assignChanges(changes, { synapse: { blocks: ids } });

            return of({ id: id });
        }

        // Create the batch update observable and map the responses
        // into the changes array so the order is preserved

        return this.store.batch('/api/$batch', { entries: entries })
            .pipe(map(responses => {
                const vs = responses.map(v => v.id).slice(remove.length);
                const ids = news.map(v => v.id ? v.id : vs.shift());
                this.assignChanges(changes, { synapse: { blocks: ids } });
            }));
    }


    /**
     * Update the author feeds if they have changed.
     *
     * @param changes       Form changes object
     * @returns             Observable with the response
     */
    private updateFeeds(changes: any): Observable<any> {
        const id = this.author.id;
        const entries = [];

        // Update the blocks only if they have changed

        if (!changes.hasOwnProperty('feeds')) {
            return of({ id: id });
        }

        // Obtain the blocks to remove and those to create

        const news = changes['feeds'].filter(v => v.url);
        const olds = this.models['feeds'];

        const remove = olds.filter(v => !news.some(n => n.url === v.url));
        let create = news.filter(v => !olds.some(o => o.url === v.url));

        // Remove any duplicated URLs from the creation array

        create = create.filter((v, i) => {
            return i === create.findIndex(c => c.url === v.url);
        });

        // Create the batch update request for the blocks

        remove.forEach(feed => entries.push({
            method: 'delete',
            path: `/api/feeds/${feed.id}`
        }));

        create.forEach(feed => entries.push({
            method: 'post',
            path: '/api/feeds',
            params: { ...feed, author_id: id }
        }));

        // If no feeds where created or removed, simply return

        if (entries.length < 1) {
            return of({ id: id });
        }

        // Create the batch update observable

        return this.store.batch('/api/$batch', { entries: entries });
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
     * Obtains the privileges collection for the given synapse.
     *
     * @param synapse   Synapse object
     * @returns         Observable with the privileges
     */
    private getAuthor(id: number): Observable<any> {
        return this.store.get('/api/authors', id);
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
            return of([]);
        }

        return this.store.query('/api/blocks', { id: ids })
            .pipe(map(blocks => this.sortByIndex(ids, blocks)));
    }


    /**
     * Obtains the blocks collection for the given synapse.
     * Results are sorted by their position on the synapse object.
     *
     * @param synapse   Synapse object
     * @returns         Observable with the blocks
     */
    private getFeeds(author: Author): Observable<any> {
        return this.store.query('/api/feeds', {
            author_id: author.id, sort: ['url']
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

}
