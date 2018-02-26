import { Component, Input } from '@angular/core';
import { RequestManager, StoreQuery } from 'app/core';
import { CatalogComponent } from 'app/core';
import { Synapse } from 'app/models';


@Component({
    selector: 'app-taxonomies-catalog',
    templateUrl: 'taxonomies-catalog.component.html',
    styleUrls: [ 'taxonomies-catalog.component.scss' ],
    providers: [ RequestManager ]
})
export class TaxonomiesCatalogComponent extends CatalogComponent {

    /** This catalog storage path */
    protected path = '/api/synapses/nodes';

    /** Query bindings for requests */
    @Input() bindings: StoreQuery = {
        type: ['synapses', 'tags'],
        sort: ['name'],
        with: ['childs']
    };


    /**
     * Expand a synapse node with its children.
     *
     * @param node      Synapse model
     */
    public expand(node: Synapse) {
        if (node.child_count < 1 || node.childs) {
            return;
        }

        this.store.query(`${this.path}/${node.id}`, {
            type: 'synapses', sort: ['name']
        }).subscribe((nodes) => {
            setTimeout(() => {
                node.childs = [];
                nodes.forEach(child => {
                    node.childs.push(<Synapse> child);
                });
            }, 200);
        });
    }

}
