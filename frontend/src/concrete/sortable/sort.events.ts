/** Sort event type */
export type CnSortEvent = (
    CnKeySorted |
    CnSortChanged
);


/**
 * Event triggered when a key sort changes.
 */
export class CnKeySorted {
    constructor(
        public key: string,
        public values: Array<string>
    ) {}
};


/**
 * Event triggered when the sort changes.
 */
export class CnSortChanged {
    constructor(
        public values: Array<string>
    ) {}
};
