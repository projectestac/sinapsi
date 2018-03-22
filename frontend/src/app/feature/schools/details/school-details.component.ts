import { Component, OnInit } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';
import { SectionsBuilder } from 'app/feature/posts';


@Component({
    selector: 'app-school-details',
    templateUrl: 'school-details.component.html',
    styleUrls: [ 'school-details.component.scss' ],
    providers: [ RequestManager ]
})
export class SchoolDetailsComponent extends DetailsComponent {

    /** Post browser sections */
    public sections = SectionsBuilder.forSynapse();

}
