import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection, Model } from 'app/core';
import { PoliciesService } from 'app/core';
import { Synapse } from 'app/models';


@Component({
    selector: 'app-synapses-table',
    templateUrl: 'synapses-table.component.html',
    styleUrls: [ 'synapses-table.component.scss' ]
})
export class SynapsesTableComponent {

    /** Synapses collection */
    @Input() synapses: Collection<Synapse>;

    /** Table sorting columns */
    @Input() sort: string[] = [];

    /** Table sort event */
    @Output() sortChange = new EventEmitter<Synapse>();

    /** Row edition event */
    @Output() editRow = new EventEmitter<Synapse>();

    /** Row removal event */
    @Output() deleteRow = new EventEmitter<Synapse>();


    /**
     * Component constructor.
     */
    constructor(public policies: PoliciesService) {}

}
