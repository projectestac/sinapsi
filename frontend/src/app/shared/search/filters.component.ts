import { Component, Input, Output } from '@angular/core';
import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StoreQuery } from 'app/core';
import { DATE_PATTERN } from 'app/shared/datepicker';
import { TYPEAHEAD_FIELDS } from './search.fields';
import { PUBLISH_INTERVALS, Interval } from './search.intervals';


@Component({
    selector: 'app-filters',
    templateUrl: 'filters.component.html',
    styleUrls: [ 'filters.component.scss' ]
})
export class FiltersComponent {

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
    public filters = TYPEAHEAD_FIELDS;

    /** Filters form group */
    public form: FormGroup;

    /** Initial filter values */
    @Input() value: StoreQuery = {};

    /** Emitted on search */
    @Output('search') searchEvent = new EventEmitter<StoreQuery>();


    /**
     * Component constructor.
     */
    constructor(private builder: FormBuilder) {
        this.form = this.buildForm();
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
     * Builds the form controls for the typeahead filters
     * and the date range fields.
     *
     * @returns     Form group
     */
    private buildForm(): FormGroup {
        const fields = {
            after:  null,
            before: null
        };

        this.filters.forEach(filter => {
            fields[filter.id] = null;
        });

        return this.builder.group(fields);
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

}
