import { Component, Input } from '@angular/core';
import { RequestManager, StoreQuery } from 'app/core';
import { CatalogComponent } from 'app/core';
import { Synapse, Tag } from 'app/models';
import { CatalogMessages } from '../catalogs.messages';


@Component({
    selector: 'app-tags-catalog',
    templateUrl: 'tags-catalog.component.html',
    styleUrls: [ 'tags-catalog.component.scss' ],
    providers: [ RequestManager ]
})
export class TagsCatalogComponent extends CatalogComponent {

    /** This catalog storage path */
    protected path = '/api/tags';

    /** Default query values for requests */
    @Input() defaults: StoreQuery = {
        sort: ['-post_count', 'name']
    };

    /** Query bindings for requests */
    @Input() bindings: StoreQuery = {
        with: ['synapse']
    };


    /**
     * Edit an existing tag.
     */
    public edit(tag: Tag) {
        console.log('Edit Tag');
        this.manager.navigate(['/synapses', 'compose', tag.synapse.id]);
    }


    /**
     * Delete an existing tag.
     */
    public remove(tag: Tag) {
        const confirm = CatalogMessages.RemoveTagConfirm(tag);
        const success = CatalogMessages.RemoveTagSuccess(tag);
        
        this.dialog.open(confirm)
            .subscribe(event => {
                if (event.confirmed) {
                    console.log('Remove Tag');
                    this.toaster.success(success);
                }
            });
    }


    /**
     * Restore a deleted tag.
     */
    public restore(tag: Tag) {
        console.log('Restore Tag');
    }

}
