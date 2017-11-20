import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcreteModule } from 'concrete';
import { SharedModule } from 'app/shared';
import { SynapseModule } from 'app/synapse';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [
        HomeComponent
    ],
    
    imports: [
        CommonModule,
        ConcreteModule,
        SharedModule,
        SynapseModule
    ],
    
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}
