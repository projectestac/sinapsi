import * as moment from 'moment';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LOCALE_ID, Optional, SkipSelf } from '@angular/core';

import { FooterModule } from './footer';
import { HeaderModule } from './header';
import { LocalesModule } from './locales';
import { SessionService } from './services';
import { SettingsService } from './services';
import { StoreService } from './services';


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
    exports: [
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
                LocaleProvider,
                SessionService,
                SettingsService,
                StoreService
            ]
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
