import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared';
import { SynapseModule } from 'app/synapse';
import { ConcreteModule } from 'concrete';

import { UsersRoutes } from './users.routes';
import { ROUTING_COMPONENTS } from './users.routes';
import { UsersTableComponent } from './catalog';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS,
        UsersTableComponent
    ],
    
    imports: [
        CommonModule,
        SharedModule,
        SynapseModule,
        ConcreteModule,
        UsersRoutes
    ]
})
export class UsersModule { }
