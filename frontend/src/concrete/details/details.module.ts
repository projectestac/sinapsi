import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CnExpandableModule } from 'concrete/expandable';
import { CnDetailsComponent } from './details.component';
import { CnSummaryComponent } from './summary.component';


@NgModule({
    declarations: [
        CnDetailsComponent,
        CnSummaryComponent
    ],

    imports: [
        CommonModule,
        CnExpandableModule
    ],

    exports: [
        CnDetailsComponent,
        CnSummaryComponent
    ]
})
export class CnDetailsModule {}
