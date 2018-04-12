import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-feedback',
    templateUrl: 'feedback.component.html',
    styleUrls: [ 'feedback.component.scss' ]
})
export class FeedbackComponent {

    /** Form control to validate */
    @Input() control: FormControl;


    /**
     * If an error message must be shown for the control.
     *
     * @returns     If the control was touched and is invalid
     */
    get mustShowError(): boolean {
        return this.control.touched && this.control.invalid;
    }


    /**
     * First error found on the control.
     *
     * @returns     Error state
     */
    get error(): any {
        const keys = Object.keys(this.control.errors);
        const name = keys.length ? keys[0] : null;
        const value = this.control.errors[name];

        return { name: name, value: value };
    }

}
