import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { CatalogsComponent } from './catalogs.component';
import { SynapsesCatalogComponent } from './synapses/synapses-catalog.component';
import { TagsCatalogComponent } from './tags/tags-catalog.component';
import { TaxonomiesCatalogComponent } from './taxonomies/taxonomies-catalog.component';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    CatalogsComponent,
    SynapsesCatalogComponent,
    TagsCatalogComponent,
    TaxonomiesCatalogComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: CatalogsComponent,
    children: [{
        path: 'synapses',
        component: SynapsesCatalogComponent,
        data: { title: 'Synapses' }
    }, {
        path: 'tags',
        component: TagsCatalogComponent,
        data: { title: 'Tags' }
    }, {
        path: 'taxonomies',
        component: TaxonomiesCatalogComponent,
        data: { title: 'Taxonomies' }
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