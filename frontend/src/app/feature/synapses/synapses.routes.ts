import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router'
import { SynapsesComponent } from './synapses.component';
import { SynapseDetailsComponent } from './details';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    SynapsesComponent,
    SynapseDetailsComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: SynapsesComponent,
    children: [{
        path: ':slug',
        component: SynapseDetailsComponent
    }, {
        path: '',
        redirectTo: '/catalogs/taxonomies'
    }]
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class SynapsesRoutes {}