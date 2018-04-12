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


@NgModule({
    declarations: [
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
        RouterModule,
        SharedModule
    ],

    exports: [
        BlockFormComponent,
        FeedsFormComponent,
        FiltersFormComponent,
        PrivilegesFormComponent,
        ProjectFormComponent,
        SchoolFormComponent,
        SynapseFormComponent,
        UserFormComponent
    ]
})
export class AdminModule {}
