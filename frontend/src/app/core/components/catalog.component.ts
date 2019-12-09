import { ReplaySubject, Subject } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CnDialog } from 'concrete/dialog';
import { CnToaster } from 'concrete/toaster';
import { takeUntil, filter } from 'rxjs/operators';

import { SessionService, SessionState } from 'app/auth';
import { SessionEvent, UserChanged } from 'app/auth';
import { RequestManager, StoreService } from 'app/core/services';
import { Collection, Model, StoreQuery } from 'app/core/services';
import { ScrollTop } from 'app/core/core.decorators';
import { FetchState } from './components.types';


/**
 * Abstract catalog component.
 */
@Component({
    template: '@CatalogComponent',
    providers: [RequestManager]
})
export /*abstract*/ class CatalogComponent implements OnInit, OnDestroy {

    /** This catalog storage path */
    protected /*abstract*/ path: string;

    /** Current state */
    public state: FetchState = FetchState.PENDING;

    /** Current request query */
    public request: StoreQuery = {};

    /** Current collection */
    public collection: Collection<Model>;

    /** Unsubscribe subject */
    private unsubscribe = new Subject();

    /** Requests subject */
    private _requests = new ReplaySubject<StoreQuery>(1);

    /** Component states subject */
    private _states = new ReplaySubject<FetchState>(1);

    /** Default query values for requests */
    @Input() defaults: StoreQuery;

    /** Query bindings for requests */
    @Input() bindings: StoreQuery;


    /**
     * Component constructor.
     */
    constructor(
        protected store: StoreService,
        protected session: SessionService,
        protected manager: RequestManager,
        protected dialog: CnDialog,
        protected toaster: CnToaster
    ) { }


    /**
     * Component initialization.
     */
    ngOnInit() {
        // Update the component state on changes
        if (this.states)
            this.states
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(state => this.state = state);

        // Update the catalog when the request changes
        if (this.requests)
            this.requests
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(request => this.updateCatalog(request));

        // Create requests from the manager queries
        if (this.manager && this.manager.requests)
            this.manager.requests
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(query => {
                    const request = this.createRequest(query);
                    this.requests.next(request);
                });

        // Update the catalog when the user signs in/out
        if (this.session && this.session.events)
            this.session.events
                .pipe(
                    takeUntil(this.unsubscribe),
                    filter(e => e instanceof UserChanged)
                ).subscribe(e => this.requests.next(this.request));
    }


    /**
     * Component destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


    /**
     * Observable of requests.
     */
    get requests(): Subject<StoreQuery> {
        return this._requests;
    }


    /**
     * Observable of state changes.
     */
    get states(): Subject<FetchState> {
        return this._states;
    }


    /**
     * Search this catalog.
     *
     * @param search    Search keywords
     */
    public search(search: string) {
        this.manager.search(search);
    }


    /**
     * Sort this catalog.
     *
     * @param sort      Sort keys
     */
    public sort(sort: string[]) {
        this.manager.sort(sort);
    }


    /**
     * Change this catalog's page.
     *
     * @param page      Page number
     */
    @ScrollTop()
    public page(page: number) {
        this.manager.page(page);
    }


    /**
     * Fetch new results from the server.
     *
     * @param request       Request query
     */
    public fetch(query?: StoreQuery) {
        this.manager.replace(query);
    }


    /**
     * Creates a request object for the given query.
     *
     * @param query     Custom query parameters
     * @returns         Request query
     */
    private createRequest(query?: StoreQuery) {
        return { ...this.defaults, ...query, ...this.bindings };
    }


    /**
     * Update this catalog with new results from the server.
     *
     * @param request       Request query
     */
    private updateCatalog(request?: StoreQuery) {
        this.states.next(FetchState.PENDING);
        this.request = request;

        this.store.query(this.path, request)
            .subscribe(
                collection => {
                    this.collection = collection;

                    if (collection.length > 0) {
                        this.states.next(FetchState.READY);
                    } else {
                        this.states.next(FetchState.EMPTY);
                    }
                },

                errors => {
                    this.states.next(FetchState.ERROR)
                }
            );
    }

}
