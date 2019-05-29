import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DragulaModule } from 'ng2-dragula';
import { ConcreteModule } from 'concrete';

import { CoreModule } from 'app/core';
import { SettingsService } from 'app/core';
import { AppComponent } from './app.component';
import { AppPolicies } from './app.policies';
import { AppRoutes } from './app.routes';
import { environment } from '../environments/environment';


/**
 * Application module.
 */
@NgModule({
    declarations: [
        AppComponent
    ],

    imports: [
        AppPolicies,
        AppRoutes,
        BrowserAnimationsModule,
        BrowserModule,
        ConcreteModule.forRoot(),
        CoreModule.forRoot(),
        DragulaModule,
        HttpClientModule,
        ServiceWorkerModule.register('./ngsw-worker.js', {
            enabled: environment.production
        })
    ],

    providers: [{
        provide: APP_INITIALIZER,
        useFactory: (settings) => () => settings.initialize(),
        deps: [ SettingsService ],
        multi: true
    }],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
