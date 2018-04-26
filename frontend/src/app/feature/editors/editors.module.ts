import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared';

import { BlockFormComponent } from './forms';
import { FeedsFormComponent } from './forms';
import { FiltersFormComponent } from './forms';
import { PrivilegesFormComponent } from './forms';
import { ProjectFormComponent } from './forms';
import { SchoolFormComponent } from './forms';
import { SynapseFormComponent } from './forms';
import { UserFormComponent } from './forms';

import { EditorsRoutes } from './editors.routes';
import { ROUTING_COMPONENTS } from './editors.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS,
        BlockFormComponent,
        FeedsFormComponent,
        FiltersFormComponent,
        PrivilegesFormComponent,
        ProjectFormComponent,
        SchoolFormComponent,
        SynapseFormComponent,
        UserFormComponent
    ],

    imports: [
        EditorsRoutes,
        RouterModule,
        SharedModule
    ]
})
export class EditorsModule {}
