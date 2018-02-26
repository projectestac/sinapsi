import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection, Model } from 'app/core';
import { Author, User } from 'app/models';


@Component({
    selector: 'app-users-table',
    templateUrl: 'users-table.component.html',
    styleUrls: [ 'users-table.component.scss' ]
})
export class UsersTableComponent {

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

    /** Row restore event */
    @Output() restoreRow = new EventEmitter<Author>();

}
