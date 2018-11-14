import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
        RouterModule,
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
