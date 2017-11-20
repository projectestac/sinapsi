import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared';
import { ConcreteModule } from 'concrete';

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
        CommonModule,
        SharedModule,
        ConcreteModule,
        CatalogsRoutes
    ]
})
export class CatalogsModule { }
