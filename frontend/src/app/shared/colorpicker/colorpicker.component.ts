import * as moment from 'moment';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Color, COLORS } from './colorpicker.types';


/** Component intances */
let uid = 0;


/**
 * Color picker select box. Provides a color picker from a
 * predefined set of colors.
 */
@Component({
    selector: 'app-colorpicker',
    templateUrl: 'colorpicker.component.html',
    styleUrls: [ 'colorpicker.component.scss' ],
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorpickerComponent),
      multi: true
    }]
})
export class ColorpickerComponent implements ControlValueAccessor {

    /** Form on change callback */
    private _onChange: any = null;

    /** Form on touched callback */
    private _onTouched: any = null;

    /** Wether the component is disabled */
    private _disabled = false;

    /** Wether the component is focused */
    private _focused = false;

    /** Value that has the focus */
    public _active: Color = COLORS[0];

    /** Current value of the control */
    private _value: Color = null;

    /** Old value of the control */
    private _pastValue: Color = null;

    /** Available colors */
    public readonly colors = COLORS;

    /** Value attribute of the control */
    @Input('value') set setValue(value: any) {
        this.writeValue(value);
    };

    /** Disabled attribute of the control */
    @Input('disabled') set setDisabled(value: string) {
        this.disabled = (value !== null && value !== undefined);
    };

    /** Unique identifier of the component */
    @Input() id = `app-colorpicker-${uid++}`;

    /** Placeholder text */
    @Input() placeholder = null;

    /** On input event */
    @Output('input') inputEvent = new EventEmitter<string>();

    /** On change event */
    @Output('change') changeEvent = new EventEmitter<string>();

    /** On blur event */
    @Output('blur') blurEvent = new EventEmitter<Element>();

    /** On focus event */
    @Output('focus') focusEvent = new EventEmitter<Element>();

    /** Search input box */
    @ViewChild('inputBox') inputBox;

    /** Dropdown list */
    @ViewChild('listBox') listBox;


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
        this.value = this.toColor(value);
    }


    /**
     * Sets the disabled state of the component.
     */
    setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }


    /**
     * Returns the active value of the component.
     *
     * @returns     Current value
     */
    get active(): Color {
        return this._active || null;
    }


    /**
     * Sets the active value of the component.
     */
    set active(value: Color) {
        this.activate(value);
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
     * Returns the component has the focus.
     *
     * @returns     If the control is focused
     */
    get focused(): boolean {
        return this._focused && !this._disabled;
    }


    /**
     * Sets the component focus value.
     *
     * @param value If the control has the focus
     */
    set focused(value: boolean) {
        this._focused = value;
    }


    /**
     * Returns the value of the component.
     *
     * @returns     Current value
     */
    get value(): Color {
        return this._value || null;
    }


    /**
     * Sets the value of the component.
     */
    set value(value: Color) {
        this._value = value;
        this._pastValue = value;
    }


    /**
     * Activates the given value.
     */
    public activate(value: Color) {
        this._active = value ? value : null;
        this.scrollToColor(this._active);
    }


    /**
     * Activates the next value.
     */
    public activateNext() {
        const c = this.colors;
        const i = c.findIndex(v => v.id === this.active.id);
        this.activate(c[1 + i] || c[0]);
    }


    /**
     * Activates the previous value.
     */
    public activatePrevious() {
        const c = this.colors;
        const i = c.findIndex(v => v.id === this.active.id);
        this.activate(c[i - 1] || c[c.length - 1]);
    }


    /**
     * Selects a new value.
     *
     * @param value     A color object
     */
    public choose(value: Color) {
        if (!value) {
            this.clear();
        } else if (!this.equals(value, this._value)) {
            this._value = {...value};
            this._active = this._value;
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
            setTimeout(() => this.scrollToColor(this._active));
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
        return this.equals(this._pastValue, this._value);
    }


    /**
     * Returns an unique identifier for the given color.
     *
     * @param color     Color object
     * @returns         Unique ID or null
     */
    public optionUID(color: Color): string {
        return color ? `${this.id}-o-${color.id}` : null;
    }


    /**
     * Compares to objects for equality.
     */
    protected equals(a: Color, b: Color): boolean {
        return a && b ? a.id === b.id : a === b;
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
        const id = (this.value && this.value['id']) || null;

        if (typeof this._onChange === 'function') {
            this._onChange(id);
        }

        this.changeEvent.emit(id);
    }


    /**
     * Emit a control input event.
     */
    protected emitInputEvent() {
        const id = (this.value && this.value['id']) || null;

        if (typeof this._onChange === 'function') {
            this._onChange(id);
        }

        this.inputEvent.emit(id);
    }


    /**
     * Converts a value to a color object.
     *
     * @param value     Value to transform
     * @returns         Color object or null
     */
    protected toColor(value: any): Color {
        if (value === null || value === undefined) {
            return null;
        }

        const id = (typeof value === 'object') ? value['id'] : value;
        const color = this.colors.find(c => id === c.id);

        return color ? {...color} : null;
    }


    /**
     * Scroll the dropdown to the given color.
     *
     * @param value     Color object
     */
    protected scrollToColor(value: Color) {
        try {
            const uid = this.optionUID(value);
            const box = this.listBox.nativeElement;
            const element = box.querySelector(`#${uid}`);

            box.scrollTop = element.offsetTop;
        } catch (e) {
            // pass
        }
    }

}
