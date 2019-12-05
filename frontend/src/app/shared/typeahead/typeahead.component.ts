import { ReplaySubject, Subject } from 'rxjs';

import { Component, Input, Output } from '@angular/core';
import { EventEmitter, SimpleChanges } from '@angular/core';
import { ViewChild, forwardRef } from '@angular/core';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { Collection, Model } from 'app/core';
import { StoreQuery, StoreService } from 'app/core';
import { _ } from 'i18n';


/** Unique component intance ID */
let numIntances = 0;


@Component({
    selector: 'app-typeahead',
    templateUrl: 'typeahead.component.html',
    styleUrls: ['typeahead.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TypeaheadComponent),
        multi: true
    }]
})
export class TypeaheadComponent implements ControlValueAccessor,
    OnChanges, OnDestroy, OnInit {

    /** Prevent the blur event */
    protected lockBlur = false;

    /** Default request limit */
    public readonly DEFAULT_LIMIT = 5;

    /** Default request sort order */
    public readonly DEFAULT_SORT = ['$name', 'name'];

    /** Form on change callback */
    private _onChange: any = null;

    /** Form on touched callback */
    private _onTouched: any = null;

    /** Unsubscribe subject */
    private unsubscribe = new Subject();

    /** Initial model identifier **/
    protected valueId: number = null;

    /** Whether the control is disabled */
    protected isDisabled = false;

    /** Whether the autofocus flag is set */
    protected autofocus = false;

    /** Search keywords */
    public keywords: string = null;

    /** Whether the component has focus */
    public hasFocus = false;

    /** Value that has the focus */
    public activeValue: Model = null;

    /** Current request */
    public request: StoreQuery = {};

    /** Current results */
    public collection: Collection<Model> = null;

    /** Input key up subject */
    public keyUp = new ReplaySubject<string>(1);

    /** Unique identifier of the component */
    @Input() id = `app-typeahead-${numIntances++}`;

    /** Placeholder text */
    @Input() placeholder = _('Type to search');

    /** Path of the API endpoint */
    @Input() path: string = null;

    /** Current value */
    @Input() value: any = null;

    /** Request filters */
    @Input() filters: StoreQuery = {};

    /** Autofocus attribute of the control */
    @Input('autofocus') set setAutofocus(value: string) {
        this.autofocus = (value !== null && value !== undefined);
    };

    /** Disabled attribute of the control */
    @Input('disabled') set setDisabled(value: string) {
        this.disabled = (value !== null && value !== undefined);
    };

    /** On input event */
    @Output('input') inputEvent = new EventEmitter<any>();

    /** On change event */
    @Output('change') changeEvent = new EventEmitter<any>();

    /** On blur event */
    @Output('blur') blurEvent = new EventEmitter<Element>();

    /** On focus event */
    @Output('focus') focusEvent = new EventEmitter<Element>();

    /** Search input box */
    @ViewChild('inputBox', { static: false }) inputBox;


    /**
     * Component constructor.
     */
    constructor(
        protected store: StoreService
    ) { }


    /**
     * Component initialization method.
     */
    ngOnInit() {
        // Require an API path

        if (!this.path) {
            throw new Error("Attribute 'path' is required");
        }

        // Search new results on each key up of the input box

        this.keyUp
            .pipe(debounceTime(400))
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(keywords => this.fetch(keywords));

        // Autofocus the contorl if requested

        if (this.autofocus === true) {
            this.focus();
        }
    }


    /**
     * Component destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


    /**
     * On component property changes.
     */
    ngOnChanges(changes: SimpleChanges) {
        if ('path' in changes && !this.path) {
            throw new Error("Attribute 'path' is required");
        }

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
     * Writes a value from the model into the view.
     *
     * @param value     New value
     */
    writeValue(value: any) {
        this.valueId = value && value['id'] || null;
        this.keywords = value && value['name'] || null;
        this.value = Object.assign({}, value);
    }


    /**
     * Sets the disabled state of the component.
     */
    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }


    /**
     * Returns if the options list is expanded.
     */
    public ariaExpanded(): boolean {
        return this.hasFocus;
    }


    /**
     * Returns if the model is the active value.
     */
    public ariaSelected(model: Model): boolean {
        return this.isActive(model);
    }


    /**
     * Returns the UUID of the active value.
     */
    public ariaActiveDescendant(): string {
        return this.activeValue ? `${this.id}-o${this.activeValue.id}` : null;
    }


    /**
     * Returns the UUID of the options list.
     */
    public ariaOwns(): string {
        return `${this.id}-listbox`;
    }


    /**
     * Returns a unique UUID for a model in the options list.
     */
    public ariaOptionId(model: Model): string {
        return model ? `${this.id}-o${model.id}` : null;
    }


    /**
     * Returns if the user can interact with the component.
     *
     * @returns     True if the control is disabled
     */
    get disabled(): boolean {
        return this.isDisabled;
    }


    /**
     * Sets the disabled attribute of the component.
     */
    set disabled(value: boolean) {
        this.inputBox.nativeElement.disabled = value;
        this.isDisabled = value;

        if (this.isDisabled === true) {
            this.hasFocus = false;
            this.inputBox.nativeElement.blur();
        }
    }


    /**
     * Clear the current value.
     */
    public clear() {
        this.value = null;
        this.keywords = null;
        this.activeValue = null;
        this.emitInputEvent();
    }


    /**
     * Activates the given value.
     * 
     * Only one value can be active at a time. The value must be present
     * on the current search results; otherwise the active value is set
     * to null.
     */
    public activate(model: Model) {
        if (model && Array.isArray(this.collection)) {
            const index = this.indexOf(model);
            this.activeValue = (index >= 0) ? model : null;
        } else {
            this.activeValue = null;
        }
    }


    /**
     * Activates the next value on the search results.
     */
    public activateNext() {
        const i = this.indexOf(this.activeValue);
        const c = this.collection || [];
        this.activate(c[1 + i] || c[0]);
    }


    /**
     * Activates the previous value on the search results.
     */
    public activatePrevious() {
        const i = this.indexOf(this.activeValue);
        const c = this.collection || [];
        this.activate(c[i - 1] || c[c.length - 1]);
    }


    /**
     * Selects a new value.
     *
     * This method differs from setting the 'value' attribute on the
     * component in that it emits the 'input' event and does not clear
     * the initial value that was set for the component, and thus it may
     * fire a 'change' event when the control is blured.
     *
     * @param model     Model to select
     */
    public choose(model: Model) {
        if (model) {
            this.value = Object.assign({}, model);
            this.keywords = model['name'];
            this.activate(model);
            this.fetch(this.keywords);
            this.emitInputEvent();
        } else {
            this.clear();
        }
    }


    /**
     * Search new results.
     *
     * @param keywords  Search keywords
     */
    public search(keywords: string) {
        const nkeys = this.normalize(keywords);
        const okeys = this.request['search'];

        if (nkeys !== okeys) {
            this.keyUp.next(keywords);
        }
    }


    /**
     * Focus this component input box.
     */
    public focus() {
        if (this.hasFocus === false) {
            this.hasFocus = true;
            this.inputBox.nativeElement.focus();
            this.focusEvent.emit(this.inputBox);
            this.search(this.keywords);
        }
    }


    /**
     * Remove the focus from this component input box.
     */
    public blur() {
        if (this.lockBlur || !this.hasFocus) {
            return;
        }

        this.hasFocus = false;
        this.inputBox.nativeElement.blur();

        // Clear the selected value if the keywords changed after
        // it was selected; or select the active value if the
        // selected value does not match but the active value
        // matches the keywords

        if (!this.valueEquals(this.value, this.keywords)) {
            if (this.valueEquals(this.activeValue, this.keywords)) {
                this.choose(this.activeValue);
            } else {
                this.clear();
            }
        }

        // Emit change and blur events

        if (this.hasChanges()) {
            this.valueId = this.value && this.value['id'] || null;
            this.emitChangeEvent();
        }

        this.emitBlurEvent();
    }


    /**
     * Prevents the blur event on the component from being called.
     *
     * This method does not prevent the blur event on the input box
     * from firing; it only prevents the blur callback from executing
     * and then focuses again the input box.
     */
    public preventBlur(event: Event) {
        this.lockBlur = true;

        setTimeout(() => {
            this.inputBox.nativeElement.focus();
            this.lockBlur = false;
        });

        event.stopPropagation();
    }


    /**
     * Returns if the given model is the active value. The values
     * are compared by their 'id' properties.
     *
     * @param model     Model to check
     * @returns         True if the model is active
     */
    public isActive(model: Model) {
        if (model && this.activeValue) {
            return (model.id === this.activeValue.id);
        }

        return false;
    }


    /**
     * Returns if the given model is a chosen value. The values
     * are compared by their model 'id' properties.
     *
     * @param model     Model to check
     * @returns         True if the model is selected
     */
    public isChoice(model: Model) {
        if (model && this.value) {
            return (model.id === this.value.id);
        }

        return false;
    }


    /**
     * Returns if the results collection has items.
     *
     * @returns         True if there are results
     */
    public hasResults() {
        if (Array.isArray(this.collection)) {
            return (this.collection['total'] > 0) &&
                (this.collection.length > 0);
        }

        return false;
    }


    /**
     * Returns if the choosen value has changed.
     *
     * @returns         True if there are changes
     */
    public hasChanges(): boolean {
        if (this.value && this.valueId) {
            return this.valueId !== this.value.id;
        } else if (!this.value && this.valueId) {
            return true;
        } else if (!this.valueId && this.value) {
            return true;
        }

        return false;
    }


    /**
     * Finds the index of the given model on the current search
     * results collection. The models are compared by their ID.
     *
     * @param model     Model to find
     * @returns         Index of the model or -1 if not found
     */
    public indexOf(model: Model) {
        if (model !== null && model !== undefined) {
            for (let i = 0; i < this.collection.length; i++) {
                if (model.id === this.collection[i].id) {
                    return i;
                }
            }
        }

        return -1;
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
     * Show the previous page of results.
     */
    public previous() {
        if (this.collection.from > 1) {
            this.page(this.collection.current_page - 1);
        }
    }


    /**
     * Show the next page of results.
     */
    public next() {
        if (this.collection.total > this.collection.to) {
            this.page(this.collection.current_page + 1);
        }
    }


    /**
     * Show the given page of results.
     */
    public page(page: number) {
        if (!this.collection || page < 1) {
            return;
        }

        const request = { ...this.request, page: page };

        this.store.query(this.path, request)
            .subscribe(collection => {
                this.request = request;
                this.collection = collection;
                this.refreshValue();
                this.refreshActiveValue();
            });
    }


    /**
     * Fecth new results from the server for the given keywords.
     *
     * @param keywords      Search keywords
     */
    protected fetch(keywords: string) {
        // Build the request using the user filters or the
        // default parameters

        const filters = Object.assign({
            limit: this.DEFAULT_LIMIT,
            sort: this.DEFAULT_SORT
        },
            this.filters
        );

        const request = Object.assign(filters, {
            search: this.normalize(keywords)
        });

        // Fetch new results if the new request differs from
        // the current one

        if (!this.requestsEqual(request, this.request)) {
            this.store.query(this.path, request)
                .subscribe(collection => {
                    this.request = request;
                    this.collection = collection;
                    this.refreshValue();
                    this.refreshActiveValue();
                });
        }
    }


    /**
     * Updates the active value.
     *
     * Clears the active value it no longer exists on the current search
     * results and sets the active value to the result that most closely
     * matches the current request keywords. If the active value exists on
     * the search results, it is kept.
     */
    private refreshActiveValue() {
        const index = this.indexOf(this.value);

        this.activate(null);

        if (index >= 0) {
            this.activate(this.collection[index]);
        } else if (this.request.search) {
            for (let i = 0; i < this.collection.length; i++) {
                const model = this.collection[i];
                const name = this.normalize(model['name']);

                if (name.startsWith(this.request.search)) {
                    this.activate(model);
                    break;
                }
            }
        }
    }


    /**
     * Updates the selected value.
     *
     * Clears the selected value if it no longer exists on the
     * current search results.
     */
    private refreshValue() {
        if (this.indexOf(this.value) < 0) {
            this.value = null;
        }
    }


    /**
     * Normalize the given keywords. This method converts the string
     * to lowercase and normalizes any space characters.
     *
     * @param keywords      String to normalize
     */
    protected normalize(keywords: string): string {
        return (keywords && keywords !== null) ?
            keywords.trim().replace(/\s+/g, ' ').toLowerCase() : '';
    }


    /**
     * Returns if the given value name is equivalent to the provided
     * keywords. That is, if their normalized forms are equal.
     *
     * @param model     Model to check
     * @param keywords  Keywords to match against
     *
     * @returns         True if they equal; false otherwise
     */
    protected valueEquals(model: Model, keywords: string) {
        if (model && keywords) {
            const k1 = this.normalize(keywords);
            const k2 = this.normalize(model['name']);

            return (k1 === k2);
        }

        return false;
    }


    /**
     * Compares if two arrays are equivalent.
     *
     * That is, they contain equivalent values on the same indexes. It
     * does not check if the type of the array values is the same.
     *
     * @param a1        Array to compare
     * @param a2        Array to compare
     *
     * @returns         True if the arrays are equal
     */
    protected arraysEqual(a1: any[], a2: any[]): boolean {
        if (a1 !== a2) {
            if (a1.length !== a2.length) {
                return false;
            }

            for (let i = 0; i < a1.length; i++) {
                if (a1[i] != a2[i]) {
                    return false;
                }
            }
        }

        return true;
    }


    /**
     * Compares if two requests are equivalent.
     *
     * This method compares if the values of two requests are equivalent,
     * without taking into account the types of their values.
     *
     * @param r1        Request to compare
     * @param r2        Request to compare
     *
     * @returns         True if the requests are equal
     */
    protected requestsEqual(r1: any, r2: any): boolean {
        const k1 = Object.keys(r1);
        const k2 = Object.keys(r2);

        if (!this.arraysEqual(k1, k2)) {
            return false;
        }

        for (const name in r1) {
            const v1 = r1[name];
            const v2 = r2[name];

            if (Array.isArray(v1) && Array.isArray(v2)) {
                if (!this.arraysEqual(v1, v2)) {
                    return false;
                }
            } else if (v1 != v2) {
                return false;
            }
        }

        return true;
    }

}
