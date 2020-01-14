import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoreQuery } from 'app/core';
import { Synapse, SynapseType } from 'app/models';


@Component({
    selector: 'app-share-form',
    templateUrl: 'share-form.component.html',
    styleUrls: [ 'share-form.component.scss' ]
})
export class ShareFormComponent {

    /** Synapse model */
    @Input() synapse: Synapse = null;

    /** Request parameters */
    @Input() request: StoreQuery = {};

    /** Whether the embed includes a search box */
    public searchBox = false;

    /** Requested heigh of the embed in pixels */
    public height = 500;


    /**
     * Component constructor.
     */
    constructor(private router: Router) {}


    /**
     * Synapse's embed link.
     */
    get embedUrl(): string {
        const params = { 'search-box': this.searchBox };

        if (this.synapse) {
            const type = this.synapse['type'];
            const key = (type == SynapseType.TAGS) ? 'tag' : 'synapse';
            params[key] = this.synapse.slug;
        }

        const base = document.baseURI;
        const request = Object.assign(params, this.request);
        const path = this.serializeUrl(['/embed'], request).replace(/embed\?/, 'embed/?');

        return `${base}${path}`;
    }


    /**
     * Serializes a URL for use with the router.
     *
     * @param commands          Route commands
     * @param params            Request parameters
     *
     * @returns                 An URL relative to the root
     */
    private serializeUrl(commands: any[], params: any): string {
        const url = this.router.serializeUrl(
            this.router.createUrlTree(commands, {
                queryParams: params
            })
        );

        return url.substring(1);
    }
}
