import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CnCollection, CnModel, CnQuery, CnStore } from "concrete/core";
import { Tag, Block, Synapse } from "app/models";


@Component({
    selector: 'tag-details',
    templateUrl: 'tag-details.component.html',
    styleUrls: [ 'tag-details.component.scss' ]
})
export class TagDetailsComponent implements OnInit {
    
    /** Tag object */
    public tag: Tag = null;
    
    /** Synapse for this tag */
    public synapse: Synapse = null;
    
    /** Sidebar blocks for this tag */
    public blocks: CnCollection<Block> = null;
    
    
    /**
     * Component constructor.
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: CnStore
    ) {}
    
    
    /**
     * Component initialization
     */
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.clear();
            this.fetchTag(params.slug);
            window.scrollTo({ top: 0, behavior: 'auto' });
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
    private fetchTag(slug: string) {
        let params = { slug: slug, limit: 1, with: ['synapse'] };
        
        this.store.query('api/tags', params)
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
        this.store.query('api/blocks', { id: ids })
            .subscribe(blocks => {
                blocks.sort((a, b) => {
                    return ids.indexOf(a.id) - ids.indexOf(b.id)
                });
                
                this.blocks = blocks as CnCollection<Block>;
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

}