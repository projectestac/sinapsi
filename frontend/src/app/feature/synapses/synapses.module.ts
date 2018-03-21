import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { ErrorsModule } from 'app/feature/errors';
import { PostsModule } from 'app/feature/posts';

import { SynapsesRoutes } from './synapses.routes';
import { ROUTING_COMPONENTS } from './synapses.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS
    ],

    imports: [
        SharedModule,
        ErrorsModule,
        PostsModule,
        SynapsesRoutes
    ]
})
export class SynapsesModule { }
