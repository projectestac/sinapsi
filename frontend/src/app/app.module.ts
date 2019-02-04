import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragulaModule } from 'ng2-dragula';
import { ConcreteModule } from 'concrete';

import { AppComponent } from 'app/app.component';
import { AppPolicies } from 'app/app.policies';
import { AppRoutes } from 'app/app.routes';
import { AuthModule } from 'app/core/auth';
import { CoreModule } from 'app/core';
import { ServiceWorkerModule } from '@angular/service-worker';
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
        AuthModule.forRoot(),
        ConcreteModule.forRoot(),
        CoreModule.forRoot(),
        DragulaModule,
        HttpClientModule,
        ServiceWorkerModule.register('./ngsw-worker.js', {
            enabled: environment.production
        })
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
