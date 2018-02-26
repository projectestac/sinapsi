import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
    selector: 'app-search',
    templateUrl: 'search.component.html',
    styleUrls: [ 'search.component.scss' ]
})
export class SearchComponent {

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
