import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CnCollection, CnModel } from 'concrete/core';
import { Author, School } from 'app/models';


@Component({
    selector: 'schools-table',
    templateUrl: 'schools-table.component.html',
    styleUrls: [ 'schools-table.component.scss' ]
})
export class SchoolsTableComponent {
    
    /** Synapses collection */
    @Input() authors: CnCollection<Author>;
    
    /** Table sorting columns */
    @Input() sort: string[] = [];
    
    /** Table sort event */
    @Output() sortChange = new EventEmitter<Author>();
    
    /** Row edition event */
    @Output() editRow = new EventEmitter<Author>();
    
    /** Row removal event */
    @Output() deleteRow = new EventEmitter<Author>();

}