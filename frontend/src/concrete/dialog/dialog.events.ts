/** Dialog event type */
export type CnDialogEvent = (
    CnDialogConfirmed |
    CnDialogRefused
);


/**
 * Triggered when a dialog is confirmed.
 */
export class CnDialogConfirmed {
    get confirmed() {
        return true;
    }
}


/**
 * Triggered when a dialog is refused.
 */
export class CnDialogRefused {
    get confirmed() {
        return false;
    }
}
