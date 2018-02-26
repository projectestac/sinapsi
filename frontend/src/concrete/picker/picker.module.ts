import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CnPickerComponent } from './picker.component';
import { CnPickerItemComponent } from './pickeritem.component';


@NgModule({
    declarations: [
        CnPickerItemComponent,
        CnPickerComponent
    ],

    imports: [
        CommonModule
    ],

    exports: [
        CnPickerItemComponent,
        CnPickerComponent
    ]
})
export class CnPickerModule {}
