import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { ErrorsModule } from 'app/feature/errors';
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
        ErrorsModule,
        PostsModule,
        UsersRoutes
    ]
})
export class UsersModule { }
