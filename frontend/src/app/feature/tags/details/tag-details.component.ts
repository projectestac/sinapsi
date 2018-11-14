import { Component, OnInit } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';
import { FetchState } from 'app/core/components';
import { SectionsBuilder } from 'app/feature/posts';
import { Synapse, SynapseType, Tag } from 'app/models';


@Component({
    selector: 'app-tag-details',
    templateUrl: 'tag-details.component.html',
    styleUrls: [ 'tag-details.component.scss' ],
    providers: [ RequestManager ]
})
export class TagDetailsComponent extends DetailsComponent {

    /** Tag object */
    public tag: Tag = null;

    /** Post browser sections */
    public sections = SectionsBuilder.forSynapse();


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

        this.states.next(FetchState.PENDING);

        this.store.query('/api/tags', params)
            .subscribe(
                collection => {
                    if (collection.length > 0) {
                        this.tag = <Tag> collection[0];
                        this.states.next(FetchState.READY);

                        this.synapse = this.tag['synapse'] ?
                            this.tag.synapse : this.createSynapse(this.tag);

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
