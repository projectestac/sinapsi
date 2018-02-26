import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection, StoreService, ScrollTop } from 'app/core';
import { Block, Synapse } from 'app/models';


@Component({
    selector: 'app-synapse-details',
    templateUrl: 'synapse-details.component.html',
    styleUrls: [ 'synapse-details.component.scss' ]
})
export class SynapseDetailsComponent {

    /** Model for this synapse */
    public synapse: Synapse = null;

    /** Sidebar blocks for this synapse */
    public blocks: Collection<Block> = null;


    /**
     * Component constructor.
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: StoreService
    ) {
        this.route.params.subscribe(params => {
            this.clear();
            this.fetchSynapse(params.slug);
        });
    }


    /**
     * On search
     */
    public onSearch(event: Event) {
        this.router.navigate(['.'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
            queryParams: { search: event }
        });
    }


    /**
     * Clear this component parameters.
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

        this.store.query('/api/synapses', params)
            .subscribe(collection => {
                if (collection.length > 0) {
                    this.synapse = <Synapse> collection[0];

                    if (Array.isArray(this.synapse.blocks)) {
                        this.fetchBlocks(this.synapse.blocks);
                    }
                }
            });
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
