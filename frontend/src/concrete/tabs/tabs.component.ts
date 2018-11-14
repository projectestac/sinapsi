import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
    selector: 'cn-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: [ 'tabs.component.scss' ]
})
export class CnTabsComponent {

    /** Initial tab value */
    @Input() value: string = null;

    /** Emitted when a tab is choosen */
    @Output() valueChange: EventEmitter<string>;


    /**
     * Component constructor
     */
    constructor() {
        this.valueChange = new EventEmitter();
    }


    /**
     * Pick a new tab value.
     *
     * @param value     New tab value
     */
    pick(value: string) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(value);
        }
    }
}
