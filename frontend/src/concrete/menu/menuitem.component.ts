import { Component, Input, ViewChild } from '@angular/core';
import { CnMenuComponent } from './menu.component';


@Component({
    selector: 'cn-menuitem',
    templateUrl: 'menuitem.component.html'
})
export class CnMenuItemComponent {

    /** This menuitem icon value */
    @Input() icon: string = null;

    /** This menuitem button */
    @ViewChild('button', { static: false }) button;


    /**
     * Component constructor
     */
    constructor(private menu: CnMenuComponent) {
        menu.register(this);
    }


    /**
     * Dismiss the parent menu for this item.
     */
    dismissMenu() {
        this.menu.dismiss();
    }
}
