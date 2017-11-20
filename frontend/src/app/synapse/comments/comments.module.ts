import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';

import { SyCommentComponent } from './comment.component';
import { SyCommentBoardComponent } from './comment-board.component';
import { SyCommentFormComponent } from './comment-form.component';


@NgModule({
    declarations: [
        SyCommentComponent,
        SyCommentBoardComponent,
        SyCommentFormComponent
    ],
    
    imports: [
        CommonModule,
        FormsModule,
        ConcreteModule
    ],
    
    exports: [
        SyCommentComponent,
        SyCommentBoardComponent,
        SyCommentFormComponent
    ]
})
export class SyCommentsModule {}
