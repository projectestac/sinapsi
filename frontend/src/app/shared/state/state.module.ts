import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConcreteModule } from 'concrete';
import { StateComponent } from './state.component';

@NgModule({
    declarations: [
        StateComponent
    ],
    
    imports: [
        CommonModule,
        RouterModule,
        ConcreteModule
    ],
    
    exports: [
        StateComponent
    ]
})
export class StateModule {}
