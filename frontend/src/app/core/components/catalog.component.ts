import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CnDialog } from 'concrete/dialog';
import { CnToaster } from 'concrete/toaster';

import { SessionService, SessionState} from 'app/core/services';
import { SessionEvent, SessionStateChanged } from 'app/core/services';
import { RequestManager, StoreService } from 'app/core/services';
import { Collection, Model, StoreQuery } from 'app/core/services';
import { ScrollTop } from 'app/core/core.decorators';
import { FetchState } from './components.types';


/**
 * Registers a callback for the given request parameter.
 *
 * This decorator can be used to modify the request object before it is
 * sent to the server. Decorated methods will receive the current request
 * object as a parameter.
 *
 * @example
 * ```typescript
 *
 * @OnRequestChange('section')
 * onSortChange(request: StoreQuery) {
 *     if (request.section === 'recent-posts') {
 *         request['sort'] = ['-created_at'];
 *     }
 * }
 *
 * ```
 */
export function OnRequestChange(key: string) {
    return function (target: any, method: string) {
        target.registerCallback(key, target[method]);
    };
}


/**
 * Abstract catalog component.
 */
@Component({
    template: '@CatalogComponent',
    providers: [ RequestManager ]
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

    /** On change event callables */
    private callbacks: Object;

    /** Unsubscribe subject */
    private unsubscribe = new Subject();

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
    ) {}


    /**
     * Component initialization.
     */
    ngOnInit() {
        // Update the catalog when the request changes

        this.manager.requests
            .takeUntil(this.unsubscribe)
            .subscribe(query => this.updateCatalog(
                this.createRequest(query)));

        // Update the catalog when the user signs in/out

        this.session.events
            .takeUntil(this.unsubscribe)
            .subscribe(event => {
               if (event instanceof SessionStateChanged) {
                   this.updateCatalog(this.request);
               }
            });
    }


    /**
     * Component destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


    /**
     * Navigates to the editor for the given model.
     *
     * @param id        Model unique identifier
     */
    @ScrollTop()
    public compose(id: number) {
        this.manager.navigate(['compose', id]);
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
     * Register a callback function for the given parameter. The
     * function will be invoked before each request if the parameter
     * value changed.
     *
     * @param key       Query paramaeter name
     * @param method    Callable function
     */
    public registerCallback(key: string, method: Function) {
        if (this.callbacks === undefined) {
            this.callbacks = {};
        }

        this.callbacks[key] = method;
    }


    /**
     * Creates a request object for the given query.
     *
     * @param query     Custom query parameters
     * @returns         Request query
     */
    private createRequest(query?: StoreQuery) {
        // Build the base request

        const request = Object.assign({},
            this.defaults || {},
            query || {},
            this.bindings || {}
        );

        // Invoke any registerd callables

        if (typeof this.callbacks === 'object') {
            const requestKeys = Object.keys(
                Object.assign({}, request, this.request));

            requestKeys.forEach(key => {
                if (key in this.callbacks) {
                    if (request[key] !== this.request[key]) {
                        this.callbacks[key].call(this, request);
                    }
                }
            });
        }

        return request;
    }


    /**
     * Update this catalog with new results from the server.
     *
     * @param request       Request query
     */
    private updateCatalog(request?: StoreQuery) {
        this.state = FetchState.PENDING;
        this.request = request;

        this.store.query(this.path, request).subscribe(
            collection => {
                this.collection = collection;
                this.state = (collection.total > 0) ?
                    FetchState.READY : FetchState.EMPTY;
            }, errors => this.state = FetchState.ERROR);
    }

}
