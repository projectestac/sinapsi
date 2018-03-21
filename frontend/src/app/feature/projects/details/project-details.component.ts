import { Component } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';


@Component({
    selector: 'app-project-details',
    templateUrl: 'project-details.component.html',
    styleUrls: [ 'project-details.component.scss' ],
    providers: [ RequestManager ]
})
export class ProjectDetailsComponent extends DetailsComponent {}
