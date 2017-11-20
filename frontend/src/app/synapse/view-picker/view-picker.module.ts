import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcreteModule } from 'concrete';
import { SyViewPickerComponent } from './view-picker.component';


@NgModule({
    declarations: [
        SyViewPickerComponent
    ],
    
    imports: [
        CommonModule,
        ConcreteModule
    ],
    
    exports: [
        SyViewPickerComponent
    ]
})
export class SyViewPickerModule {}
