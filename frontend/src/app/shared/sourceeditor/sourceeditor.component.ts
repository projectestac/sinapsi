import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';

import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EDITOR_SETTINGS } from './sourceeditor.settings';


@Component({
    selector: 'app-source-editor',
    templateUrl: 'sourceeditor.component.html',
    styleUrls: [ 'sourceeditor.component.scss' ],
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SourceEditorComponent),
      multi: true
    }]
})
export class SourceEditorComponent implements
    ControlValueAccessor, OnChanges, OnInit {

    /** HTML editor configuration */
    public readonly settings = EDITOR_SETTINGS;

    /** Form on change callback */
    private _onChange: any = null;

    /** Form on touched callback */
    private _onTouched: any = null;

    /** Wether the component is disabled */
    private _disabled = false;

    /** Wether the component is focused */
    private _focused = false;

    /** CodeMirror editor reference */
    private editor: CodeMirror;

    /** Current value */
    @Input() value: string = null;

    /** Disabled attribute of the control */
    @Input('disabled') set setDisabled(value: string) {
        this.disabled = (value !== null && value !== undefined);
    };

    /** Textarea element element */
    @ViewChild('editorArea') editorArea;


    /**
     * Component constructor.
     */
    constructor() {}


    /**
     * Component initialization.
     */
    ngOnInit() {
        // Replace the text are with the editor and bind
        // the editor events
        
        try {

            this.editor = CodeMirror.fromTextArea(
                this.editorArea.nativeElement,
                EDITOR_SETTINGS
            );

            this.editor.on("focus", () => {
                this._onFocus();
            });

            this.editor.on("blur", () => {
                this._onBlur();
            });

            this.editor.on("change", () => {
                this.value = this.editor.getValue();
                this.emitEvents();
            });
        } catch (e) {
            // Fallback to the textarea
        }
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
        this.value = value;
        
        if (this.editor) {
            this.editor.setValue(this.value || '');
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


    /**
     * On focus callback.
     */
    public _onFocus() {
        this._focused = true;
    }


    /**
     * On blur callback.
     */
    public _onBlur() {
        this._focused = false;
    }


    /**
     * Emits the form events.
     */
    private emitEvents() {
        if (typeof this._onTouched === 'function') {
            this._onTouched();
        }

        if (typeof this._onChange === 'function') {
            this._onChange(this.value);
        }
    }

}
