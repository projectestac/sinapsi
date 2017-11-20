import { Component, Input } from '@angular/core';
import { CnQuery, CnQuerier } from "concrete/core";
import { CatalogComponent } from 'app/shared';
import { Synapse } from 'app/models';


@Component({
    selector: 'taxonomies-catalog',
    templateUrl: 'taxonomies-catalog.component.html',
    styleUrls: [ 'taxonomies-catalog.component.scss' ],
    providers: [ CnQuerier ]
})
export class TaxonomiesCatalogComponent extends CatalogComponent {
    
    /** Catalog REST API path */
    @Input() requestPath: string = 'api/synapses/nodes';
    
    /** Request query mandatory values */
    @Input() requestBindings: CnQuery = {
        type: 'synapses',
        sort: ['name'],
        with: ['childs']
    };
    
    
    /**
     * Expand a synapse node with its children.
     *
     * @param node      Synapse model
     */
    expand(node: Synapse) {
        if (node.child_count < 1 || node.childs)
            return;
        
        this.store.query(`${this.requestPath}/${node.id}`, {
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