import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';

import { AuthorsResolver } from './authors.resolver';
import { AuthorsRoutes } from './authors.routes';
import { ROUTING_COMPONENTS } from './authors.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS
    ],

    imports: [
        SharedModule,
        AuthorsRoutes
    ],

    providers: [
        AuthorsResolver
    ]
})
export class AuthorsModule { }
