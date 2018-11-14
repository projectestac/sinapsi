import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { PostsModule } from 'app/feature/posts';

import { UsersTableComponent } from './catalog';
import { UsersRoutes } from './users.routes';
import { ROUTING_COMPONENTS } from './users.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS,
        UsersTableComponent
    ],

    imports: [
        SharedModule,
        PostsModule,
        UsersRoutes
    ]
})
export class UsersModule { }
