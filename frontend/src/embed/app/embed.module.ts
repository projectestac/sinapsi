import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConcreteModule } from 'concrete';

import { CoreModule } from 'app/core';
import { PostsModule } from 'app/feature/posts';
import { SearchModule } from 'app/shared/search';
import { AppPolicies } from 'app/app.policies';

import { EmbedComponent } from './embed.component';
import { EmbedRoutes } from './embed.routes';
import { ROUTING_COMPONENTS } from './embed.routes';


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
        HttpModule,
        PostsModule,
        SearchModule
    ],

    bootstrap: [
        EmbedComponent
    ]
})
export class EmbedModule {}
