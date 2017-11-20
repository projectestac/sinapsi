import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared';
import { SynapseModule } from 'app/synapse';
import { ConcreteModule } from 'concrete';

import { ProjectsRoutes } from './projects.routes';
import { ROUTING_COMPONENTS } from './projects.routes';
import { ProjectsTableComponent } from './catalog';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS,
        ProjectsTableComponent
    ],
    
    imports: [
        CommonModule,
        SharedModule,
        SynapseModule,
        ConcreteModule,
        ProjectsRoutes
    ]
})
export class ProjectsModule { }
