import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CnCollection, CnModel } from 'concrete/core';
import { Author, User } from 'app/models';


@Component({
    selector: 'users-table',
    templateUrl: 'users-table.component.html',
    styleUrls: [ 'users-table.component.scss' ]
})
export class UsersTableComponent {
    
    /** Synapses collection */
    @Input() authors: CnCollection<Author>;
    
    /** Table sorting columns */
    @Input() sort: string[] = [];
    
    /** Table sort event */
    @Output() sortChange = new EventEmitter<Author>();
    
    /** Row removal event */
    @Output() deleteRow = new EventEmitter<Author>();

}