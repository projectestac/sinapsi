import { Component, Input, Output, ViewChild } from '@angular/core';
import { EventEmitter, OnChanges, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Model, StoreQuery, StoreService } from 'app/core';
import { TYPEAHEAD_FIELDS, FieldConfig } from './search.fields';
import { PUBLISH_INTERVALS, Interval } from './search.intervals';
import { RESULTS_ORDERINGS, Ordering } from './search.orderings';


@Component({
    selector: 'app-filters',
    templateUrl: 'filters.component.html',
    styleUrls: [ 'filters.component.scss' ],
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FiltersComponent),
      multi: true
    }]
})
export class FiltersComponent implements OnChanges {

    /** Maps the controls to their query keys */
    private readonly CONTROLS_MAPPING = {
        sort:           'sort',
        after:          'min-published_at',
        before:         'max-published_at',
        categories:     'category_id',
        municipalities: 'municipality_id',
        projects:       'author_id',
        schools:        'author_id',
        tags:           'tag_id',
        territories:    'territory_id',
        services:       'territory_id'
    };

    /** Form on change callback */
    private _onChange: any = null;

    /** Form on touched callback */
    private _onTouched: any = null;

    /** Wether the component is disabled */
    private _disabled = false;

    /** Current active tab */
    public tab = 'tags';

    /** Current active interval */
    public interval = PUBLISH_INTERVALS[0];

    /** Predefined date intervals */
    public intervals = PUBLISH_INTERVALS;

    /** Current active order */
    public ordering = RESULTS_ORDERINGS[0];

    /** Predefined date intervals */
    public orderings = RESULTS_ORDERINGS;

    /** Multiselect fields */
    public fields = TYPEAHEAD_FIELDS;

    /** Filters form group */
    public form: FormGroup;

    /** Initial filter values */
    @Input() value: StoreQuery = {};

    /** Emitted on search */
    @Output('input') inputEvent = new EventEmitter<StoreQuery>();

    /** Emitted on changes */
    @Output('change') changeEvent = new EventEmitter<StoreQuery>();

    /** Root element */
    @ViewChild('fieldset') fieldset;


    /**
     * Component constructor.
     */
    constructor(
        private builder: FormBuilder,
        private store: StoreService
    ) {
        this.form = this.buildForm();
    }


