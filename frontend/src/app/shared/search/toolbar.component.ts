import { Component, Input, Output } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { EventEmitter, ViewChild } from '@angular/core';
import { StoreQuery } from 'app/core';


@Component({
    selector: 'app-search-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.scss']
})
export class SearchToolbarComponent implements AfterViewInit {

    /** Wether the toolbar was activated */
    private _activated = false;

    /** Number of active filters */
    private _filtered = false;

    /** Filtering values */
    @Input() value: StoreQuery = {};

    /** Emitted on search */
    @Output('input') input = new EventEmitter<StoreQuery>();

    /** Filters expandable */
    @ViewChild('expandable', { static: false }) expandable;

    /** Filters component */
    @ViewChild('filters', { static: false }) filters;


    /**
     * Component initialization.
     */
    ngAfterViewInit() {
        this.filters.form.valueChanges.subscribe(values => {
            this._filtered = this.filters.hasValues();
        });
    }


    /**
     * Returns if the toolbar expandable was activated.
     *
     * @returns     True if it was toggled open
     */
    get activated(): boolean {
        return this._activated;
    }


    /**
     * Returns if there are active filters.
     */
    get filtered(): boolean {
        return this._filtered;
    }


    /**
     * Toggles the toolbar expandables.
     */
    toggleFilters() {
        if (this.expandable.toggle()) {
            this._activated = true;
        }
    }


    /**
     * Clear the toolbar filters.
     */
    clearFilters() {
        this.value = {};
        this._filtered = false;
        this.filters.submit(null);
    }


    /**
     * Submit the form.
     *
     * @param values     Form values
     */
    submit(values: any) {
        this.input.emit(values);
    }

}
