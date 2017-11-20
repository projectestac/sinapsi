import { Component, Input } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Synapse, Tag } from 'app/models';


@Component({
    selector: 'app-social',
    templateUrl: 'social.component.html',
    styleUrls: [ 'social.component.scss' ]
})
export class SocialComponent {
    
    readonly TWITTER_BASE_URL = 'https://twitter.com/intent/tweet';
    readonly TWITTER_MAX_LENGTH = 115;
    readonly FACEBOOK_BASE_URL = 'https://www.facebook.com/dialog/feed';
    readonly FACEBOOK_APP_ID = '1991565897726387';
    
    @Input() synapse: Synapse = null;
    
    @Input() tag: Tag = null;
    
    
    /**
     * Component constructor.
     *
     * @param settings      CnSettings service
     */
    constructor(private metaService: Meta) {}
    
    
    shareOnTwitter() {
        let url = '';
        let text = '';
        
        let metadata = this.getMetadata();
        
        text = metadata.description.length ?
            `${metadata.title}: ${metadata.description}` :
            metadata.title;
        
        text = (text.length > this.TWITTER_MAX_LENGTH) ?
            text.substring(0, this.TWITTER_MAX_LENGTH) + '…' :
            text;
        
        window.open(`${this.TWITTER_BASE_URL}?text=${text}&url=${metadata.url}`, '_blank');
    }
    
    
    shareOnFacebook() {
        let metadata = this.getMetadata();
        
        window.open(`${this.FACEBOOK_BASE_URL}?link=${metadata.url}&app_id=${this.FACEBOOK_APP_ID}`, '_blank');
    }

    
    shareByEmail() {
        let metadata = this.getMetadata();
        
        let text = encodeURIComponent(`
            Hola! Fes-li un cop d’ull a aquesta sinapsi:
            
            ${metadata.title}.
            ${metadata.description}
            
            ${metadata.url}
        `);
        
        window.open(`mailto:?subject=Sinapsi: ${metadata.title}&body=${text}`, '_self');
    }

    
    showFeed() {
        if (this.synapse !== null) {
            let url = `feeds/synapses/${this.synapse.slug}`;
            window.open(url, '_blank');
        }
        
        if (this.tag !== null) {
            let url = `feeds/tags/${this.tag.slug}`;
            window.open(url, '_blank');
        }
    }
    
    
    private getMetadata(): any {
        let url = this.metaService.getTag('property="og:url"');
        let title = this.metaService.getTag('property="og:title"');
        let descp = this.metaService.getTag('property="og:description"');
        
        return {
            url: url.content,
            title: title.content,
            description: descp.content
        };
    }

}
