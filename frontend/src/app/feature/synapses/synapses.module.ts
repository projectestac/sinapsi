import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { AdminModule } from 'app/feature/admin';
import { PostsModule } from 'app/feature/posts';

import { SynapsesRoutes } from './synapses.routes';
import { ROUTING_COMPONENTS } from './synapses.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS
    ],

    imports: [
        SharedModule,
        AdminModule,
        PostsModule,
        SynapsesRoutes
    ]
})
export class SynapsesModule { }
