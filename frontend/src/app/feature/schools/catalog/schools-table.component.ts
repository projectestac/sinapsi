import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection, Model } from 'app/core';
import { Author, School } from 'app/models';


@Component({
    selector: 'app-schools-table',
    templateUrl: 'schools-table.component.html',
    styleUrls: [ 'schools-table.component.scss' ]
})
export class SchoolsTableComponent {

    /** Synapses collection */
    @Input() authors: Collection<Author>;

    /** Table sorting columns */
    @Input() sort: string[] = [];

    /** Table sort event */
    @Output() sortChange = new EventEmitter<Author>();

    /** Row edition event */
    @Output() editRow = new EventEmitter<Author>();

    /** Row removal event */
    @Output() deleteRow = new EventEmitter<Author>();

}
