import { AfterViewInit, Component, Input, Output } from '@angular/core';
import { EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import { ShowTrigger } from './menu.animations';

import { CnMenuItemComponent } from './menuitem.component';


@Component({
    selector: 'cn-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss'],
    animations: [ShowTrigger]
})
export class CnMenuComponent implements AfterViewInit {

    /** Whether the menu is open */
    public isOpen = false;

    /** Whether the menu is open */
    @Input('open') set setOpen(value: boolean) {
        this.isOpen = (value !== undefined && value !== false);
    }

    /** Emitted on menu dismission */
    @Output('dismiss') dismissEvent: EventEmitter<boolean>;

    /** Menu wrapper */
    @ViewChild('wrapper', { static: false }) wrapper;

    /** Registered child menu items */
    private items: Array<CnMenuItemComponent> = [];


    /** String representation of the menu state */
    get state() {
        return this.isOpen ? 'open' : 'close';
    }


    /**
     * Component constructor.
     */
    constructor() {
        this.dismissEvent = new EventEmitter<boolean>();
    }


    /**
     * Component initialization.
     */
    ngAfterViewInit() {
        this.initTabIndices();
    }


    /**
     * Open this menu.
     */
    open() {
        this.isOpen = true;
    }


    /**
     * Dismiss this menu.
     */
    dismiss() {
        this.isOpen = false;
        this.dismissEvent.emit(true);
    }


    /**
     * Register a menu item to this menu.
     */
    register(item: CnMenuItemComponent) {
        this.items.push(item);
    }


    /**
     * Sets the tabindex attribute for the child elements.
     */
    private initTabIndices() {
        for (let i = 0; i < this.items.length; i++) {
            const button = this.items[i].button;
            const buttonElement = button.nativeElement;
            buttonElement.tabIndex = (1 + i);
        }
    }
}
