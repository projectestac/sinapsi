import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CnCollection, CnModel } from "concrete/core";
import { Synapse } from "app/models";


@Component({
    selector: 'tags-table',
    templateUrl: 'tags-table.component.html',
    styleUrls: [ 'tags-table.component.scss' ]
})
export class TagsTableComponent {
    
    /** Synapses collection */
    @Input() tags: CnCollection<Synapse>;
    
    /** Table sorting columns */
    @Input() sort: string[] = [];
    
    /** Table sort event */
    @Output() sortChange = new EventEmitter<Synapse>();
    
    /** Row edition event */
    @Output() editRow = new EventEmitter<Synapse>();
    
    /** Row removal event */
    @Output() deleteRow = new EventEmitter<Synapse>();

}