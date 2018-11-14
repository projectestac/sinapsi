import { Location } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SettingsService } from 'app/core/services';


@Component({
    selector: 'app-locales',
    templateUrl: 'locales.component.html',
    styleUrls: [ 'locales.component.scss' ]
})
export class LocalesComponent {

    /** Available locales */
    public locales: any = [];

    /** Current locale ID */
    public currentLocale: string;

    /** Current URL path */
    public path = '';


    /**
     * Component constructor.
     */
    constructor(
        @Inject(LOCALE_ID)
        private locale: string,
        private settings: SettingsService,
        private location: Location,
        private router: Router,
    ) {
        this.locales = settings.get('locales');
        this.currentLocale = locale;

        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.path = location.path();
            }
        });
    }

}
