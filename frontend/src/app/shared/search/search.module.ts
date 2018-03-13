import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';
import { DatepickerModule } from 'app/shared/datepicker';
import { TypeaheadModule } from 'app/shared/typeahead';

import { FiltersComponent } from './filters.component';
import { SearchComponent } from './search.component';


@NgModule({
    declarations: [
        FiltersComponent,
        SearchComponent
    ],

    imports: [
        CommonModule,
        ConcreteModule,
        DatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        TypeaheadModule
    ],

    exports: [
        FiltersComponent,
        SearchComponent
    ]
})
export class SearchModule {}
