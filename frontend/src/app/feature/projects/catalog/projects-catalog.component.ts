import { Component, Input } from '@angular/core';
import { CnQuery, CnQuerier } from "concrete/core";
import { CatalogComponent } from 'app/shared';


@Component({
    selector: 'projects-catalog',
    templateUrl: 'projects-catalog.component.html',
    styleUrls: [ 'projects-catalog.component.scss' ],
    providers: [ CnQuerier ]
})
export class ProjectsCatalogComponent extends CatalogComponent {
    
    /** Catalog REST API path */
    @Input() requestPath: string = 'api/authors';
    
    /** Request query default values */
    @Input() requestDefaults: CnQuery = {
        sort: ['name']
    };
    
    /** Request query mandatory values */
    @Input() requestBindings: CnQuery = {
        type: 'projects',
        with: ['project', 'municipality', 'school'],
        'min-project_id': 1
    };

}