import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CnCollection, CnModel } from 'concrete/core';
import { Author, Project } from 'app/models';


@Component({
    selector: 'projects-table',
    templateUrl: 'projects-table.component.html',
    styleUrls: [ 'projects-table.component.scss' ]
})
export class ProjectsTableComponent {
    
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