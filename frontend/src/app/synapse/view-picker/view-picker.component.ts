import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


/** Possible view states */
type SyViewState = 'default' | 'list' | 'gallery';


@Component({
    selector: 'sy-view-picker',
    templateUrl: 'view-picker.component.html',
    styleUrls: [ 'view-picker.component.scss' ]
})
export class SyViewPickerComponent {
    
    /** Initial area state value */
    @Input() value: SyViewState = 'default';
    
    /** Emitted when an area is choosen */
    @Output() valueChange: EventEmitter<SyViewState>;
    
    
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
    pick(value: SyViewState) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(value);
        }
    }
}
