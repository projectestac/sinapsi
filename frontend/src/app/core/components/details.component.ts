import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Collection } from 'app/core/services';
import { RequestManager, StoreQuery, StoreService } from 'app/core/services';
import { SessionService, SessionState} from 'app/core/auth';
import { SessionEvent, UserChanged } from 'app/core/auth';
import { ScrollTop } from 'app/core/core.decorators';
import { Block, Synapse } from 'app/models';
import { FetchState } from './components.types';


/**
 * Abstract synapse details component.
 */
@Component({
    template: '@CatalogComponent',
    providers: [ RequestManager ]
})
export /*abstract*/  class DetailsComponent implements OnDestroy, OnInit {

    /** Current state */
    public state: FetchState = FetchState.PENDING;

    /** Current request */
    public request: StoreQuery = {};

    /** Current synapse slug */
    public slug: string = null;

    /** Model for this synapse */
    public synapse: Synapse = null;

    /** Sidebar blocks for this synapse */
    public blocks: Collection<Block> = null;

    /** Unsubscribe subject */
    protected unsubscribe = new Subject();

    /** Component states subject */
    private _states = new ReplaySubject<FetchState>(1);


    /**
     * Component constructor.
     */
    constructor(
        protected manager: RequestManager,
        protected route: ActivatedRoute,
        protected router: Router,
        protected session: SessionService,
        protected store: StoreService
    ) {}


    /**
     * Component initialization.
     */
    ngOnInit() {
        // Update the component state on changes

        this.states
            .takeUntil(this.unsubscribe)
            .subscribe(state => this.state = state);

        // Get hold of request queries

        this.manager.requests
            .takeUntil(this.unsubscribe)
            .subscribe(query => this.request = query);

        // Refresh the synapse when the URL params change

        this.route.params
            .takeUntil(this.unsubscribe)
            .subscribe(params => {
                this.clear();
                this.fetchSynapse(params.slug);
                this.slug = params.slug;
            });

        // Refresh the synapse when the user signs in/out

        this.session.events
            .takeUntil(this.unsubscribe)
            .filter(e => e instanceof UserChanged)
            .subscribe(event => {
               if (this.slug !== null) {
                   this.clear();
                   this.fetchSynapse(this.slug);
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
     * Observable of state changes.
     */
    get states(): Subject<FetchState> {
        return this._states;
    }


    /**
     * Request a new keyword search.
     *
     * @param keywords  Search keywords
     */
    public search(keywords: string) {
        this.manager.search(keywords);
    }


    /**
     * Request a new keyword search.
     *
     * @param params    Request filters
     */
    public filter(params: any) {
        this.manager.merge({ page: 1, ...params });
    }


    /**
     * Clear this component objects.
     */
    protected clear() {
        this.synapse = null;
        this.blocks = null;
    }


    /**
     * Fetch the given synapse and its blocks.
     *
     * @param slug      Unique synapse slug
     */
    @ScrollTop()
    protected fetchSynapse(slug: string) {
        const params = { slug: slug, limit: 1 };

        this.states.next(FetchState.PENDING);

        this.store.query('/api/synapses', params)
            .subscribe(
                collection => {
                    if (collection.length > 0) {
                        this.synapse = <Synapse> collection[0];
                        this.states.next(FetchState.READY);

                        if (Array.isArray(this.synapse.blocks)) {
                            this.fetchBlocks(this.synapse.blocks);
                        }
                    } else {
                        this.states.next(FetchState.EMPTY);
                    }
                },

                errors => {
                    this.states.next(FetchState.ERROR);
                }
            );
    }


    /**
     * Fetch and sort the given sidebar blocks.
     *
     * @param ids       Block identifiers
     */
    protected fetchBlocks(ids: number[]) {
        this.store.query('/api/blocks', { id: ids })
            .subscribe(blocks => {
                blocks.sort((a, b) => {
                    return ids.indexOf(a.id) - ids.indexOf(b.id)
                });

                this.blocks = blocks as Collection<Block>;
            });
    }

}
