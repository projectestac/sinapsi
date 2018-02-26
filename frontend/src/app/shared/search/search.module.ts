import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';

import { SearchComponent } from './search.component';


@NgModule({
    declarations: [
        SearchComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ConcreteModule
    ],

    exports: [
        SearchComponent
    ]
})
export class SearchModule {}
