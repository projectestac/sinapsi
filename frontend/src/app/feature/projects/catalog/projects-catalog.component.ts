import { Component, Input } from '@angular/core';
import { RequestManager, StoreQuery } from 'app/core';
import { CatalogComponent } from 'app/core';
import { Author, Project } from 'app/models';
import { filter } from 'rxjs/operators';
import { ProjectMessages } from '../projects.messages';


@Component({
    selector: 'app-projects-catalog',
    templateUrl: 'projects-catalog.component.html',
    styleUrls: ['projects-catalog.component.scss'],
    providers: [RequestManager]
})
export class ProjectsCatalogComponent extends CatalogComponent {

    /** This catalog storage path */
    protected path = '/api/authors';

    /** Projects storage path*/
    private projectsPath = '/api/projects';

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
     * Edit an existing school.
     */
    public edit(author: Author) {
        this.manager.navigate(['/editors', 'authors', author.id]);
    }


    /**
     * Create a new project.
     */
    public create() {
        const prompt = ProjectMessages.CreatePrompt();

        this.dialog.open(prompt)
            .pipe(
                filter(event => event.confirmed),
                filter(event => !!event.value.trim())
            )
            .subscribe(event => {
                const params = { name: event.value };

                this.store.create(this.projectsPath, params)
                    .subscribe(response => this.edit(<Author>{
                        id: response['author_id']
                    }));
            });
    }


    /**
     * Delete an existing school.
     */
    public remove(author: Author) {
        const confirm = ProjectMessages.RemoveConfirm(author);
        const success = ProjectMessages.RemoveSuccess(author);

        this.dialog.open(confirm)
            .pipe(filter(e => e.confirmed))
            .subscribe(() => {
                const id = author.project_id;
                const deleted_at = (new Date()).toISOString();

                this.store.delete(this.projectsPath, id)
                    .subscribe(() => {
                        author.deleted_at = deleted_at;
                        this.toaster.success(success);
                    });
            });
    }

}
