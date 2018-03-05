import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';

import { MultiselectComponent } from './multiselect.component';
import { TypeaheadComponent } from './typeahead.component';


@NgModule({
    declarations: [
        MultiselectComponent,
        TypeaheadComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ConcreteModule
    ],

    exports: [
        MultiselectComponent,
        TypeaheadComponent
    ]
})
export class TypeaheadModule {}
