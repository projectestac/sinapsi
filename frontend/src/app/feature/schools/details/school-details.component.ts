import { Component } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';


@Component({
    selector: 'app-school-details',
    templateUrl: 'school-details.component.html',
    styleUrls: [ 'school-details.component.scss' ],
    providers: [ RequestManager ]
})
export class SchoolDetailsComponent extends DetailsComponent {}
