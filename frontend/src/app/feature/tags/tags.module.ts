import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared';
import { SynapseModule } from 'app/synapse';
import { ConcreteModule } from 'concrete';

import { TagsRoutes } from './tags.routes';
import { ROUTING_COMPONENTS } from './tags.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS
    ],
    
    imports: [
        CommonModule,
        SharedModule,
        SynapseModule,
        ConcreteModule,
        TagsRoutes
    ]
})
export class TagsModule { }
