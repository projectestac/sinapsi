import { Component } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';


@Component({
    selector: 'app-user-details',
    templateUrl: 'user-details.component.html',
    styleUrls: [ 'user-details.component.scss' ],
    providers: [ RequestManager ]
})
export class UserDetailsComponent extends DetailsComponent {}