    /**
     * Fired on attribute changes.
     */
    ngOnChanges(changes) {
        if ('value' in changes) {
            this.initValues();
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
        this.value = value;
        this.initValues();
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
     * Submit the form.
     *
     * @param values     Form values
     */
    public submit(values: any) {
        const query = this.toQuery(values);
        this.inputEvent.emit(query);
    }


    /**
     * Sets the active ordering and patches the form with the
     * given ordering values.
     *
     * @param interval      Date interval
     */
    public applyOrdering(ordering: Ordering) {
        this.ordering = ordering;
        this.form.patchValue({ sort: ordering.sort });
    }


    /**
     * Clears the active interval and patches the form with the
     * given date range values.
     *
     * @param after         After date
     * @param before        Before date
     */
    public applyDateRange(after: Date, before: Date) {
        this.interval = null;
        this.form.patchValue({ after: after, before: before });
    }


    /**
     * Sets the active interval and patches the form with the
     * given interval date range.
     *
     * @param interval      Date interval
     */
    public applyInterval(interval: Interval) {
        this.interval = interval;

        this.form.patchValue({
            after: interval['after'],
            before: interval['before']
        });
    }


    /**
     * Clears the current date range interval. Note that this method
     * does not clear the values on the date components.
     */
    public clearInterval() {
        this.interval = null;
    }


    /**
     * Returns if the control has a value. This method returns false
     * if the control does not have a value or the value is empty.
     *
     * @param name      Control name
     * @returns         True if a value exists
     */
    public hasValue(name: string): boolean {
        return !!this.form.get(name).value;
    }


    /**
     * Returns if any of the date controls has a value.
     * {@see #hasValue}
     *
     * @returns         True if a value exists
     */
    public hasDateValues(): boolean {
        return this.hasValue('before') || this.hasValue('after');
    }


    /**
     * Returns if any of the controls has a value.
     *
     * @returns         True if a value exists
     */
    public hasValues(): boolean {
        const names = Object.keys(this.CONTROLS_MAPPING);
        return names.some(name => this.hasValue(name));
    }


    /**
     * Returns the number of values on a control.
     *
     * @param name      Control name
     * @returns         Number of values
     */
    public countValue(name: string): number {
        const values = this.form.get(name).value;

        if (Array.isArray(values)) {
            return values.length;
        }

        return values ? 1 : 0;
    }


    /**
     * Builds the form controls for the typeahead filters
     * and the date range fields.
     *
     * @returns     Form group
     */
    private buildForm(): FormGroup {
        const controls = {
            after:  null,
            before: null,
            sort: null
        };

        this.fields.forEach(field => {
            controls[field.id] = null;
        });

        return this.builder.group(controls);
    }


    /**
     * Converts form values to a request query.
     *
     * @param values    Form values
     * @returns         Request query
     */
    private toQuery(values: any): StoreQuery {
        const query = {};

        // Map and transform the form values. This extends the query
        // object with the provided values

        if (values !== null && values !== undefined) {
            Object.entries(values).forEach(([key, value]) => {
                if (value !== null && value !== undefined) {
                    const name = this.CONTROLS_MAPPING[key];

                    if (Array.isArray(value) && this.fieldExists(key)) {
                        const ids = value.map(model => model.id);
                        this.pushValues(query, name, ids);
                    } else {
                        this.pushValues(query, name, value);
                    }
                }
            });
        }

        // Fill with null any undefined filters

        for (const key in this.CONTROLS_MAPPING) {
            const name = this.CONTROLS_MAPPING[key];

            if (query[name] === undefined) {
                query[name] = null;
            }
        }

        return query;
    }


    /**
     * Initialize the form from the model IDs received on the
     * value attribute.
     */
    private initValues() {
        this.value = (this.value || {});

        // Patch the models by obtaining them from the server or set
        // the value to null. If the control is not a typeahead field,
        // then just patch its value.

        Object.entries(this.CONTROLS_MAPPING)
            .forEach(([name, param]) => {
                const field = this.fields.find(v => v.id === name);
                const values = this.value[param] || null;

                if (field && values) {
                    const ids = Array.isArray(values) ?
                        values.map(v => parseInt(v, 10)) :
                        [parseInt(values, 10)];

                    this.patchModels(field, ids);
                } else {
                    this.form.patchValue({[name]: values});
                }
            });

        // Update the date range interval and ordering

        const after = this.form.get('after').value;
        const before = this.form.get('before').value;
        const sort = this.form.get('sort').value;

        this.interval = this.findInterval(before, after);
        this.ordering = this.findOrdering(sort);
    }


    /**
     * Fetch a set of field models from the server and patch
     * the form with the received values.
     *
     * @param field     Field configuration
     * @param values    Array of model identifiers
     */
    private patchModels(field: FieldConfig, ids: number[]) {
        let values = this.form.get(field.id).value || [];

        // Remove any values not found on the ids array

        values = values.filter(m => ids.indexOf(m.id) >= 0);

        // Fetch any missing values from the server and patch
        // the form control value

        const newIds = ids.filter(id => !values.find(v => id === v.id));

        if (newIds.length < 1) {
            this.form.patchValue({[field.id]: values});
        } else {
            const request = { id: newIds, ...field.filters };

            this.store.query(field.path, request)
                .subscribe(results => {
                    values.push.apply(values, results);

                    this.form.patchValue({ [field.id]:
                        (values.length > 0) ? values : null
                    });
                });
        }
    }


    /**
     * Returns the control value with the given identifier.
     *
     * @param name      Control name
     * @param id        Mode identifier
     */
    private findValue(name: string, id: number): Model {
        const values = this.form.get(name).value || [];
        return values.find(v => id === v.id) || null;
    }


    /**
     * Given two dates returns the matching date range interval.
     *
     * @param before    Start of the date range
     * @param after     End of the date range
     *
     * @returns         Matching interval object or null
     */
    private findInterval(before: any, after: any): Interval {
        const mb = this.toMilliseconds(before);
        const ma = this.toMilliseconds(after);

        return this.intervals.find(i => {
            return (mb === this.toMilliseconds(i.before)) &&
                   (ma === this.toMilliseconds(i.after));
        }) || null;
    }


    /**
     * Given a sort array returns a matching sort ordering.
     *
     * @param sort      Sort array
     * @returns         Matching ordering object or null
     */
    private findOrdering(sort: string[]): Ordering {
        return this.orderings.find(o => {
            return String(sort) === String(o.sort);
        }) || null;
    }


    /**
     * Returns the number of milliseconds since epoch for a Date
     * object or a string representation of a date.
     *
     * @param value     Date or string
     * @returns         Milliseconds or NaN if the date is not valid
     */
    private toMilliseconds(value: string | Date): number {
        return (value instanceof Date) ?
            value.getTime() : new Date(value).getTime();
    }


    /**
     * Call the touched and change callbacks when the control
     * is blured.
     */
    public _onBlur(event) {
        const root = this.fieldset.nativeElement;

        setTimeout(() => {
            if (root.contains(document.activeElement)) {
                return;
            }

            if (typeof this._onTouched === 'function') {
                this._onTouched();
            }

            if (typeof this._onChange === 'function') {
                const query = this.toQuery(this.form.value);
                this._onChange(query);
            }
        });
    }


    /**
     * Returns if a field with the given identifier exists on the
     * fields array.
     *
     * @param id        Unique field identifier
     * @returns         If the field exists
     */
    private fieldExists(id: string): boolean {
        return this.fields.some(v => (id === v.id));
    }


    /**
     * Push a value to the given key of a query object.
     *
     * If the query does not have the given property it will be
     * created, otherwise the provided values will be pushed into the
     * property value (extending the current value when required).
     *
     * @param query     Query object to modify
     * @param name      Query property name
     * @param value     Value to add to the property
     */
    private pushValues(query: object, name: string, value: any) {
        // If the query does not have the property just
        // add it with the given value

        if (!query.hasOwnProperty(name)) {
            query[name] = value;
            return;
        }

        // If the query value is not an array, transform it

        if (!Array.isArray(query[name])) {
            query[name] = [query[name]];
        }

        // If the value is an array, extend the query with it,
        // otherwise append the value to the end

        if (Array.isArray(value)) {
            query[name].push.apply(query[name], value);
        } else {
            query[name].push(value);
        }
    }

}
