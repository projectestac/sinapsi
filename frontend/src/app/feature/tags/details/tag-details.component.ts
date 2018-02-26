import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection, StoreService, ScrollTop } from 'app/core';
import { Block, Synapse, Tag } from 'app/models';


@Component({
    selector: 'app-tag-details',
    templateUrl: 'tag-details.component.html',
    styleUrls: [ 'tag-details.component.scss' ]
})
export class TagDetailsComponent {

    /** Tag object */
    public tag: Tag = null;

    /** Synapse for this tag */
    public synapse: Synapse = null;

    /** Sidebar blocks for this tag */
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
            this.fetchTag(params.slug);
        });
    }


    /**
     * Clear this component parameters.
     */
    private clear() {
        this.tag = null;
        this.synapse = null;
        this.blocks = null;
    }


    /**
     * Fetch the given tag and its blocks.
     *
     * @param slug      Unique tag slug
     */
    @ScrollTop()
    private fetchTag(slug: string) {
        const params = { slug: slug, limit: 1, with: ['synapse'] };

        this.store.query('/api/tags', params)
            .subscribe(collection => {
                if (collection.length > 0) {
                    this.tag = <Tag> collection[0];
                    this.synapse = this.tag['synapse'] ?
                        this.tag.synapse :
                        this.createSynapse(this.tag);

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
     * Creates a synapse object for the given tag.
     *
     * @param tag       Tag object
     * @returns         Synapse object
     */
    private createSynapse(tag: Tag): Synapse {
        return <Synapse> {
            id: null,
            blocks: null,
            description: null,
            filters: { tag_id: tag.id },
            name: tag.name,
            slug: tag.slug,
            type: 'tags',
            synapse_id: null,
            created_at: null,
            updated_at: null
        }
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
