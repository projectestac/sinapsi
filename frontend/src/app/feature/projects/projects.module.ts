import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { PostsModule } from 'app/feature/posts';

import { ProjectsTableComponent } from './catalog';
import { ProjectsRoutes } from './projects.routes';
import { ROUTING_COMPONENTS } from './projects.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS,
        ProjectsTableComponent
    ],

    imports: [
        SharedModule,
        PostsModule,
        ProjectsRoutes
    ]
})
export class ProjectsModule { }
