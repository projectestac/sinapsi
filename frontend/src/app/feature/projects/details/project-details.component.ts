import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection, StoreService, ScrollTop } from 'app/core';
import { Block, Synapse } from 'app/models';


@Component({
    selector: 'app-project-details',
    templateUrl: 'project-details.component.html',
    styleUrls: [ 'project-details.component.scss' ]
})
export class ProjectDetailsComponent {

    /** Synapse for this project */
    public synapse: Synapse = null;

    /** Sidebar blocks for this project */
    public blocks: Collection<Block> = null;


    /**
     * Component constructor.
     */
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: StoreService
    ) {
        this.route.params.subscribe(params => {
            this.clear();
            this.fetchSynapse(params.slug);
        });
    }


    /**
     * Clear this component parameters.
     */
    private clear() {
        this.synapse = null;
        this.blocks = null;
    }


    /**
     * Fetch the given synapse and its blocks.
     *
     * @param slug      Unique synapse slug
     */
    @ScrollTop()
    private fetchSynapse(slug: string) {
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
    private fetchBlocks(ids: number[]) {
        this.store.query('/api/blocks', { id: ids })
            .subscribe(blocks => {
                blocks.sort((a, b) => {
                    return ids.indexOf(a.id) - ids.indexOf(b.id)
                });

                this.blocks = blocks as Collection<Block>;
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

}
