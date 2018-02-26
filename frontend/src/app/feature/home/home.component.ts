import { Component } from '@angular/core';
import { Collection } from 'app/core';
import { Block, Synapse } from 'app/models';
import { SynapseDetailsComponent } from 'app/feature/synapses/details';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss' ]
})
export class HomeComponent extends SynapseDetailsComponent {

    /** Model for this synapse */
    public synapse: Synapse = null;

    /** Sidebar blocks for this synapse */
    public blocks: Collection<Block> = null;


    /**
     * Fetch the home synapse and its blocks.
     */
    protected fetchSynapse(slug: string) {
        super.fetchSynapse('general');
    }

}
