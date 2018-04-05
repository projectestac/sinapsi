import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeedbackComponent } from './feedback.component';


@NgModule({
    declarations: [
        FeedbackComponent
    ],

    imports: [
        CommonModule
    ],

    exports: [
        FeedbackComponent
    ]
})
export class FeedbackModule {}
