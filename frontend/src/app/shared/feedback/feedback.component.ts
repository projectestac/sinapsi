import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-feedback',
    templateUrl: 'feedback.component.html',
    styleUrls: [ 'feedback.component.scss' ]
})
export class FeedbackComponent {

    /**  */
    @Input() control: FormControl;


    get mustShow() {
        return this.control.touched && this.control.invalid;
    }


    /**
     * First error found.
     */
    get error(): any {
        const keys = Object.keys(this.control.errors);
        const name = keys.length ? keys[0] : null;
        const value = this.control.errors[name];

        return { name: name, value: value };
    }

}
