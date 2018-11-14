import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { PostsModule } from 'app/feature/posts';

import { SchoolsTableComponent } from './catalog';
import { SchoolsRoutes } from './schools.routes';
import { ROUTING_COMPONENTS } from './schools.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS,
        SchoolsTableComponent
    ],

    imports: [
        SharedModule,
        PostsModule,
        SchoolsRoutes
    ]
})
export class SchoolsModule { }
