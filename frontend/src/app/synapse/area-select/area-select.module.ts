import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcreteModule } from 'concrete';
import { SyAreaSelectComponent } from './area-select.component';


@NgModule({
    declarations: [
        SyAreaSelectComponent
    ],
    
    imports: [
        CommonModule,
        ConcreteModule
    ],
    
    exports: [
        SyAreaSelectComponent
    ]
})
export class SyAreaSelectModule {}
