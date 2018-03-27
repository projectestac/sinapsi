import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ShowTrigger } from './dialog.animations';
import { CnDialogEvent } from './dialog.events';
import { CnDialogConfirmed, CnDialogRefused } from './dialog.events';
import { CnDialogMessage, CnDialogType } from './dialog.types';


/**
 * A stacked dialog message.
 */
class CnStackedMessage {
    constructor(
        public message: CnDialogMessage,
        public subject: ReplaySubject<CnDialogEvent>
    ) {}
}


@Component({
    selector: 'cn-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.scss'],
    animations: [ ShowTrigger ]
})
export class CnDialogComponent {

    /** Dialog message stack */
    private stack: Array<CnStackedMessage> = [];

    /** Current dialog message */
    private message: CnDialogMessage = null;

    /** Current dialog subject */
    private subject: ReplaySubject<CnDialogEvent> = null;

    /** Prompt input box */
    @ViewChild('inputBox') inputBox;


    /**
     * Whether the component is showing a message.
     */
    get isOpen() {
        return (this.message !== null);
    }


    /**
     * Returns if a dialog message is cancellable. A message is
     * cancellable if it has a 'refuse' text or it has a type of
     * 'prompt' or 'confirmation'.
     *
     * @param message   Dialog message
     * @returns         If the message has a canel button
     */
    public isCancellable(message: CnDialogMessage): boolean {
        return (
            message['refuse'] !== undefined ||
            message['type'] === CnDialogType.PROMPT ||
            message['type'] === CnDialogType.CONFIRMATION
        );
    }


    /**
     * Shows a dialog message.
     *
     * @param message        Dialog message
     */
    public show(message: CnDialogMessage): Observable<CnDialogEvent> {
        const subject = new ReplaySubject<CnDialogEvent>(1);
        const stackable = new CnStackedMessage(message, subject);

        // Set the current message if no message is currently
        // shown or stack it for later use

        if (this.message === null) {
            this.update(message, subject);
        } else {
            this.stack.push(stackable);
        }

        return subject.asObservable().take(1);
    }


    /**
     * Refuse the current dialog message.
     */
    public refuse() {
        this.subject.next(new CnDialogRefused());
        this.showNext();
    }


    /**
     * Confirm the current dialog message.
     */
    public confirm() {
        const event = new CnDialogConfirmed();

        if (this.inputBox) {
            if (this.message.type === CnDialogType.PROMPT) {
                const element = this.inputBox.nativeElement;
                event.value = element.value;
            }
        }

        this.subject.next(event);
        this.showNext();
    }


    /**
     * Dismiss the current dialog.
     */
    private dismiss() {
        this.message = null;
        this.subject = null;
    }


    /**
     * Shows the next stacked message if any.
     */
    private showNext() {
        this.dismiss();

        if (this.stack.length > 0) {
            setTimeout(() => {
                const s = this.stack.shift();
                this.update(s.message, s.subject);
            });
        }
    }


    /**
     * Updates the shown message and subject.
     *
     * @param message   Dialog message
     * @param subject   Observable for the dialog
     */
    private update(message: CnDialogMessage, subject: ReplaySubject<any>) {
        this.message = message;
        this.subject = subject;

        // For prompt dialogs, focus the input box after the
        // dialog is shown to the user

        if (this.message.type === CnDialogType.PROMPT) {
            setTimeout(() => {
                if (this.inputBox) {
                    this.inputBox.nativeElement.value = null;
                    this.inputBox.nativeElement.focus();
                }
            }, 200);
        }
    }

}
