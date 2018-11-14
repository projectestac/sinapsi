import { Component, OnInit } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';
import { SectionsBuilder } from 'app/feature/posts';


@Component({
    selector: 'app-project-details',
    templateUrl: 'project-details.component.html',
    styleUrls: [ 'project-details.component.scss' ],
    providers: [ RequestManager ]
})
export class ProjectDetailsComponent extends DetailsComponent {

    /** Post browser sections */
    public sections = SectionsBuilder.forSynapse();

}
