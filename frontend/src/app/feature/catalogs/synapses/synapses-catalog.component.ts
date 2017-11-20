import { Component, Input } from '@angular/core';
import { CnQuery, CnQuerier } from "concrete/core";
import { CatalogComponent } from 'app/shared';


@Component({
    selector: 'synapses-catalog',
    templateUrl: 'synapses-catalog.component.html',
    styleUrls: [ 'synapses-catalog.component.scss' ],
    providers: [ CnQuerier ]
})
export class SynapsesCatalogComponent extends CatalogComponent {
    
    /** Catalog REST API path */
    @Input() requestPath: string = 'api/synapses';
    
    /** Request query default values */
    @Input() requestDefaults: CnQuery = {
        sort: ['name']
    };
    
    /** Request query mandatory values */
    @Input() requestBindings: CnQuery = {
        type: 'synapses'
    };

}