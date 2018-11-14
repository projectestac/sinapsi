import { Component, Input } from '@angular/core';
import { CnPickerComponent } from './picker.component';


@Component({
    selector: 'cn-pickeritem',
    templateUrl: 'pickeritem.component.html'
})
export class CnPickerItemComponent {

    /** This option value */
    @Input() value: string = null;


    /**
     * Component constructor
     */
    constructor(
        private picker: CnPickerComponent
    ) {}


    /**
     * Wether this option is selected.
     */
    get selected(): boolean {
        return this.value === this.picker.value;
    }


    /**
     * Pick this option value.
     */
    pick() {
        this.picker.pick(this.value);
    }
}
