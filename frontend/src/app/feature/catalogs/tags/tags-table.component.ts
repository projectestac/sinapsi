import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection, Model } from 'app/core';
import { Tag } from 'app/models';


@Component({
    selector: 'app-tags-table',
    templateUrl: 'tags-table.component.html',
    styleUrls: [ 'tags-table.component.scss' ]
})
export class TagsTableComponent {

    /** Synapses collection */
    @Input() tags: Collection<Tag>;

    /** Table sorting columns */
    @Input() sort: string[] = [];

    /** Table sort event */
    @Output() sortChange = new EventEmitter<Tag>();

    /** Row edition event */
    @Output() editRow = new EventEmitter<Tag>();

    /** Row removal event */
    @Output() deleteRow = new EventEmitter<Tag>();

    /** Row restore event */
    @Output() restoreRow = new EventEmitter<Tag>();

}
