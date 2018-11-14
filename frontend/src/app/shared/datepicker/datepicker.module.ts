import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';

import { DatepickerComponent } from './datepicker.component';


@NgModule({
    declarations: [
        DatepickerComponent
    ],

    imports: [
        CommonModule,
        ConcreteModule,
        FormsModule
    ],

    exports: [
        DatepickerComponent
    ]
})
export class DatepickerModule {}
