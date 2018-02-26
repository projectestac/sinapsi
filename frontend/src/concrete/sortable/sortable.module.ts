import { NgModule } from '@angular/core';
import { CnSortService } from './sort.service';
import { CnSortableComponent } from './sortable.component';
import { CnSortByDirective } from './sortby.directive';


@NgModule({
    declarations: [
        CnSortableComponent,
        CnSortByDirective
    ],

    exports: [
        CnSortableComponent,
        CnSortByDirective
    ]
})
export class CnSortableModule {}
