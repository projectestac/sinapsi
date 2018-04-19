import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { AdminModule } from 'app/feature/admin';

import { AuthorsResolver } from './authors.resolver';
import { AuthorsRoutes } from './authors.routes';
import { ROUTING_COMPONENTS } from './authors.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS
    ],

    imports: [
        SharedModule,
        AuthorsRoutes,
        AdminModule
    ],

    providers: [
        AuthorsResolver
    ]
})
export class AuthorsModule { }
