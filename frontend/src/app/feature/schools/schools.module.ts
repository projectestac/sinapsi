import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared';
import { SynapseModule } from 'app/synapse';
import { ConcreteModule } from 'concrete';

import { SchoolsRoutes } from './schools.routes';
import { ROUTING_COMPONENTS } from './schools.routes';
import { SchoolsTableComponent } from './catalog';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS,
        SchoolsTableComponent
    ],
    
    imports: [
        CommonModule,
        SharedModule,
        SynapseModule,
        ConcreteModule,
        SchoolsRoutes
    ]
})
export class SchoolsModule { }
