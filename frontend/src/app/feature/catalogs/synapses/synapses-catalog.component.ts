import { Component, Input } from '@angular/core';
import { RequestManager, StoreQuery } from 'app/core';
import { CatalogComponent } from 'app/core';
import { Synapse, Tag } from 'app/models';
import { CatalogMessages } from '../catalogs.messages';


@Component({
    selector: 'app-synapses-catalog',
    templateUrl: 'synapses-catalog.component.html',
    styleUrls: [ 'synapses-catalog.component.scss' ],
    providers: [ RequestManager ]
})
export class SynapsesCatalogComponent extends CatalogComponent {

    /** This catalog storage path */
    protected path = '/api/synapses';

    /** Default query values for requests */
    @Input() defaults: StoreQuery = {
        sort: ['name']
    };

    /** Query bindings for requests */
    @Input() bindings: StoreQuery = {
        type: ['synapses', 'tags']
    };


    /**
     * Edit an existing synapse.
     */
    public edit(synapse: Synapse) {
        this.manager.navigate(['/editors', 'synapses', synapse.id]);
    }


    /**
     * Delete an existing synapse.
     */
    public remove(synapse: Synapse) {
        const confirm = CatalogMessages.RemoveSynapseConfirm(synapse);
        const success = CatalogMessages.RemoveSynapseSuccess(synapse);

        this.dialog.open(confirm)
            .filter(e => e.confirmed)
            .subscribe(() => {
                this.store.delete(this.path, synapse.id)
                   .subscribe(() => {
                       synapse.deleted_at = (new Date()).toISOString();
                       this.toaster.success(success);
                   });
            });
    }

}
