import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';

import { CatalogsRoutes } from './catalogs.routes';
import { ROUTING_COMPONENTS } from './catalogs.routes';
import { SynapsesTableComponent } from './synapses/synapses-table.component';
import { TagsTableComponent } from './tags/tags-table.component';
import { TaxonomiesTreeComponent } from './taxonomies/taxonomies-tree.component';


@NgModule({
    declarations: [
        ROUTING_COMPONENTS,
        SynapsesTableComponent,
        TagsTableComponent,
        TaxonomiesTreeComponent
    ],

    imports: [
        CatalogsRoutes,
        SharedModule
    ]
})
export class CatalogsModule { }
