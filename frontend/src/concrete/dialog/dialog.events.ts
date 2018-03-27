/** Dialog event type */
export type CnDialogEvent = (
    CnDialogConfirmed |
    CnDialogRefused
);


/**
 * Triggered when a dialog is confirmed.
 */
export class CnDialogConfirmed {
    constructor(
        public confirmed: boolean = true,
        public value: string = null
    ) {}
}


/**
 * Triggered when a dialog is refused.
 */
export class CnDialogRefused {
    constructor(
        public confirmed: boolean = false,
        public value: string = null
    ) {}
}
