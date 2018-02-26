import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConcreteModule } from 'concrete';

import { ShareFormComponent } from './share-form.component';


@NgModule({
    declarations: [
        ShareFormComponent
    ],

    imports: [
        CommonModule,
        ConcreteModule,
        FormsModule,
        RouterModule
    ],

    exports: [
        ShareFormComponent
    ]
})
export class ShareFormModule {}
