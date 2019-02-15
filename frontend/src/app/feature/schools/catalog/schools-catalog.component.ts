import { Component, Input, ViewChild } from '@angular/core';
import { RequestManager, StoreQuery } from 'app/core';
import { CatalogComponent } from 'app/core';
import { Author, School } from 'app/models';
import { SchoolMessages } from '../schools.messages';


@Component({
    selector: 'app-schools-catalog',
    templateUrl: 'schools-catalog.component.html',
    styleUrls: [ 'schools-catalog.component.scss' ],
    providers: [ RequestManager ]
})
export class SchoolsCatalogComponent extends CatalogComponent {

    /** This catalog storage path */
    protected path = '/api/authors';

    /** Schools storage path*/
    private schoolsPath = '/api/schools';

    /** Default query values for requests */
    @Input() defaults: StoreQuery = {
        sort: ['name']
    };

    /** Query bindings for requests */
    @Input() bindings: StoreQuery = {
        type: 'schools',
        with: ['category', 'municipality', 'school', 'territory'],
        'min-school_id': 1
    };

    /** Author creator dialog */
    @ViewChild('creator') creator;


    /**
     * Edit an existing school.
     */
    public edit(author: Author) {
        this.manager.navigate(['/editors', 'authors', author.id]);
    }


    /**
     * Create a new school.
     */
    public create() {
        const prompt = SchoolMessages.CreatePrompt();

        this.dialog.open(prompt)
            .filter(event => event.confirmed)
            .filter(event => !!event.value.trim())
            .subscribe(event => {
                const params = { name: event.value };

                this.store.create(this.schoolsPath, params)
                    .subscribe(response => this.edit(<Author> {
                        id: response['author_id']
                    }));
            });
    }


    /**
     * Delete an existing school.
     */
    public remove(author: Author) {
        const confirm = SchoolMessages.RemoveConfirm(author);
        const success = SchoolMessages.RemoveSuccess(author);

        this.dialog.open(confirm)
            .filter(e => e.confirmed)
            .subscribe(() => {
                const id = author.school_id;
                const deleted_at = (new Date()).toISOString();

                this.store.delete(this.schoolsPath, id)
                   .subscribe(() => {
                       author.deleted_at = deleted_at;
                       this.toaster.success(success);
                   });
            });
    }

}
