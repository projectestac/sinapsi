import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection, StoreService } from 'app/core';
import { Block, Synapse } from 'app/models';


@Component({
    selector: 'app-synapse-editor',
    templateUrl: 'synapse-editor.component.html',
    styleUrls: [ 'synapse-editor.component.scss' ]
})
export class SynapseEditorComponent {

    /** Synapse for this project */
    public synapse: Synapse = null;

    /** Sidebar blocks for this project */
    public blocks: Collection<Block> = null;


    /**
     * Component constructor.
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: StoreService
    ) {}


    /**
     * Save the current project.
     */
    public save() {
        console.log('Save Synapse');
    }

}
