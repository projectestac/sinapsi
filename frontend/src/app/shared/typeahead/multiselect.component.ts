import { Component, Input, Output } from '@angular/core';
import { EventEmitter, SimpleChanges } from '@angular/core';
import { ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Collection, Model } from 'app/core';
import { StoreQuery, StoreService } from 'app/core';
import { TypeaheadComponent } from './typeahead.component';


/** Unique component intance ID */
let numIntances = 0;


@Component({
    selector: 'app-multiselect',
    templateUrl: 'multiselect.component.html',
    styleUrls: [ 'multiselect.component.scss' ],
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiselectComponent),
      multi: true
    }]
})
export class MultiselectComponent extends TypeaheadComponent {

    /** Prevent the blur event */
    private lockBlur = false;

    /** Initial model identifier **/
    protected valueIds: number[] = null;

    /** Unique identifier of the component */
    @Input() id = `app-multiselect-${numIntances++}`;

    /** Current value */
    @Input() value: Model[] = null;

    /** On input event */
    @Output('input') inputEvent = new EventEmitter<any>();

    /** On change event */
    @Output('change') changeEvent = new EventEmitter<any>();


    /**
     * Component constructor.
     */
    constructor(protected store: StoreService) {
        super(store);
    }


    /**
     * Component initialization method.
     */
    ngOnInit() {
        super.ngOnInit();
        this.fetch(this.keywords);
    }


    /**
     * On component property changes.
     */
    ngOnChanges(changes: SimpleChanges) {
        super.ngOnChanges(changes);

        if ('value' in changes && !Array.isArray(this.value)) {
            throw new Error("Attribute 'value' must be an array");
        }
    }


    /**
     * Writes a value from the model into the view.
     *
     * @param value     New value
     */
    writeValue(value: any) {
        if (Array.isArray(value)) {
            this.valueIds = value.map(v => v['id'] || null);
            this.value = value.map(v => Object.assign({}, v));
        }
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
            if (!Array.isArray(this.value)) {
                this.value = [];
            }

            if (this.value.every(v => (v.id !== model.id))) {
                this.value.push(Object.assign({}, model));
                this.inputEvent.emit(this.value);
            }
        }
    }


    /**
     * Removes a value from the array of chosen values.
     *
     * @param model     Model to remove
     */
    public refuse(model: Model) {
        if (model && Array.isArray(this.value)) {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i].id === model.id) {
                    this.value.splice(i, 1);
                    this.inputEvent.emit(this.value);
                    break;
                }
            }
        }
    }


    /**
     * Toggles a value from the array of chosen values.
     *
     * @param model     Model to choose or remove
     */
    public toggle(model: Model) {
        if (this.isChoice(model)) {
            this.refuse(model);
        } else {
            this.choose(model);
        }
    }


    /**
     * Prevents the blur event on the component from being called.
     *
     * This method does not prevent the blur event on the input box
     * from firing; it only prevents the blur callback from execting
     * and focuses then focuses again the input box.
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
     * Remove the focus from this component input box.
     */
    public blur() {
        if (this.lockBlur || !this.hasFocus) {
            return;
        }

        this.hasFocus = false;
        this.inputBox.nativeElement.blur();

        // Emit change and blur events

        if (this.hasChanges()) {
            this.valueIds = this.value && this.value.map(v => v['id'] || null);
            this.changeEvent.emit(this.value || null);
        }

        this.blurEvent.emit(this.inputBox);
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
            return this.value.some(value => {
                return (value.id === model.id)
            });
        }

        return false;
    }


    /**
     * Returns if the choosen value has changed.
     *
     * @returns         True if there are changes
     */
    public hasChanges(): boolean {
        if (this.value && this.valueIds) {
            const oldIds = this.valueIds.slice();
            const newIds = this.value.map(v => v['id'] || null);

            return !this.arraysEqual(newIds.sort(), oldIds.sort());
        } else if (!this.value && this.valueIds) {
            return true;
        } else if (!this.valueIds && this.value) {
            return true;
        }

        return false;
    }


    /**
     * Fecth new results from the server for the given keywords.
     *
     * @param keywords      Search keywords
     */
    protected fetch(keywords: string) {
        // Build the request using the user filters or the
        // default parameters

        const request = Object.assign({}, this.filters, {
            search: this.normalize(keywords),
            limit: this.DEFAULT_LIMIT,
            sort: this.DEFAULT_SORT
        });

        // Fetch new results if the new request differs from
        // the current one
        
        if (!this.requestsEqual(request, this.request)) {
            this.store.query(this.path, request)
                .subscribe(collection => {
                    this.request = request;
                    this.collection = collection;
                    this.activate(null);
                });
        }
    }

}
