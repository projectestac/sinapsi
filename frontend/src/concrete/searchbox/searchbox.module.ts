import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CnIconModule } from 'concrete/icon';
import { CnSearchboxComponent } from './searchbox.component';

@NgModule({
    declarations: [ CnSearchboxComponent ],
    imports: [ CommonModule, CnIconModule ],
    exports: [ CnSearchboxComponent ]
})
export class CnSearchboxModule {}
