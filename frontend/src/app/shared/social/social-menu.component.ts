import { Component, Input, ViewChild, OnChanges } from '@angular/core';

import { Post } from 'app/models';
import { SOCIAL_PROVIDERS } from './social.providers';
import { SocialService } from './social.service';
import { _, format } from 'i18n';


@Component({
    selector: 'app-social-menu',
    templateUrl: 'social-menu.component.html',
    styleUrls: [ 'social-menu.component.scss' ]
})
export class SocialMenuComponent implements OnChanges {

    /** Enabled providers */
    public readonly PROVIDERS = [
        'twitter',
        'facebook',
        'email'
    ];

    /** Sharable links */
    public links: any[];

    /** Social menu */
    @ViewChild('menu') menu;

    /** Post to share */
    @Input() post: Post = null;


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
        if (this.post) {
            this.initLink();
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
    private initLink() {
        const sharable = {
            title: this.post.title || '',
            description: this.post.excerpt || '',
            href: this.post.url
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
                    href: href
                };
            });
    }

}
