import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { CnKeySorted, CnSortChanged, CnSortEvent } from './sort.events';


@Injectable()
export class CnSortService {

    /** Sort keys (ordered) */
    private keys: Array<string> = [];

    /** Sort keys order (asc = true, desc = false) */
    private orders: Array<boolean> = [];

    /** Sort events subject */
    private sortEvents = new ReplaySubject<CnSortEvent>(1);

    /** Observable of sort events */
    public events = this.sortEvents.asObservable();


    /**
     * Returns the current sort index for a key.
     *
     * @param key       Sorting key
     */
    public indexOf(key: string): number {
        return this.keys.indexOf(key);
    }


    /**
     * Returns a string representation of the given key order. By
     * default, the sort order of a key is ascending.
     *
     * @param key       Sorting key
     * @returns         ascending | descending
     */
    public orderOf(key: string): string {
        return this.isAscending(key) ? 'ascending' : 'descending';
    }


    /**
     * Returns if a key is sorted in ascending order.
     *
     * @param key       Sorting key
     * @returns         true | false
     */
    public isAscending(key: string): boolean {
        const index = this.keys.indexOf(key);
        return (index < 0) || this.orders[index];
    }


    /**
     * Sets the current sorting key or toggles its order.
     *
     * If the key was already the first on the keys array its order
     * (ascending/descending) will be toggled; otherwise the key is
     * moved/added to the top of the array with an ascending order.
     *
     * @param key       Sorting key
     */
    public sortBy(key: string) {
        const index = this.keys.indexOf(key);

        if (index === 0) {
            const order = !this.orders[index];
            this.orders[index] = order;
        } else {
            if (index >= 0) {
                this.keys.splice(index, 1);
                this.orders.splice(index, 1);
            }

            this.keys.unshift(key);
            this.orders.unshift(true);
        }

        // Emit key and a sort changes

        const values = this.toArray();

        this.sortEvents.next(new CnKeySorted(key, values));
        this.sortEvents.next(new CnSortChanged(values));
    }


    /**
     * Replaces the current sort array with the given data. The array
     * must contain the sort keys in the format ([-|+]?[a-z]+).
     *
     * @param array         New sort array
     */
    public fromArray(array: Array<string>) {
        if (Array.isArray(array) === false) {
            return;
        }

        // Parse the element of the array

        this.keys.splice(0);
        this.orders.splice(0);

        array.forEach((value) => {
            const sign = value.charAt(0);
            const isSigned = (sign === '-' || sign === '+');
            const key = (isSigned) ? value.substring(1) : value;
            const order = (sign !== '-');

            this.keys.push(key);
            this.orders.push(order);
        });

        // Emit a sort array change

        const values = this.toArray();
        this.sortEvents.next(new CnSortChanged(values));
    }


    /**
     * Returns the current sort keys and order as a string array.
     *
     * With the format ([-|+]?[a-z]+); where -/+ is the order of the
     * key (descending/ascending) and [a-z] the name of the key.
     *
     * @returns         Sort array
     */
    public toArray(): Array<string> {
        return this.keys.map((key, index) => {
            const order = this.orders[index];
            return order ? `${key}` : `-${key}`;
        });
    }
}
