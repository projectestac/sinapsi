import * as moment from 'moment';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter, SimpleChanges } from '@angular/core';
import { ViewChild, forwardRef } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


/** String date pattern */
export const DATE_PATTERN = new RegExp(
    '^[0-9]{4}-[0-9]{2}-[0-9]{2}$');


@Component({
    selector: 'app-datepicker',
    templateUrl: 'datepicker.component.html',
    styleUrls: [ 'datepicker.component.scss' ],
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }]
})
export class DatepickerComponent implements ControlValueAccessor {

    /** Form on change callback */
    private _onChange: any = null;

    /** Form on touched callback */
    private _onTouched: any = null;

    /** Wether the component is disabled */
    private _disabled = false;

    /** Wether the component is focused */
    private _focused = false;

    /** Current value of the control */
    private _value: Date = null;

    /** Old value of the control */
    private _pastValue: Date = null;

    /** Value attribute of the control */
    @Input('value') set setValue(value: any) {
        this.writeValue(value);
    };

    /** Disabled attribute of the control */
    @Input('disabled') set setDisabled(value: string) {
        this.disabled = (value !== null && value !== undefined);
    };

    /** On input event */
    @Output('input') inputEvent = new EventEmitter<Date>();

    /** On change event */
    @Output('change') changeEvent = new EventEmitter<Date>();

    /** On blur event */
    @Output('blur') blurEvent = new EventEmitter<Element>();

    /** On focus event */
    @Output('focus') focusEvent = new EventEmitter<Element>();

    /** Search input box */
    @ViewChild('inputBox') inputBox;


    /**
     * Registers a callback that will be invoked when the choosen
     * value changes.
     *
     * @param fn    Callback function
     */
    registerOnChange(fn: any) {
        this._onChange = fn;
    }


    /**
     * Registers a callback that will be invoked when the component
     * is blured.
     *
     * @param fn    Callback function
     */
    registerOnTouched(fn: any) {
        this._onTouched = fn;
    }


    /**
     * Writes a value from the model into the view.
     *
     * @param value     New value
     */
    writeValue(value: any) {
        this.value = this.toDate(value);
    }


    /**
     * Sets the disabled state of the component.
     */
    setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }


    /**
     * Returns the disabled state of the component.
     *
     * @returns     If the control is disabled
     */
    get disabled(): boolean {
        return this._disabled;
    }


    /**
     * Sets the disabled state of the component.
     */
    set disabled(disabled: boolean) {
        this._disabled = disabled;
        this.inputBox.nativeElement.disabled = disabled;
    }


    /**
     * Returns the value of the component.
     *
     * @returns     Current value
     */
    get value(): Date {
        return this._value || null;
    }


    /**
     * Sets the value of the component.
     */
    set value(value: Date) {
        const date = moment(value).isValid() ? value : null;
        const dateString = date ? this.toString(date) : null;

        this._value = date;
        this._pastValue = date;
        this.inputBox.nativeElement.value = dateString;
    }


    /**
     * Day of the month for the current date.
     *
     * @returns     Day number or zero
     */
    public get day(): number {
        return this._value ? this._value.getDate() : 0;
    }


    /**
     * Month number for the current date.
     *
     * @returns     Month number or zero
     */
    public get month(): number {
        return this._value ? this._value.getMonth() : 0;
    }


    /**
     * Year number for the current date.
     *
     * @returns     Year number or zero
     */
    public get year(): number {
        return this._value ? this._value.getFullYear() : 0;
    }


    /**
     * Selects a new value.
     *
     * This convenience method selects a new value and emits the
     * input event on the control if the value represents a valid date.
     * It does not reset the initial value of the control.
     *
     * @param value     A date string (YYYY-MM-DD)
     */
    public choose(value: string) {
        if (!DATE_PATTERN.test(value)) {
            this.clear();
        } else if (moment(value).isValid()) {
            this._value = this.toDate(value);
            this.emitInputEvent();
        }
    }


    /**
     * Clear the current value.
     */
    public clear() {
        if (this.value !== null) {
            this.value = null;
            this.emitInputEvent();
        }
    }


    /**
     * Focus this component input box.
     */
    public focus() {
        if (this._focused === false) {
            this._focused = true;
            this.inputBox.nativeElement.focus();
            this.focusEvent.emit(this.inputBox);
        }
    }


    /**
     * Remove the focus from this component input box.
     */
    public blur() {
        if (this._focused === true) {
            this._focused = false;
            this.inputBox.nativeElement.blur();

            if (this.hasChanges()) {
                this._pastValue = this._value;
                this.emitChangeEvent();
                this.emitBlurEvent();
            } else {
                this.emitBlurEvent();
            }
        }
    }


    /**
     * Returns if the value has changed.
     *
     * @returns         If there are changes
     */
    public hasChanges(): boolean {
        if (this._pastValue && this._value) {
            const oldTime = this._pastValue.getTime();
            const newTime = this._value.getTime();

            return oldTime !== newTime;
        } else if (!this._pastValue && this._value) {
            return true;
        } else if (!this._value && this._pastValue) {
            return true;
        }

        return false;
    }


    /**
     * Emit a control blur event.
     */
    protected emitBlurEvent() {
        if (typeof this._onTouched === 'function') {
            this._onTouched();
        }

        this.blurEvent.emit(this.inputBox);
    }


    /**
     * Emit a value change event.
     */
    protected emitChangeEvent() {
        const value = this.value || null;

        if (typeof this._onChange === 'function') {
            this._onChange(value);
        }

        this.changeEvent.emit(value);
    }


    /**
     * Emit a control input event.
     */
    protected emitInputEvent() {
        const value = this.value || null;

        if (typeof this._onChange === 'function') {
            this._onChange(value);
        }

        this.inputEvent.emit(value);
    }


    /**
     * Converts a value to a date object.
     *
     * @param value     Value to transform
     * @returns         Date object
     */
    private toDate(value: any): Date {
        return moment(value).startOf('day').toDate();
    }


    /**
     * Converts a a date object to a formated string.
     *
     * @param value     Date object
     * @returns         Formated string
     */
    private toString(value: Date): string {
        return moment(value).format('YYYY-MM-DD');
    }

}
