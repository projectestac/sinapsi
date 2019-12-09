import { Component, Input, Output } from '@angular/core';
import { EventEmitter, ViewChild } from '@angular/core';


@Component({
    selector: 'cn-details',
    templateUrl: 'details.component.html',
    styleUrls: ['details.component.scss']
})
export class CnDetailsComponent {

    /** Whether the component is expanded */
    private isOpen = false;

    /** Whether it should expanded initally */
    @Input('open') set setOpen(state: boolean) {
        this.isOpen = (state !== undefined && state !== false);
        this.isOpen ? this.expandable.open() : this.expandable.close();
    };

    /** Emitted when the component state changes */
    @Output('toggle') toggleEvent: EventEmitter<boolean>;

    /** Expandable container */
    @ViewChild('expandable', { static: undefined }) expandable;


    /**
     * Component constructor
     */
    constructor() {
        this.toggleEvent = new EventEmitter();
    }


    /**
     * Whether the component is open.
     */
    get open(): boolean {
        return this.isOpen;
    }


    /**
     * Component state
     */
    get state(): string {
        return this.expandable.state;
    }


    /**
     * Toggle this expandable.
     *
     * @returns     If the expandable is open
     */
    toggle(): boolean {
        this.isOpen = !this.isOpen
        this.toggleEvent.emit(this.isOpen);

        return this.isOpen;
    }
}
