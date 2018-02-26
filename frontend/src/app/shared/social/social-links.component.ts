import { Component, Input, OnChanges } from '@angular/core';
import { Synapse, Tag } from 'app/models';
import { _, format } from 'i18n';

import { SOCIAL_PROVIDERS } from './social.providers';
import { SocialService } from './social.service';


@Component({
    selector: 'app-social-links',
    templateUrl: 'social-links.component.html',
    styleUrls: [ 'social-links.component.scss' ]
})
export class SocialLinksComponent implements OnChanges {

    /** Enabled providers */
    public readonly PROVIDERS = [
        'twitter',
        'facebook',
        'email',
        'feed'
    ];

    /** Sharable links */
    public links: any[] = null;

    /** Synapse to share */
    @Input() synapse: Synapse = null;

    /** Tag to share */
    @Input() tag: Tag = null;


    /**
     * Component constructor.
     */
    constructor(
        private social: SocialService
    ) {}


    /**
     * Reinitialize the links on any property change.
     */
    ngOnChanges(changes) {
        if (this.tag || this.synapse) {
            this.initLinks();
        }
    }


    /**
     * Share using the given sharable.
     *
     * @param sharable      Sharable model
     */
    public share(href: string) {
        this.social.share(href);
    }


    /**
     * Initialize the sharable links array.
     */
    private initLinks() {
        const model = this.tag || this.synapse;
        const type = model['type'] ? 'synapses' : 'tags';

        const sharable = {
            title: model['name'] || '',
            description: model['description'] || '',
            href: `${type}/${model['slug']}`
        };

        this.links = SOCIAL_PROVIDERS
            .filter(provider => {
                const index = this.PROVIDERS.indexOf(provider.id);
                return (index >= 0);
            })
            .map(provider => {
                const href = this.social.buildURL(
                    sharable, provider).toString();

                return {
                    title: provider.title,
                    icon: provider.icon,
                    class: provider.id,
                    href: href
                };
            });
    }

}
