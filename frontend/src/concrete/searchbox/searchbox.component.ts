

import { Component, Input, Output } from '@angular/core';
import { OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';



/**
 * Represents a search event.
 */
export interface CnSearchEvent {
    query: string;
    value: string;
}


@Component({
    selector: 'cn-searchbox',
    templateUrl: 'searchbox.component.html'
})
export class CnSearchboxComponent implements OnInit, OnChanges, OnDestroy {

    /** Keystroke debounce milliseconds */
    static readonly DEBOUNCE_DELAY = 800;

    /** Search keyword */
    @Input('key') searchKey = 'search';

    /** Search value */
    @Input('value') searchValue: string = null;

    /** Input placeholder */
    @Input() placeholder: string = null;

    /** Search box icon */
    @Input() icon: string = null;

    /** Emitted on search value change */
    @Output('search') searchEvent: EventEmitter<CnSearchEvent>;

    /** Input keyup event subject */
    public keyUp = new ReplaySubject<string>(1);

    /** Search value shown on the input */
    public viewValue: string = null;

    /** Last emitted event */
    private emittedEvent: CnSearchEvent = null;

    /** If the user is typing on the input box */
    private userIsTyping = false;



    /**
     * Component constructor.
     *
     * @param settings      Settings service
     */
    constructor() {
        this.searchEvent = new EventEmitter<CnSearchEvent>();
    }


    /**
     * Component initialization.
     */
    ngOnInit() {
        const delay = CnSearchboxComponent.DEBOUNCE_DELAY;

        this.keyUp
            .pipe(debounceTime(delay))
            .subscribe(value => this.emitValue(value));
    }


    /**
     * Component destructor.
     */
    ngOnDestroy() {
        this.keyUp.unsubscribe();
        this.searchEvent.complete();
    }


    /**
     * Called when the component property values change.
     *
     * @param changes       Component changes
     */
    ngOnChanges(changes: SimpleChanges) {
        if (!this.userIsTyping && 'searchValue' in changes) {
            this.viewValue = (changes['searchValue'] !== undefined) ?
                changes['searchValue'].currentValue : null;
        }
    }


    /**
     * Fired when the user presses a key on the input.
     */
    onKeyDown() {
        this.userIsTyping = true;
    }


    /**
     * Fired when the user releases a key on the input.
     */
    onKeyUp(value: string) {
        this.keyUp.next(value);
        this.userIsTyping = false;
    }


    /**
     * Clear the search box.
     */
    public clear() {
        this.viewValue = null;
    }


    /**
     * Emit the given value.
     *
     * @param value         Search value
     */
    private emitValue(value: string) {
        const event = {
            query: this.searchKey,
            value: value
        };

        if (this.mustEmit(event)) {
            this.emittedEvent = event;
            this.searchEvent.emit(event);
        }
    }


    /**
     * Returns if an event must be emitted.
     *
     * An event must be emitted if it's key or value have changed
     * from the previously emitted event.
     *
     * @param event         An event object
     * @returns             Must be emitted value
     */
    private mustEmit(event: CnSearchEvent) {
        const emitted = this.emittedEvent;

        if (emitted === null) {
            return event.value.trim() !== this.searchValue;
        }

        return (
            emitted.value.trim() !== event.value.trim() ||
            emitted.query.trim() !== event.query.trim()
        );
    }
}
