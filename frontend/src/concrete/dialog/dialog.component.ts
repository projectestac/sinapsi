import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ShowTrigger } from './dialog.animations';
import { CnDialogEvent } from './dialog.events';
import { CnDialogConfirmed, CnDialogRefused } from './dialog.events';
import { CnDialogMessage } from './dialog.service';


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


    /**
     * Whether the component is showing a message.
     */
    get isOpen() {
        return (this.message !== null);
    }


    /**
     * Shows a dialog message.
     *
     * @param message        Dialog message
     */
    public show(message: CnDialogMessage): Observable<CnDialogEvent> {
        const subject = new ReplaySubject<CnDialogEvent>(1);
        const stackable = new CnStackedMessage(message, subject);

        if (this.message === null) {
            this.message = message;
            this.subject = subject;
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
        this.subject.next(new CnDialogConfirmed());
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
                const stackable = this.stack.pop();
                this.message = stackable.message;
                this.subject = stackable.subject;
            });
        }
    }
}
