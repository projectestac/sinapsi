import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { SchoolsCatalogComponent } from './catalog';
import { SchoolDetailsComponent } from './details';
import { SchoolsComponent } from './schools.component';
import { _ } from 'i18n';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    SchoolsComponent,
    SchoolsCatalogComponent,
    SchoolDetailsComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: SchoolsComponent,
    children: [{
        path: '',
        component: SchoolsCatalogComponent,
        data: { title: _('Schools') }
    }, {
        path: ':slug',
        component: SchoolDetailsComponent
    }]
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class SchoolsRoutes {}
