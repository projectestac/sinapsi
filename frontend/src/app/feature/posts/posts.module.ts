import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared';
import { CommentsModule } from 'app/feature/comments';
import { SectionSelectComponent } from './selectors';
import { PostDetailsComponent } from './details';
import { PostsBrowserComponent } from './posts-browser.component';
import { PostsCatalogComponent } from './catalog';
import { ViewSelectComponent } from './selectors';


@NgModule({
    declarations: [
        SectionSelectComponent,
        PostDetailsComponent,
        PostsBrowserComponent,
        PostsCatalogComponent,
        ViewSelectComponent
    ],

    imports: [
        CommentsModule,
        RouterModule,
        SharedModule
    ],

    exports: [
        PostDetailsComponent,
        PostsBrowserComponent,
        PostsCatalogComponent
    ]
})
export class PostsModule {}
