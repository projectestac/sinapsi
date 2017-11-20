import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared';
import { SynapseModule } from 'app/synapse';
import { ConcreteModule } from 'concrete';

import { SynapsesRoutes } from './synapses.routes';
import { ROUTING_COMPONENTS } from './synapses.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS
    ],
    
    imports: [
        CommonModule,
        SharedModule,
        SynapseModule,
        ConcreteModule,
        SynapsesRoutes
    ]
})
export class SynapsesModule { }
