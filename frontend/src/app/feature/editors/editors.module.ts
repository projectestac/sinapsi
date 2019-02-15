import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared';

import { AuthorFormComponent } from './forms';
import { BlockFormComponent } from './forms';
import { FeedsFormComponent } from './forms';
import { FiltersFormComponent } from './forms';
import { PrivilegesFormComponent } from './forms';
import { SynapseFormComponent } from './forms';
import { UserFormComponent } from './forms';

import { AuthorSectionComponent } from './sections';
import { BlocksSectionComponent } from './sections';
import { FiltersSectionComponent } from './sections';
import { FeedsSectionComponent } from './sections';
import { PrivilegesSectionComponent } from './sections';
import { SynapseSectionComponent } from './sections';
import { UserSectionComponent } from './sections';

import { EditorsRoutes } from './editors.routes';
import { ROUTING_COMPONENTS } from './editors.routes';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS,
        AuthorFormComponent,
        BlockFormComponent,
        FeedsFormComponent,
        FiltersFormComponent,
        FeedsSectionComponent,
        PrivilegesFormComponent,
        SynapseFormComponent,
        UserFormComponent,
        AuthorSectionComponent,
        BlocksSectionComponent,
        FiltersSectionComponent,
        PrivilegesSectionComponent,
        SynapseSectionComponent,
        UserSectionComponent
    ],

    imports: [
        EditorsRoutes,
        RouterModule,
        SharedModule
    ]
})
export class EditorsModule {}
