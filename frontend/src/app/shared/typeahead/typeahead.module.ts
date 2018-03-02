import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';

import { TypeaheadComponent } from './typeahead.component';


@NgModule({
    declarations: [
        TypeaheadComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ConcreteModule
    ],

    exports: [
        TypeaheadComponent
    ]
})
export class TypeaheadModule {}
