import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { HelpRoutes } from './help.routes';
import { ROUTING_COMPONENTS } from './help.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS
    ],

    imports: [
        SharedModule,
        HelpRoutes
    ]
})
export class HelpModule { }
