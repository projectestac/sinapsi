import { Component } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';


@Component({
    selector: 'app-synapse-details',
    templateUrl: 'synapse-details.component.html',
    styleUrls: [ 'synapse-details.component.scss' ],
    providers: [ RequestManager ]
})
export class SynapseDetailsComponent extends DetailsComponent {}
