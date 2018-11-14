import { Component, OnInit } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';
import { SectionsBuilder } from 'app/feature/posts';


@Component({
    selector: 'app-synapse-details',
    templateUrl: 'synapse-details.component.html',
    styleUrls: [ 'synapse-details.component.scss' ],
    providers: [ RequestManager ]
})
export class SynapseDetailsComponent extends DetailsComponent {

    /** Post browser sections */
    public sections = SectionsBuilder.forSynapse();

}
