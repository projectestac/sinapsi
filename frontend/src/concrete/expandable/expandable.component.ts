import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpandTrigger } from './expandable.animations';


/** Expandable states */
export const enum CnExpandState {
    OPEN =      'open',
    CLOSED =    'closed'
};


@Component({
    selector: 'cn-expandable',
    templateUrl: 'expandable.component.html',
    styleUrls: [ 'expandable.component.scss' ],
    animations: [ ExpandTrigger ]
})
export class CnExpandableComponent {

    /** Number of instances of this class */
    private static numInstances = 0;

    /** Whether the component is expanded */
    private isOpen = false;

    /** Unique identifier for this instance */
    public readonly uid: string;

    /** Emitted when the component state changes */
    @Output('toggle') toggleEvent: EventEmitter<boolean>;

    /** Whether the element is expanded */
    @Input('open') set setOpen(state: boolean) {
        this.isOpen = (state !== undefined && state !== false);
    };


    /**
     * Component constructor
     */
    constructor() {
        CnExpandableComponent.numInstances++;
        this.uid = `cn_expandable_${CnExpandableComponent.numInstances}`;
        this.toggleEvent = new EventEmitter();
    }


    /** Component state */
    get state(): CnExpandState {
        return this.isOpen ? CnExpandState.OPEN : CnExpandState.CLOSED;
    }


    /**
     * Open this expandable.
     */
    open() {
        if (this.isOpen === false) {
            this.isOpen = true;
            this.toggleEvent.emit(true);
        }
    }


    /**
     * Close this expandable.
     */
    close() {
        if (this.isOpen === true) {
            this.isOpen = false;
            this.toggleEvent.emit(false);
        }
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
