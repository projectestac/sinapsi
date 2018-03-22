import { Component, OnInit } from '@angular/core';
import { DetailsComponent, RequestManager } from 'app/core';
import { FetchState } from 'app/core/components';
import { SectionConfig, SectionsBuilder } from 'app/feature/posts';


@Component({
    selector: 'app-user-details',
    templateUrl: 'user-details.component.html',
    styleUrls: [ 'user-details.component.scss' ],
    providers: [ RequestManager ]
})
export class UserDetailsComponent extends DetailsComponent implements OnInit {

    /** Post browser sections */
    public sections: SectionConfig[];


    /**
     * Component initialization.
     */
    ngOnInit() {
        super.ngOnInit();

        // Update the browser sections when the user changes

        this.states.subscribe(state => {
            if (state === FetchState.READY) {
                const id = this.synapse.filters['author_id'];
                this.sections = SectionsBuilder.forAuthor(id);
            }
        });
    }

}
