import { Component, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
import { RequestManager, StoreQuery } from 'app/core';
import { CatalogComponent } from 'app/core';
import { Synapse, Tag } from 'app/models';
import { CatalogMessages } from '../catalogs.messages';


@Component({
    selector: 'app-tags-catalog',
    templateUrl: 'tags-catalog.component.html',
    styleUrls: ['tags-catalog.component.scss'],
    providers: [RequestManager]
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
        'min-post_count': 2,
        'with': ['synapse']
    };


    /**
     * Edit an existing tag synapse or create a new synapse
     * if a synapse for the tag does not exist.
     *
     * @param tag   Tag object
     */
    public editOrCreate(tag: Tag) {
        if (tag.synapse !== null) {
            this.edit(tag);
        } else {
            this.create(tag);
        }
    }


    /**
     * Edit an existing tag synapse.
     *
     * @param tag   Tag object
     */
    public edit(tag: Tag) {
        this.manager.navigate(['/editors', 'synapses', tag.synapse_id]);
    }


    /**
     * Create a new synapse for the tag.
     *
     * @param tag   Tag object
     */
    public create(tag: Tag) {
        const prompt = CatalogMessages.CreateTagPrompt(tag);

        this.dialog.open(prompt)
            .pipe(
                filter(event => event.confirmed),
                filter(event => !!event.value.trim())
            )
            .subscribe(event => {
                const params = { name: event.value };
                const createPath = `/api/synapses/tags/${tag.id}`;

                this.store.create(createPath, params)
                    .subscribe(response => {
                        tag.synapse_id = response['id'];
                        this.edit(tag);
                    });
            });
    }


    /**
     * Delete an existing tag.
     *
     * @param tag   Tag object
     */
    public remove(tag: Tag) {
        const confirm = CatalogMessages.RemoveTagConfirm(tag);
        const success = CatalogMessages.RemoveTagSuccess(tag);

        this.dialog.open(confirm)
            .pipe(filter(e => e.confirmed))
            .subscribe(() => {
                const deleted_at = (new Date()).toISOString();

                this.store.delete(this.path, tag.id)
                    .subscribe(() => {
                        tag.deleted_at = deleted_at;
                        this.toaster.success(success);
                    });
            });
    }


    /**
     * Restore a deleted tag.
     */
    public restore(tag: Tag) {
        const success = CatalogMessages.RestoreTagSuccess(tag);

        this.store.restore(this.path, tag.id)
            .subscribe(event => {
                tag.deleted_at = null;
                this.toaster.success(success);
            });
    }

}
