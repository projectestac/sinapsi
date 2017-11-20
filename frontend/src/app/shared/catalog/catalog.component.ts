import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { CnQuery, CnQuerier } from "concrete/core";
import { CnCollection, CnModel, CnStore } from "concrete/core";


/** Catalog component states */
export class CatalogState {
    static readonly PENDING = 'pending';   // Currently fetching results
    static readonly EMPTY   = 'empty';     // No results were found
    static readonly READY   = 'ready';     // Results succesfully retrieved
    static readonly ERROR   = 'error';     // Could not retrive results
}


/**
 * This decorator registers a callback method for the given
 * request parameter.
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
    template: '<router-outlet></router-outlet>',
    providers: [ CnQuerier ]
})
export class CatalogComponent implements OnInit {
    
    /** Current state */
    private _state: string = CatalogState.PENDING;
    
    /** Current request query */
    private _request: CnQuery = {};
    
    /** Current collection */
    private _collection: CnCollection<CnModel>;
    
    /** On change event callables */
    private _callbacks: Object;
    
    /** Catalog REST API path */
    @Input() requestPath: string;
    
    /** Request query default values */
    @Input() requestDefaults: CnQuery;
    
    /** Request query mandatory values */
    @Input() requestBindings: CnQuery;
    
    
    /**
     * Component constructor.
     */
    constructor(
        protected querier: CnQuerier,
        protected store: CnStore
    ) {}
    
    
    /**
     * Component initialization.
     */
    ngOnInit() {
        this.querier.query.subscribe(query => {
            this.updateCatalog(this.createRequest(query));
        });
    }
    
    
    /**
     * Current request for the catalog.
     *
     * @returns         Request query object
     */
    get collection(): CnCollection<CnModel> {
        return this._collection;
    }
    
    
    /**
     * Current request for the catalog.
     *
     * @returns         Request query object
     */
    get request(): CnQuery {
        return this._request;
    }
    
    
    /**
     * Current state of the catalog.
     *
     * @returns         Catalog state value
     */
    get state(): string {
        return this._state;
    }
    
    
    /* */
    
    create() {
        
    }
    
    
    /**
     * Search this catalog.
     *
     * @param search    Search keywords
     */
    search(search: string) {
        this.querier.search(search);
    }
    
    
    /**
     * Sort this catalog.
     *
     * @param sort      Sort keys
     */
    sort(sort: string[]) {
        this.querier.sort(sort);
    }
    
    
    /**
     * Change this catalog's page.
     *
     * @param page      Page number
     */
    page(page: number) {
        this.querier.page(page);
        window.scrollTo({ top: 0, behavior: 'auto' });
    }
    
    
    /**
     * Fetch new results from the server.
     *
     * @param request       Request query
     */
    public fetch(query?: CnQuery) {
        this.querier.replace(query);
    }
    
    /* */
    
    
    /**
     * Register a callback function for the given parameter. The
     * function will be invoked before each request if the parameter
     * value changed.
     *
     * @param key       Query paramaeter name
     * @param method    Callable function
     */
    public registerCallback(key: string, method: Function) {
        if (this._callbacks === undefined)
            this._callbacks = {};
        this._callbacks[key] = method;
    }
    
    
    /**
     * Creates a request object for the given query.
     *
     * @param query     Custom query parameters
     * @returns         Request query
     */
    private createRequest(query?: CnQuery) {
        // Build the base request
        
        let request = Object.assign({},
            this.requestDefaults || {},
            query || {},
            this.requestBindings || {}
        );
        
        // Invoke any registerd callables
        
        if (typeof this._callbacks === 'object') {
            for (let key in request) {
                if (key in this._callbacks) {
                    if (request[key] !== this._request[key])
                        this._callbacks[key](request);
                }
            }
        }
        
        return request;
    }
    
    
    /**
     * Update this catalog with new results from the server.
     *
     * @param request       Request query
     */
    private updateCatalog(request?: CnQuery) {
        this._state = CatalogState.PENDING;
        this._request = request;
        
        this.store.query(this.requestPath, request).subscribe(
            collection => {
                this._collection = collection;
                this._state = (collection.total > 0) ?
                    CatalogState.READY : CatalogState.EMPTY;
            },
            
            errors => {
                this._state = CatalogState.ERROR
            }
        );
    }

}