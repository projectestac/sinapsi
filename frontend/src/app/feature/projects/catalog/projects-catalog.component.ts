import { Component, Input } from '@angular/core';
import { RequestManager, StoreQuery } from 'app/core';
import { CatalogComponent } from 'app/core';
import { Author, Project } from 'app/models';
import { ProjectMessages } from '../projects.messages';


@Component({
    selector: 'app-projects-catalog',
    templateUrl: 'projects-catalog.component.html',
    styleUrls: [ 'projects-catalog.component.scss' ],
    providers: [ RequestManager ]
})
export class ProjectsCatalogComponent extends CatalogComponent {

    /** This catalog storage path */
    protected path = '/api/authors';

    /** Default query values for requests */
    @Input() defaults: StoreQuery = {
        sort: ['name']
    };

    /** Query bindings for requests */
    @Input() bindings: StoreQuery = {
        type: 'projects',
        with: ['project', 'municipality', 'school'],
        'min-project_id': 1
    };


    /**
     * Create a new project.
     */
    public create() {
        console.log('Create Project');
    }


    /**
     * Edit an existing school.
     */
    public edit(author: Author) {
        console.log('Edit Project');
        this.manager.navigate(['/authors', 'compose', author.id]);
    }


    /**
     * Delete an existing school.
     */
    public remove(author: Author) {
        const confirm = ProjectMessages.RemoveConfirm(author);
        const success = ProjectMessages.RemoveSuccess(author);
        
        this.dialog.open(confirm)
            .subscribe(event => {
                if (event.confirmed) {
                    console.log('Remove Project');
                    this.toaster.success(success);
                }
            });
    }

}
