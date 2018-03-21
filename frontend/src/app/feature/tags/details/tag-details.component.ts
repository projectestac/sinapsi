import { Component } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';
import { Synapse, SynapseType, Tag } from 'app/models';
import { FetchState } from 'app/core/components';


@Component({
    selector: 'app-tag-details',
    templateUrl: 'tag-details.component.html',
    styleUrls: [ 'tag-details.component.scss' ],
    providers: [ RequestManager ]
})
export class TagDetailsComponent extends DetailsComponent {

    /** Tag object */
    public tag: Tag = null;


    /**
     * Clear this component parameters.
     */
    protected clear() {
        super.clear();
        this.tag = null;
    }


    /**
     * Fetch the home synapse and its side blocks.
     */
    protected fetchSynapse(slug: string) {
        this.fetchTag(slug);
    }


    /**
     * Fetch the given tag, along with its synapse and blocks if
     * they exist. If no synapse exists for the tag, a new dummy
     * synapse object is created.
     *
     * @param slug      Unique tag slug
     */
    private fetchTag(slug: string) {
        const params = { slug: slug, limit: 1, with: ['synapse'] };

        this.state = FetchState.PENDING;

        this.store.query('/api/tags', params)
            .subscribe(collection => {
                if (collection.length > 0) {
                    this.tag = <Tag> collection[0];
                    this.state = FetchState.READY;

                    this.synapse = this.tag['synapse'] ?
                        this.tag.synapse : this.createSynapse(this.tag);

                    if (Array.isArray(this.synapse.blocks)) {
                        this.fetchBlocks(this.synapse.blocks);
                    }
                } else {
                    this.state = FetchState.EMPTY;
                }
            }, errors => this.state = FetchState.ERROR);
    }


    /**
     * Creates a synapse object for the given tag.
     *
     * @param tag       Tag object
     * @returns         Synapse object
     */
    private createSynapse(tag: Tag): Synapse {
        const synapse = new Synapse();

        synapse.name = tag.name;
        synapse.slug = tag.slug;
        synapse.filters = { tag_id: tag.id };
        synapse.type = SynapseType.TAGS;

        return synapse;
    }

}
