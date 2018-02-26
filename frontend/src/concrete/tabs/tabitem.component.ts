import { Component, Input, ViewChild } from '@angular/core';
import { CnTabsComponent } from './tabs.component';


@Component({
    selector: 'cn-tabitem',
    templateUrl: 'tabitem.component.html'
})
export class CnTabItemComponent {

    /** This tab value */
    @Input() value: string = null;


    /**
     * Component constructor
     */
    constructor(
        private tabs: CnTabsComponent
    ) {}


    /**
     * Whether this tab is selected.
     */
    get selected(): boolean {
        return this.value === this.tabs.value;
    }


    /**
     * Pick this tab value.
     */
    pick() {
        this.tabs.pick(this.value);
    }
}
