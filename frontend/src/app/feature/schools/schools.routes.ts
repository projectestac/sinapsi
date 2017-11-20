import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router'
import { SchoolsComponent } from './schools.component';
import { SchoolDetailsComponent } from './details';
import { SchoolsCatalogComponent } from './catalog';


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
        data: { title: 'Schools' }
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