import { Injectable } from '@angular/core';

import { SocialProvider } from './social.providers';
import { SOCIAL_PROVIDERS } from './social.providers';
import { _, format } from 'i18n';


/** Sharable model */
export interface Sharable {
    title: string;
    description: string;
    href: string;
}


/**
 * Share with your friends.
 */
@Injectable()
export class SocialService {

    /** Configuration */
    private links: any[];

    /** Share pop-up reference */
    private shareWindow: Window = null;

    /** Share popup options */
    private POPUP_OPTIONS = {
        toolbar: 'no',
        location: 'no',
        status: 'no',
        menubar: 'no',
        copyhistory: 'no',
        scrollbars: 'yes',
        width: 560,
        height: 600
    };


    /**
     * Share using the given href.
     *
     * @param url      URL to open
     */
    public share(url: URL | string) {
        const href = url.toString();
        
        if (href.startsWith('http') === false) {
            this.openPopup(href, '_self');
            return;
        }
        
        if (this.shareWindow && !this.shareWindow.closed) {
            this.shareWindow.location.href = href;
            this.shareWindow.focus();
            return;
        }
        
        this.shareWindow = this.openPopup(href, 'ShareWindow');
    }


    /**
     * Build a share URL for the given sharable.
     */
    public buildURL(sharable: Sharable, provider: SocialProvider): URL {
        const baseHref = location.origin;
        const link = new URL(sharable.href, baseHref).toString();
        const params = { link: encodeURIComponent(link) };
        const baseUrl = `${provider.url}?${provider.query}`;

        Object.entries(sharable).forEach(([key, value]) => {
            params[key] = (key === 'href') ?
                value : encodeURIComponent(value);
        });

        return new URL(format(baseUrl, params), baseHref);
    }


    /**
     * Open a new pop-up window.
     *
     * @param url       URL to open
     * @param name      Target or name of the window
     * @param params    Popup parameters object
     *
     * @returns         A reference to the opened window
     */
    private openPopup(url: string, name: string): Window {
        const options = Object.assign({}, this.POPUP_OPTIONS);

        // Center the popup window on the screen

        if (options['width'] && options['height']) {
            options['top'] = (screen.height / 2) - (options['height'] / 2);
            options['left'] = (screen.width / 2) - (options['width'] / 2);
        }

        // Map the options to a specification string

        const specs = Object.keys(options).map(
            (k) => `${k}=${options[k]}`).join(',');

        return window.open(url, name, specs);
    }

}
