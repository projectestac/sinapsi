import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';
import { SySearchFormComponent } from './search-form.component';


@NgModule({
    declarations: [
        SySearchFormComponent
    ],
    
    imports: [
        CommonModule,
        FormsModule,
        ConcreteModule
    ],
    
    exports: [
        SySearchFormComponent
    ]
})
export class SySearchFormModule {}
