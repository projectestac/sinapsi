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

    /** Users storage path */
    private usersPath = '/api/users';

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
        this.manager.navigate(['/editors', 'authors', author.id]);
    }


    /**
     * Disable an existing user.
     */
    public disable(author: Author) {
        const confirm = UserMessages.DisableConfirm(author);
        const success = UserMessages.DisableSuccess(author);

        this.dialog.open(confirm)
            .filter(event => event.confirmed)
            .subscribe(event => {
                const id = author.user_id;
                const disabled_at = (new Date()).toISOString();

                this.store.delete(this.usersPath, id)
                   .subscribe(event => {
                       author.user.disabled_at = disabled_at;
                       this.toaster.success(success);
                   });
            });
    }


    /**
     * Restore a disabled user.
     */
    public restore(author: Author) {
        const id = author.user_id;
        const success = UserMessages.RestoreSuccess(author);

        this.store.restore(this.usersPath, id)
           .subscribe(event => {
               author.user.disabled_at = null;
               this.toaster.success(success);
           });
    }

}
