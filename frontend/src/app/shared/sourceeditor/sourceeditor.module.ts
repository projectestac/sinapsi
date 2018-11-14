import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';

import { SourceEditorComponent } from './sourceeditor.component';


@NgModule({
    declarations: [
        SourceEditorComponent
    ],

    imports: [
        CommonModule,
        ConcreteModule,
        FormsModule
    ],

    exports: [
        SourceEditorComponent
    ]
})
export class SourceEditorModule {}
