import { Component, Input } from '@angular/core';
import { CnQuery, CnQuerier } from "concrete/core";
import { CatalogComponent } from 'app/shared';


@Component({
    selector: 'users-catalog',
    templateUrl: 'users-catalog.component.html',
    styleUrls: [ 'users-catalog.component.scss' ],
    providers: [ CnQuerier ]
})
export class UsersCatalogComponent extends CatalogComponent {
    
    /** Catalog REST API path */
    @Input() requestPath: string = 'api/authors';
    
    /** Request query default values */
    @Input() requestDefaults: CnQuery = {
        sort: ['name']
    };
    
    /** Request query mandatory values */
    @Input() requestBindings: CnQuery = {
        type: 'users',
        with: ['municipality', 'school', 'user'],
        'min-user_id': 1
    };

}