import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsCatalogComponent } from './catalog';
import { ProjectDetailsComponent } from './details';
import { ProjectsComponent } from './projects.component';
import { _ } from 'i18n';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    ProjectsComponent,
    ProjectsCatalogComponent,
    ProjectDetailsComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: ProjectsComponent,
    children: [{
        path: '',
        component: ProjectsCatalogComponent,
        data: { title: _('Projects') }
    }, {
        path: ':slug',
        component: ProjectDetailsComponent
    }]
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class ProjectsRoutes {}
