import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CnCollection, CnModel } from "concrete/core";
import { Synapse } from "app/models";


@Component({
    selector: 'taxonomies-tree',
    templateUrl: 'taxonomies-tree.component.html',
    styleUrls: [ 'taxonomies-tree.component.scss' ]
})
export class TaxonomiesTreeComponent {
    
    /** Synapse tree nodes */
    @Input() nodes: CnCollection<Synapse>;
    
    /** Expand a node event */
    @Output() expand: EventEmitter<Synapse>;
    
    /** Collapse a node event */
    @Output() collapse: EventEmitter<Synapse>;
    
    
    /**
     * Component constructor.
     */
    constructor() {
        this.expand = new EventEmitter();
        this.collapse = new EventEmitter();
    }
    
    /**
     * Toggle a node.
     */
    toggle(node: Synapse, open: boolean) {
        (open === true) ?
            this.expand.emit(node) :
            this.collapse.emit(node);
    }

}