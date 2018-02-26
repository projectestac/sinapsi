import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
    selector: 'cn-picker',
    templateUrl: 'picker.component.html',
    styleUrls: [ 'picker.component.scss' ]
})
export class CnPickerComponent {

    /** Initial value */
    @Input() value: string = null;

    /** Emitted when a value is choosen */
    @Output('change') changeEvent: EventEmitter<string>;


    /**
     * Component constructor
     */
    constructor() {
        this.changeEvent = new EventEmitter();
    }


    /**
     * Pick a new value.
     *
     * @param value     New value
     */
    pick(value: string) {
        if (this.value !== value) {
            this.value = value;
            this.changeEvent.emit(value);
        }
    }
}
