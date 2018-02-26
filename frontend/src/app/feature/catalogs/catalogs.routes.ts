import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogBrowserComponent } from './catalog-browser.component';
import { SynapsesCatalogComponent } from './synapses';
import { TagsCatalogComponent } from './tags';
import { TaxonomiesCatalogComponent } from './taxonomies';
import { _ } from 'i18n';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    CatalogBrowserComponent,
    SynapsesCatalogComponent,
    TagsCatalogComponent,
    TaxonomiesCatalogComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: CatalogBrowserComponent,
    children: [{
        path: 'synapses',
        component: SynapsesCatalogComponent,
        data: { title: _('Synapses') }
    }, {
        path: 'tags',
        component: TagsCatalogComponent,
        data: { title: _('Tags') }
    }, {
        path: 'taxonomies',
        component: TaxonomiesCatalogComponent,
        data: { title: _('Taxonomies') }
    }, {
        path: '',
        redirectTo: 'taxonomies'
    }]
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class CatalogsRoutes {}
