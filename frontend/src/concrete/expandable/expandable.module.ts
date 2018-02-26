import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CnExpandableComponent } from './expandable.component';
import { CnExpandableDirective } from './expandable.directive';

@NgModule({
    declarations: [
        CnExpandableComponent,
        CnExpandableDirective
    ],

    imports: [
        CommonModule
    ],

    exports: [
        CnExpandableComponent,
        CnExpandableDirective
    ]
})
export class CnExpandableModule {}
