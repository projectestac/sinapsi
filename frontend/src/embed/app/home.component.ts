import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection, StoreService } from 'app/core';
import { Synapse, Tag } from 'app/models';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

    /** Model for this synapse */
    public synapse: Synapse = null;

    /** Weather the search box is visible */
    public hasSearchBox = false;


    /**
     * Component constructor.
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: StoreService
    ) {}


    /**
     * Component initialization.
     */
    ngOnInit() {
        // Obtain the search box parameter on initialization
        
        this.route.queryParamMap.take(1).subscribe(params => {
            const value = params.get('search-box');
            this.hasSearchBox = (value === 'true');
        });
        
        // Update the synapse on parameter changes
        
        this.route.queryParamMap.subscribe(params => {
            if (this.synapse === null) {
                if (params.has('tag')) {
                    this.fetchTag(params.get('tag'));
                } else if (params.has('synapse')) {
                    this.fetchSynapse(params.get('synapse'));
                } else {
                    this.synapse = <Synapse> { id: null };
                }
            }
        });
    }


    /**
     * Request a new keyword search.
     */
    public search(keywords: string) {
        this.router.navigate(['.'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
            queryParams: {
                search: keywords,
                page: null
            }
        });
    }


    /**
     * Fetch the given synapse.
     *
     * @param slug      Unique synapse slug
     */
    private fetchSynapse(slug: string) {
        const params = { slug: slug, limit: 1 };

        this.store.query('/api/synapses', params)
            .subscribe(collection => {
                if (collection.length > 0) {
                    this.synapse = <Synapse> collection[0];
                }
            });
    }


    /**
     * Fetch the given tag.
     *
     * @param slug      Unique tag slug
     */
    private fetchTag(slug: string) {
        const params = { slug: slug, limit: 1, with: ['synapse'] };

        this.store.query('/api/tags', params)
            .subscribe(collection => {
                if (collection.length > 0) {
                    const tag = <Tag> collection[0];

                    this.synapse = tag['synapse'] ?
                        tag.synapse :
                        this.createSynapse(tag);
                }
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
