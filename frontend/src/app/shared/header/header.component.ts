import { Component, Input, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

import { CnSettings } from 'concrete/core';


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: [ 'header.component.scss' ],
    providers: [ CnSettings ]
})
export class HeaderComponent {
    
    /** Header title */
    @Input() title: string = null;
    
    /** Toolbar links expandable menu */
    @ViewChild('linksExp') linksExp;
    
    
    /** Available locales */
    public locales: any = {};
    
    
    /**
     * Component constructor.
     *
     * @param settings      CnSettings service
     */
    constructor(
        private router: Router,
        private settings: CnSettings
    ) {
        this.title = settings.get('title');
        this.locales = settings.get('locales');
        
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.linksExp.close();
            }
        });
    }
}
