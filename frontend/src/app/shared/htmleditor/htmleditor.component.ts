import { Component, Input, Output } from '@angular/core';
import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Inject, LOCALE_ID } from '@angular/core';
import { ViewChild, ApplicationRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EDITOR_SETTINGS } from './htmleditor.settings';


@Component({
    selector: 'app-htmleditor',
    templateUrl: 'htmleditor.component.html',
    styleUrls: [ 'htmleditor.component.scss' ],
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HTMLEditorComponent),
      multi: true
    }]
})
export class HTMLEditorComponent implements ControlValueAccessor, OnChanges {

    /** HTML editor configuration */
    public readonly settings = EDITOR_SETTINGS;

    /** Wether the component is disabled */
    private _disabled = false;

    /** Wether the component is focused */
    private _focused = false;

    /** Current value */
    @Input() value: any = null;

    /** Disabled attribute of the control */
    @Input('disabled') set setDisabled(value: string) {
        this.disabled = (value !== null && value !== undefined);
    };

    /** TinyMCE editor element */
    @ViewChild('editor') editor;


    /**
     * Component constructor.
     */
    constructor(
        @Inject(LOCALE_ID)
        private locale: string,
        private app: ApplicationRef
    ) {
        this.settings['language'] = locale;
        this.settings['document_base_url'] = '.';
    }


    /**
     * On component property changes.
     */
    ngOnChanges(changes: SimpleChanges) {
        if ('value' in changes) {
            this.writeValue(this.value);
        }
    }


    /**
     * Registers a callback that will be invoked when the choosen
     * value changes.
     *
     * @param fn    Callback function
     */
    registerOnChange(fn: any) {
        this.editor.registerOnChange(fn);
    }


    /**
     * Registers a callback that will be invoked when the component
     * is blured.
     *
     * @param fn    Callback function
     */
    registerOnTouched(fn: any) {
        this.editor.registerOnTouched(fn);
    }


    /**
     * Sets the disabled state of the component.
     */
    setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }


    /**
     * Writes a value from the model into the view.
     *
     * @param value     New value
     */
    writeValue(value: any) {
        try {
            this.editor.writeValue(value || '');
        } catch (e) {
            // WA: TinyMCE crashes with «TypeError: s is null» when
            // receiving an empty value 
        }
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
    set disabled(value: boolean) {
        this.editor.setDisabledState(value);
        this._disabled = value;
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
        this.app.tick();
    }


    /**
     * Returns the status of the component.
     *
     * @returns     New state object
     */
    public state(): any {
        return {
            disabled: this._disabled,
            focused: this._focused
        };
    }

}
