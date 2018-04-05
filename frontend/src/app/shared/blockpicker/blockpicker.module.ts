import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';

import { BlockpickerComponent } from './blockpicker.component';


@NgModule({
    declarations: [
        BlockpickerComponent
    ],

    imports: [
        CommonModule,
        ConcreteModule,
        FormsModule
    ],

    exports: [
        BlockpickerComponent
    ]
})
export class BlockpickerModule {}
