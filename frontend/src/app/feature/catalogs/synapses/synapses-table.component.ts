import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CnCollection, CnModel } from "concrete/core";
import { Synapse } from "app/models";


@Component({
    selector: 'synapses-table',
    templateUrl: 'synapses-table.component.html',
    styleUrls: [ 'synapses-table.component.scss' ]
})
export class SynapsesTableComponent {
    
    /** Synapses collection */
    @Input() synapses: CnCollection<Synapse>;
    
    /** Table sorting columns */
    @Input() sort: string[] = [];
    
    /** Table sort event */
    @Output() sortChange = new EventEmitter<Synapse>();
    
    /** Row edition event */
    @Output() editRow = new EventEmitter<Synapse>();
    
    /** Row removal event */
    @Output() deleteRow = new EventEmitter<Synapse>();

}