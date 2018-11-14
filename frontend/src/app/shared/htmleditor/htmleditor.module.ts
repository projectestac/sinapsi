import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ConcreteModule } from 'concrete';

import { HTMLEditorComponent } from './htmleditor.component';


@NgModule({
    declarations: [
        HTMLEditorComponent
    ],

    imports: [
        CommonModule,
        ConcreteModule,
        EditorModule,
        FormsModule
    ],

    exports: [
        HTMLEditorComponent
    ]
})
export class HTMLEditorModule {}
