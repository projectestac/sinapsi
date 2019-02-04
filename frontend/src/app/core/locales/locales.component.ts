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

    /** Current URL path */
    public path = '';

    /** Root of the application */
    public baseHref: string;

    /** Available locales */
    public locales: any = [];

    /** Current locale ID */
    public currentLocale: string;


    /**
     * Component constructor.
     */
    constructor(
        @Inject(LOCALE_ID)
        locale: string,
        settings: SettingsService,
        location: Location,
        router: Router
    ) {
        this.baseHref = settings.get('app_url', '');
        this.locales = settings.get('locales', []);
        this.currentLocale = locale;

        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.path = location.path();
            }
        });
    }

}
