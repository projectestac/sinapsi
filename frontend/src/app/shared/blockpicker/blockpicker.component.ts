import * as moment from 'moment';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


/**
 * 
 */
@Component({
    selector: 'app-blockpicker',
    templateUrl: 'blockpicker.component.html',
    styleUrls: [ 'blockpicker.component.scss' ],
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BlockpickerComponent),
      multi: true
    }]
})
export class BlockpickerComponent implements ControlValueAccessor {

    /** Form on change callback */
    private _onChange: any = null;

    /** Form on touched callback */
    private _onTouched: any = null;

    /** Wether the component is disabled */
    private _disabled = false;

    /** Current value of the control */
    private _value: string = null;

    /** Old value of the control */
    private _pastValue: string = null;

    /** Value attribute of the control */
    @Input('value') set setValue(value: string) {
        this.writeValue(value);
    };

    /** Disabled attribute of the control */
    @Input('disabled') set setDisabled(value: string) {
        this.disabled = (value !== null && value !== undefined);
    };

    /** On change event */
    @Output('change') changeEvent = new EventEmitter<string>();


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
    writeValue(value: string) {
        this.value = value;
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
    }


    /**
     * Returns the value of the component.
     *
     * @returns     Current value
     */
    get value(): string {
        return this._value;
    }


    /**
     * Sets the value of the component.
     */
    set value(value: string) {
        this._value = value;
        this._pastValue = this._value;
    }


    /**
     * Selects a new value.
     *
     * @param value     A subcontrol name
     */
    public choose(value: string) {
        this._value = value;

        if (this.hasChanges()) {
            this._pastValue = this._value;
            this.emitChangeEvent();
        }
    }


    /**
     * Returns if the value has changed.
     *
     * @returns         If there are changes
     */
    public hasChanges(): boolean {
        return this._pastValue !== this._value;
    }


    /**
     * Returns the status of a component subcontrol.
     *
     * @param value     Subcontrol name
     * @returns         New state object
     */
    public state(value: string): any {
        return {
            active: this.value === value,
            disabled: this._disabled,
        };
    }


    /**
     * Emit a value change event.
     */
    protected emitChangeEvent() {
        if (typeof this._onTouched === 'function') {
            this._onTouched();
        }

        if (typeof this._onChange === 'function') {
            this._onChange(this.value);
        }

        this.changeEvent.emit(this.value);
    }

}
