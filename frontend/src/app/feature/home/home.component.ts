import { Component, OnInit } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';
import { SectionsBuilder } from 'app/feature/posts';
import { GENERAL_SLUG } from 'app/models';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss' ],
    providers: [ RequestManager ]
})
export class HomeComponent extends DetailsComponent {

    /** Post browser sections */
    public sections = SectionsBuilder.forSynapse();


    /**
     * Fetch the home synapse and its side blocks.
     */
    protected fetchSynapse(slug: string) {
        super.fetchSynapse(GENERAL_SLUG);
    }

}
