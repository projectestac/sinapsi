import { Component, Input } from '@angular/core';
import { CnQuery, CnQuerier } from "concrete/core";
import { CatalogComponent } from 'app/shared';


@Component({
    selector: 'schools-catalog',
    templateUrl: 'schools-catalog.component.html',
    styleUrls: [ 'schools-catalog.component.scss' ],
    providers: [ CnQuerier ]
})
export class SchoolsCatalogComponent extends CatalogComponent {
    
    /** Catalog REST API path */
    @Input() requestPath: string = 'api/authors';
    
    /** Request query default values */
    @Input() requestDefaults: CnQuery = {
        sort: ['name']
    };
    
    /** Request query mandatory values */
    @Input() requestBindings: CnQuery = {
        type: 'schools',
        with: ['municipality', 'school', 'territory'],
        'min-school_id': 1
    };

}