import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConcreteModule } from 'concrete';

import { CoreModule } from 'app/core';
import { AuthModule } from 'app/core/auth';
import { PostsModule } from 'app/feature/posts';
import { SearchModule } from 'app/shared/search';
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
        AuthModule.forRoot(),
        ConcreteModule.forRoot(),
        CoreModule.forRoot(),
        HttpClientModule,
        PostsModule,
        SearchModule
    ],

    bootstrap: [
        EmbedComponent
    ]
})
export class EmbedModule {}
