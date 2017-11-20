import { Component, Input } from '@angular/core';
import { Router, UrlTree } from '@angular/router';


@Component({
    selector: 'sy-share-form',
    templateUrl: 'share-form.component.html',
    styleUrls: [ 'share-form.component.scss' ]
})
export class SyShareFormComponent {
    
    /** Base route URL for the links */
    @Input("root") root: string = null;
    
    /** Query parameters */
    @Input("params") params: Object = {};
    
    /** Whether the embed includes a search box */
    public searchBox: boolean = false;
    
    /** Requested heigh of the embed in pixels */
    public height: number = 500;
    
    
    /**
     * Component constructor.
     */
    constructor(private router: Router) {}
    
    
    /**
     * Synapse's link to share.
     */
    get shareUrl(): string {
        let base = document.baseURI;
        let path = this.serializeUrl([this.root || '/'], this.params);
        
        return `${base}${path}`;
    }
    
    
    /**
     * Synapse's embed link.
     */
    get embedUrl(): string {
        let embedParams = {
            'synapse': this.root || '/',
            'search-box': this.searchBox
        };
        
        let base = document.baseURI;
        let params = Object.assign(embedParams, this.params);
        let path = this.serializeUrl(['/embed'], params);
        
        return `${base}${path}`;
    }
    
    
    /**
     * Serializes a URL for use with the router.
     *
     * @param commands          Route commands
     * @param params            Query parameters
     *
     * @returns                 An URL relative to the root
     */
    private serializeUrl(commands: any[], params: any): string {
        let url = this.router.serializeUrl(
            this.router.createUrlTree(commands, {
                queryParams: params
            })
        );
        
        return url.substring(1);
    }
}