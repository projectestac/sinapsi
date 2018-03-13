import { Component, Input, Output } from '@angular/core';
import { EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Collection, Model } from 'app/core';
import { StoreQuery, StoreService } from 'app/core';
import { DATE_PATTERN } from 'app/shared/datepicker';
import { TYPEAHEAD_FIELDS, FieldConfig } from './search.fields';
import { PUBLISH_INTERVALS, Interval } from './search.intervals';


@Component({
    selector: 'app-filters',
    templateUrl: 'filters.component.html',
    styleUrls: [ 'filters.component.scss' ]
})
export class FiltersComponent implements OnChanges {

    /** Maps the controls to their query keys */
    private readonly CONTROLS_MAPPING = {
        after:          'min-published_at',
        before:         'max-published_at',
        municipalities: 'municipality_id',
        projects:       'author_id',
        schools:        'author_id',
        tags:           'tag_id',
        territories:    'territory_id'
    };

    /** Current active tab */
    public tab = 'tags';

    /** Current active interval */
    public interval = PUBLISH_INTERVALS[0];

    /** Predefined date intervals */
    public intervals = PUBLISH_INTERVALS;

    /** Multiselect fields */
    public fields = TYPEAHEAD_FIELDS;

    /** Filters form group */
    public form: FormGroup;

    /** Initial filter values */
    @Input() value: StoreQuery = {};

    /** Emitted on search */
    @Output('search') searchEvent = new EventEmitter<StoreQuery>();


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
     * Submit the form.
     *
     * @param values     Form values
     */
    public submit(values: any) {
        const query = this.toQuery(values);
        this.searchEvent.emit(query);
    }


    /**
     * Sets the active interval and patch the form with the
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
     * Builds the form controls for the typeahead filters
     * and the date range fields.
     *
     * @returns     Form group
     */
    private buildForm(): FormGroup {
        const controls = {
            after:  null,
            before: null
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
        const entries = Object.entries(values);
        const query = {};

        // Map and transform the form values

        entries.forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                const name = this.CONTROLS_MAPPING[key];
                const hasModels = Array.isArray(value);
                const filters = hasModels ? value.map(m => m.id) : value;

                query[name] = (name in query) ?
                    [...query[name], ...filters] : filters;
            }
        });

        // Fill with null any undefined filters

        for (let key in this.CONTROLS_MAPPING) {
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
        // Patch the models by obtaining them from the server or set
        // the value to null. If the control is not a typeahead field,
        // then just patch its value.

        Object.entries(this.CONTROLS_MAPPING)
            .forEach(([name, param]) => {
                const field = this.fields.find(v => v.id === name);
                const values = this.value[param] || null;

                if (field && values) {
                    this.patchModels(field, values);
                } else {
                    this.form.patchValue({[name]: values});
                }
            });

        // Clear the current date interval if a value for the
        // date boxes was provided

        if (this.hasValue('before') || this.hasValue('after')) {
            this.clearInterval();
        }
    }


    /**
     * Fetch a set of field models from the server and patch
     * the form with the received values.
     *
     * @param field     Field configuration
     * @param values    Array of model identifiers
     */
    private patchModels(field: FieldConfig, ids: number | number[]) {
        let values = this.form.get(field.id).value || [];
        let valueIds = Array.isArray(ids) ? ids : [ids];

        // Remove any values not found in the ids array

        values = values.filter(model => {
            return valueIds.indexOf(model.id) >= 0;
        });

        // Fetch any missing values from the server and patch
        // the form control value

        const newIds = valueIds.filter(id => {
            return !values.find(v => id === v.id);
        });

        if (newIds.length < 1) {
            this.form.patchValue({[field.id]: values});
        } else {
            const request = { id: newIds, ...field.filters };

            this.store.query(field.path, request)
                .subscribe(results => {
                    values.push.apply(values, results);
                    this.form.patchValue({[field.id]: values});
                });
        }
    }


    /**
     * Returns if the control has a value. This method returns false
     * if the control does not have a value or the value is empty.
     *
     * @param name      Control name
     * @returns         True if a value exists
     */
    private hasValue(name: string): boolean {
        return !!this.form.get(name).value;
    }


    /**
     * Returns the number of values on a control.
     *
     * @param name      Control name
     * @returns         Number of values
     */
    private countValue(name: string): number {
        const values = this.form.get(name).value;

        if (Array.isArray(values)) {
            return values.length;
        }

        return values ? 1 : 0;
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

}
