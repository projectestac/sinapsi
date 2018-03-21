import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { ErrorsModule } from 'app/feature/errors';
import { PostsModule } from 'app/feature/posts';

import { TagsRoutes } from './tags.routes';
import { ROUTING_COMPONENTS } from './tags.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS
    ],

    imports: [
        SharedModule,
        ErrorsModule,
        PostsModule,
        TagsRoutes
    ]
})
export class TagsModule { }
