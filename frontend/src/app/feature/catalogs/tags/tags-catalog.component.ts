import { Component, Input } from '@angular/core';
import { CnQuery, CnQuerier } from "concrete/core";
import { CatalogComponent } from 'app/shared';


@Component({
    selector: 'tags-catalog',
    templateUrl: 'tags-catalog.component.html',
    styleUrls: [ 'tags-catalog.component.scss' ],
    providers: [ CnQuerier ]
})
export class TagsCatalogComponent extends CatalogComponent {
    
    /** Catalog REST API path */
    @Input() requestPath: string = 'api/tags';
    
    /** Request query default values */
    @Input() requestDefaults: CnQuery = {
        sort: ['-post_count', 'name']
    };
    
    /** Request query mandatory values */
    @Input() requestBindings: CnQuery = {
        with: ['synapse']
    };

}