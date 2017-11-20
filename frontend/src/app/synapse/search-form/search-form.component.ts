import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
    selector: 'sy-search-form',
    templateUrl: 'search-form.component.html',
    styleUrls: [ 'search-form.component.scss' ]
})
export class SySearchFormComponent {
    
    /** Initial search value */
    @Input('value') value: string;
    
    /** Emitted on search */
    @Output('search') searchEvent: EventEmitter<string>;
    
    
    /**
     * Component constructor.
     */
    constructor() {
        this.searchEvent = new EventEmitter();
    }
    
    
    /**
     * Submit the form.
     *
     * @param value     Search value
     */
    submit(value: string) {
        this.searchEvent.emit(value);
    }
}
