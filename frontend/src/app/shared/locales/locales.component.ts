import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { CnSettings } from 'concrete/core';


@Component({
    selector: 'app-locales',
    templateUrl: 'locales.component.html',
    styleUrls: [ 'locales.component.scss' ],
    providers: [ CnSettings ]
})
export class LocalesComponent {
    
    /** Available locales */
    public locales: any = [];
    
    /** Current locale ID */
    public lang: string = 'es';
    
    /** Current URL path */
    public path: string = '';
    
    
    /**
     * Component constructor.
     *
     * @param settings      CnSettings service
     */
    constructor(
        private settings: CnSettings,
        private location: Location,
        private router: Router
    ) {
        // Obtain the current and supported locales
        
        this.locales = settings.get('locales');
        this.lang = document.documentElement.lang;
        
        // Whatch for changes on the location
        
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.path = location.path();
            }
        });
    }
}
