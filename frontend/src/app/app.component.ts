import { Component, OnInit } from "@angular/core";
import { Title } from '@angular/platform-browser';

import { CnSettings } from 'concrete/core';
import { CnBreadcrumbService } from 'concrete/breadcrumb';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        CnBreadcrumbService,
        CnSettings
    ]
})
export class AppComponent implements OnInit {

    /**
     * Component constructor.
     */
    constructor(
        private titleService: Title,
        private settingsService: CnSettings,
        private breadcrumbService: CnBreadcrumbService,
    ) {}


    /**
     * Component initialization method.
     */
    ngOnInit() {
        // Update the page title when the primary route changes
        
        this.breadcrumbService.breadcrumb.subscribe(breadcrumb => {
            let title: string = this.settingsService.get('title');
            let sections: string = breadcrumb.map(e => e.title)
                .reverse().join('. ');
            
            this.titleService.setTitle(sections.length ?
                `${sections} | ${title}` : title);
        });
    }

    
    /* ----------- */
    
    login() {
        // Show the log-in popup window
        
        let host = window.location.host;
        let popup = this.showPopup('/accounts/register', 'LoginWindow', {
            width: 500, height: 600
        });
        
        // Poll the window location and closed status
        
        let timer = setInterval(() => {
            try {
                if (popup.closed || host === popup.location.host) {
                    console.log("Logged in...");
                    clearInterval(timer);
                    popup.close();
                }
            } catch (e) {}
        }, 2000);
    }
    
    
    private showPopup(url: string, name: string, params: any) {
        let options = Object.assign({
            toolbar: 'no',
            location: 'no',
            status: 'no',
            menubar: 'no',
            copyhistory: 'no'
        }, params);
        
        if (params['width'] && params['height']) {
            options['top'] = (screen.height / 2) - (params['height'] / 2);
            options['left'] = (screen.width / 2) - (params['width'] / 2);
        }
        
        let specs = Object.keys(options)
            .map((k) => `${k}=${options[k]}`).join(',');
        
        return window.open(url, name, specs);
    }
}
