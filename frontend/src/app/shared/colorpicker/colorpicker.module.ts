import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';

import { ColorpickerComponent } from './colorpicker.component';


@NgModule({
    declarations: [
        ColorpickerComponent
    ],

    imports: [
        CommonModule,
        ConcreteModule,
        FormsModule
    ],

    exports: [
        ColorpickerComponent
    ]
})
export class ColorpickerModule {}
