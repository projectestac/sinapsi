import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { SynapseEditorComponent } from './editor';
import { SynapseDetailsComponent } from './details';
import { SynapsesComponent } from './synapses.component';
import { _ } from 'i18n';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    SynapsesComponent,
    SynapseDetailsComponent,
    SynapseEditorComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: SynapsesComponent,
    children: [{
        path: 'compose/:id',
        component: SynapseEditorComponent,
        data: { title: _('Synapse editor') }
    }, {
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
