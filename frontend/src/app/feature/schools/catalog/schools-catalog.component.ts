import { Component, Input } from '@angular/core';
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

    /** Default query values for requests */
    @Input() defaults: StoreQuery = {
        sort: ['name']
    };

    /** Query bindings for requests */
    @Input() bindings: StoreQuery = {
        type: 'schools',
        with: ['municipality', 'school', 'territory'],
        'min-school_id': 1
    };


    /**
     * Create a new school.
     */
    public create() {
        console.log('Create School');
    }


    /**
     * Edit an existing school.
     */
    public edit(author: Author) {
        console.log('Edit School');
        this.manager.navigate(['/authors', 'compose', author.id]);
    }


    /**
     * Delete an existing school.
     */
    public remove(author: Author) {
        const confirm = SchoolMessages.RemoveConfirm(author);
        const success = SchoolMessages.RemoveSuccess(author);
        
        this.dialog.open(confirm)
            .subscribe(event => {
                if (event.confirmed) {
                    console.log('Remove School');
                    this.toaster.success(success);
                }
            });
    }

}
