import * as moment from 'moment';

import { APP_INITIALIZER } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LOCALE_ID, Optional, SkipSelf } from '@angular/core';

import { AuthModule } from './auth';
import { FooterModule } from './footer';
import { HeaderModule } from './header';
import { LocalesModule } from './locales';

import { Comparator } from './services';
import { SettingsService } from './services';
import { StoreService } from './services';


/**
 * Initializes the application. This factory method reads the
 * environment.json configuration file from the server into
 * the settings service.
 */
export function initialize(settings: SettingsService) {
    return () => settings.initialize();
}


/**
 * Returns the locale code defined on the document's &lt;html&gt; tag.
 * Defaults to 'en' if the lang attribute could not be found.
 */
export function getDocumentLocale() {
    return document.documentElement.lang || 'en';
}


/**
 * Provides LOCALE_ID from the current HTML lang attribute.
 */
export const LocaleProvider = {
    provide: LOCALE_ID,
    useFactory: getDocumentLocale
};


/**
 * Core module.
 */
@NgModule({
    imports: [
        AuthModule
    ],

    exports: [
        AuthModule,
        FooterModule,
        HeaderModule,
        LocalesModule
    ]
})
export class CoreModule {

    /**
     * Root providers.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                Comparator,
                LocaleProvider,
                SettingsService,
                StoreService,
            {
                provide: APP_INITIALIZER,
                useFactory: initialize,
                deps: [ SettingsService ],
                multi: true
            }]
        };
    }


    /**
     * Module constructor.
     */
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule already loaded');
        }

        // External library settings

        moment.locale(getDocumentLocale());
    }
}
