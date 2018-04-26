import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { Collection, Model, FetchState } from 'app/core';
import { Comparator, StoreService } from 'app/core';
import { SessionService, UserChanged } from 'app/core';
import { ScrollTop } from 'app/core/core.decorators';
import { Author, Block, Project, School, Synapse, User } from 'app/models';
import { EDITOR_FORM } from './author-editor.forms';


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
 * Author editor component.
 */
@Component({
    selector: 'app-author-editor',
    templateUrl: 'author-editor.component.html',
    styleUrls: [ 'author-editor.component.scss' ]
})
export class AuthorEditorComponent implements OnDestroy, OnInit {

    /** Active tab */
    public tab = 'author';

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
     * Returns the author being edited.
     */
    get author(): Author[] {
        return this.models['author'];
    }


    /**
     * Sets the author being edited.
     */
    set author(author: Author[]) {
        this.models['author'] = author;
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
     * @param id        Unique ID of the author
     */
    @ScrollTop()
    public edit(id: number) {
        this.clear();
        this.tab = 'author';
        this.fetchModels(id);
    }


    /**
     * Save the current form data.
     */
    public save(form: FormGroup, models: any) {
        console.log('save');
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

        this.getAuthor(id)
            .concatMap(author => {
                const synapse = author['synapse'];

                return Observable.forkJoin([
                    Observable.of(author),
                    Observable.of(synapse),
                    this.getBlocks(synapse),
                    this.getFeeds(author)
                ]);
            })
            .catch(error => {
                this.author = null;
                this.status = error.status;

                this.states.next(this.status === 404 ?
                    FetchState.EMPTY : FetchState.ERROR);

                return Observable.throw(error);
            })
            .subscribe(values => {
                this.models = {
                    author: values[0],
                    synapse: values[1],
                    blocks: values[2],
                    feeds: values[3],
                    block: this.models['block']
                };

                this.form.reset(clone(DEFAULT_VALUE));
                this.form.patchValue(clone(this.models));
                this.states.next(FetchState.READY);
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
            return Observable.of([]);
        }

        return this.store.query('/api/blocks', { id: ids })
            .map(blocks => this.sortByIndex(ids, blocks));
    }


    /**
     * Obtains the blocks collection for the given synapse.
     * Results are sorted by their position on the synapse object.
     *
     * @param synapse   Synapse object
     * @returns         Observable with the blocks
     */
    private getFeeds(author: Author): Observable<any> {
        const params = { author_id: author.id, sort: ['url'] };
        return this.store.query('/api/feeds', params);
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
