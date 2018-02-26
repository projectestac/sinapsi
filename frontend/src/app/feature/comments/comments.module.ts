import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared';
import { CommentDetailsComponent } from './details';
import { CommentEditorComponent } from './editor';
import { CommentsBrowserComponent } from './comments-browser.component';
import { CommentsCatalogComponent } from './catalog';


@NgModule({
    declarations: [
        CommentDetailsComponent,
        CommentEditorComponent,
        CommentsBrowserComponent,
        CommentsCatalogComponent
    ],

    imports: [
        SharedModule
    ],

    exports: [
        CommentDetailsComponent,
        CommentEditorComponent,
        CommentsBrowserComponent,
        CommentsCatalogComponent
    ]
})
export class CommentsModule {}
