import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CnIconModule } from 'concrete/icon';
import { CnPaginationComponent } from './pagination.component';

@NgModule({
    declarations: [ CnPaginationComponent ],
    imports: [ CommonModule, CnIconModule ],
    exports: [ CnPaginationComponent ]
})
export class CnPaginationModule {}
