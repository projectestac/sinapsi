import { Component, Input } from '@angular/core';
import { RequestManager, StoreQuery } from 'app/core';
import { CatalogComponent } from 'app/core';
import { Author, User } from 'app/models';
import { UserMessages } from '../users.messages';


@Component({
    selector: 'app-users-catalog',
    templateUrl: 'users-catalog.component.html',
    styleUrls: [ 'users-catalog.component.scss' ],
    providers: [ RequestManager ]
})
export class UsersCatalogComponent extends CatalogComponent {

    /** This catalog storage path */
    protected path = '/api/authors';

    /** Default query values for requests */
    @Input() defaults: StoreQuery = {
        sort: ['name']
    };

    /** Query bindings for requests */
    @Input() bindings: StoreQuery = {
        type: 'users',
        with: ['municipality', 'school', 'user'],
        'min-user_id': 1
    };


    /**
     * Edit an existing user.
     */
    public edit(author: Author) {
        console.log('Edit User');
        this.manager.navigate(['/authors', 'compose', author.id]);
    }


    /**
     * Disable an existing user.
     */
    public disable(author: Author) {
        const confirm = UserMessages.DisableConfirm(author);
        const success = UserMessages.DisableSuccess(author);
        
        this.dialog.open(confirm)
            .subscribe(event => {
                if (event.confirmed) {
                    console.log('Disable User');
                    this.toaster.success(success);
                }
            });
    }


    /**
     * Restore a disabled user.
     */
    public restore(author: Author) {
        console.log('Restore User');
    }

}
