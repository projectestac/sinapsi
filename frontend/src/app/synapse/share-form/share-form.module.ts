import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConcreteModule } from 'concrete';
import { SyShareFormComponent } from './share-form.component';


@NgModule({
    declarations: [
        SyShareFormComponent
    ],
    
    imports: [
        CommonModule,
        ConcreteModule,
        FormsModule,
        RouterModule
    ],
    
    exports: [
        SyShareFormComponent
    ]
})
export class SyShareFormModule {}
