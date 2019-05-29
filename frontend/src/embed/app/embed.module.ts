import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConcreteModule } from 'concrete';

import { CoreModule } from 'app/core';
import { PostsModule } from 'app/feature/posts';
import { SearchModule } from 'app/shared/search';
import { SettingsService } from 'app/core';
import { AppPolicies } from 'app/app.policies';

import { EmbedComponent } from './embed.component';
import { EmbedRoutes } from './embed.routes';
import { ROUTING_COMPONENTS } from './embed.routes';


/**
 * Embedded application module.
 */
@NgModule({
    declarations: [
        EmbedComponent,
        ROUTING_COMPONENTS
    ],

    imports: [
        AppPolicies,
        EmbedRoutes,
        BrowserAnimationsModule,
        BrowserModule,
        ConcreteModule.forRoot(),
        CoreModule.forRoot(),
        HttpClientModule,
        PostsModule,
        SearchModule
    ],

    providers: [{
        provide: APP_INITIALIZER,
        useFactory: (settings) => () => settings.initialize(),
        deps: [ SettingsService ],
        multi: true
    }],

    bootstrap: [
        EmbedComponent
    ]
})
export class EmbedModule {}
