import { Injectable } from '@angular/core';


/**
 * Comparator service.
 */
@Injectable()
export class Comparator {


    /**
     * For the given object transforms in-place any existing models
     * on the object to their equivalent identifier properties.
     *
     * That is, if a property 'prop' exists on the object that
     * contains an 'id' attribute (i.e. prop = { id: 2}), then that
     * property will be removed and a new property 'prop_id' appended
     * to the object.
     *
     * @param object        Object to normalize
     * @returns             Object to normalize
     */
    public static normalize(object: any): object {
        Object.entries(object).forEach(([key, value]) => {
            if (Comparator.typeOf(value) === 'object') {
                if (value.hasOwnProperty('id')) {
                    object[`${key}_id`] = value['id'];
                    delete object[key];
                }
            }
        });

        return object;
    }


    /**
     * Compares two objects and returns the values from the first
     * object that either do not exist on the second object or their
     * values are not equivalent.
     *
     * @param a     Object to compare
     * @param b     Object to compare
     *
     * @returns     Elements from B that differ from A
     */
    public static changes(a: object, b: object): object {
        const diffs = {};

        Object.entries(a).forEach(([key, value]) => {
            if (!Comparator.equals(value, b[key])) {
                diffs[key] = value;
            }
        });

        return diffs;
    }


    /**
     * Returns if the values of two objects differ. This method does
     * not compare the objects value by value. See {@code changes}.
     *
     * @param a     Object to compare
     * @param b     Object to compare
     *
     * @returns     True if values differ
     */
    public static differ(a: object, b: object): boolean {
        return Object.keys(Comparator.changes(a, b)).length > 0;
    }


    /**
     * Compares two values for deep strict equivalence.
     *
     * @param a     Value to compare
     * @param b     Value to compare
     *
     * @returns     Whether the objects are equivalent
     */
    public static equals(a: any, b: any): boolean {
        const type = Comparator.typeOf(a);

        if (type !== Comparator.typeOf(b)) {
            return false;
        }

        if (type === 'date') {
            return Comparator.datesEqual(a, b);
        } else if (type === 'array') {
            return Comparator.arraysEqual(a, b);
        } else if (type === 'object') {
            return Comparator.objectsEqual(a, b);
        } else if (a === b) {
            return true;
        }

        return false;
    }


    /**
     * Compares two arrays for deep strict equivalence.
     *
     * @param a     Array to compare
     * @param b     Array to compare
     *
     * @returns     Whether the arrays are equivalent
     */
    public static arraysEqual(a: any[], b: any[]): boolean {
        if (a.length !== b.length) {
            return false;
        }

        for (let i = 0; i < a.length; i++) {
            if (!Comparator.equals(a[i], b[i])) {
                return false;
            }
        }

        return true;
    }


    /**
     * Compares the values of two dates for equivalence.
     *
     * @param a     Date to compare
     * @param b     Date to compare
     *
     * @returns     Whether the dates are equivalent
     */
    public static datesEqual(a: Date, b: Date): boolean {
        return a.getTime() === b.getTime();
    }


    /**
     * Compares two objects for deep strict equivalence.
     *
     * @param a     Object to compare
     * @param b     Object to compare
     *
     * @returns     Whether the objects are equivalent
     */
    public static objectsEqual(a: object, b: object): boolean {
        const akeys = Object.keys(a);
        const bkeys = Object.keys(a);

        if (akeys.length !== bkeys.length) {
            return false;
        }

        for (const key of akeys) {
            if (!Comparator.equals(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }


    /**
     * Returns if two values are of the same type.
     * {@see #typeOf}
     *
     * @param a     Object to compare
     * @param b     Object to compare
     *
     * @returns     Whether the types are equivalent
     */
    public static typesEqual(a: any, b: any) {
        return Comparator.typeOf(a) === Comparator.typeOf(b);
    }


    /**
     * Returns the type of an object or primitive.
     *
     * This method differs from the standard 'typeof' operator
     * in that it distingishes the types 'null', 'array' and
     * 'date' from other objects.
     *
     * @param a     Object or primitive
     * @returns     Type of the objects
     */
    public static typeOf(a: any): string {
        if (a === null) {
            return 'null';
        }

        if (Array.isArray(a)) {
            return 'array';
        }

        if (a instanceof Date) {
            return 'date';
        }

        return (typeof a);
    }

}
