import { Component } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss' ],
    providers: [ RequestManager ]
})
export class HomeComponent extends DetailsComponent {

    /**
     * Fetch the home synapse and its side blocks.
     */
    protected fetchSynapse(slug: string) {
        super.fetchSynapse('general');
    }

}
