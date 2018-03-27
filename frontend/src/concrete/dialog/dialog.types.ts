/**
 * Dialog types.
 */
export enum CnDialogType {
    ALERT = 'alert',
    CUSTOM = 'custom',
    CONFIRMATION = 'confirm',
    PROMPT = 'prompt'
}


/**
 * Represents a dialog message.
 */
export class CnDialogMessage {
    constructor(
        public text: string,
        public type?: string,
        public confirm?: string,
        public refuse?: string,
        public prompt?: string,
        public title?: string
    ) {}
}
