import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection, StoreService } from 'app/core';
import { Author, Block, Synapse } from 'app/models';


@Component({
    selector: 'app-author-editor',
    templateUrl: 'author-editor.component.html',
    styleUrls: [ 'author-editor.component.scss' ]
})
export class AuthorEditorComponent {

    /** Author for this project */
    public author: Author = null;

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
        console.log('Save Author');
    }

}
