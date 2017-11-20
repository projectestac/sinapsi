import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


/** Possible view states */
type SyAreaState = (
    'default' |
    'featured' |
    'commented' |
    'voted'
);


@Component({
    selector: 'sy-area-select',
    templateUrl: 'area-select.component.html',
    styleUrls: [ 'area-select.component.scss' ]
})
export class SyAreaSelectComponent {
    
    /** Initial area state value */
    @Input() value: SyAreaState = 'default';
    
    /** Emitted when an area is choosen */
    @Output() valueChange: EventEmitter<SyAreaState>;
    
    
    /**
     * Component constructor
     */
    constructor() {
        this.valueChange = new EventEmitter();
    }
    
    
    /**
     * Pick a new area value.
     *
     * @param value     New area value
     */
    pick(value: SyAreaState) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(value);
        }
    }
}
