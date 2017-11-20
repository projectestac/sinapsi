import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CnCollection, CnModel, CnQuery, CnStore } from "concrete/core";
import { Synapse, Block } from "app/models";


@Component({
    selector: 'user-details',
    templateUrl: 'user-details.component.html',
    styleUrls: [ 'user-details.component.scss' ]
})
export class UserDetailsComponent {
    
    /** Synapse for this user */
    public synapse: Synapse = null;
    
    /** Sidebar blocks for this user */
    public blocks: CnCollection<Block> = null;
    
    
    /**
     * Component constructor.
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: CnStore
    ) {
        this.route.params.subscribe(params => {
            this.clear();
            this.fetchSynapse(params.slug);
            window.scrollTo({ top: 0, behavior: 'auto' });
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
    private fetchSynapse(slug: string) {
        let params = { slug: slug, limit: 1 };
        
        this.store.query('api/synapses', params)
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
        this.store.query('api/blocks', { id: ids })
            .subscribe(blocks => {
                blocks.sort((a, b) => {
                    return ids.indexOf(a.id) - ids.indexOf(b.id)
                });
                
                this.blocks = blocks as CnCollection<Block>;
            });
    }

}