import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection, Model } from 'app/core';
import { Author, Project } from 'app/models';


@Component({
    selector: 'app-projects-table',
    templateUrl: 'projects-table.component.html',
    styleUrls: [ 'projects-table.component.scss' ]
})
export class ProjectsTableComponent {

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
