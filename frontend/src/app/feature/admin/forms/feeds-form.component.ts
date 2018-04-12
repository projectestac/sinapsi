import { Component, Input } from '@angular/core';
import { ViewChild, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-feeds-form',
    templateUrl: 'feeds-form.component.html',
    styleUrls: [
        'admin-form.component.scss',
        'feeds-form.component.scss'
    ]
})
export class FeedsFormComponent {

    /** Wether this component is focused */
    private _focused = false;

    /** Form for this component */
    @Input('formGroup') form: FormGroup;

    /** This component's input elements */
    @ViewChildren('feedBox') inputs;

    /** This component's root element */
    @ViewChild('fieldset') fieldset;


    /**
     * Returns the state of the form.
     *
     * @returns         Form state
     */
    public state(): any {
        return {
            focused: this._focused
        };
    }


    /**
     * Returns the state of a child form group.
     *
     * @param group     Form group
     * @returns         Form group state
     */
    public groupState(group: FormGroup): any {
        return {
            empty: !group.get('url').value,
            invalid: group.invalid
        }
    }


    /**
     * Focus the previous input element.
     */
    public focusPrevious() {
        const active = document.activeElement;
        const input = this.inputs.find((e, i, a) => {
            const next = a[i + 1] && a[i + 1].nativeElement;
            return (next === active);
        });

        if (typeof input === 'object') {
            input.nativeElement.focus();
        }
    }


    /**
     * Focus the next input element.
     */
    public focusNext() {
        const active = document.activeElement;
        const input = this.inputs.find((e, i, a) => {
            const previous = a[i - 1] && a[i - 1].nativeElement;
            return (previous === active);
        });

        if (typeof input === 'object') {
            input.nativeElement.focus();
        }
    }


    /**
     * Focus the first input element.
     */
    public focusFirst() {
        if (typeof this.inputs['first'] === 'object') {
            this.inputs.first.nativeElement.focus();
        }
    }


    /**
     * Focus the last input element.
     */
    public focusLast() {
        if (typeof this.inputs['last'] === 'object') {
            this.inputs.last.nativeElement.focus();
        }
    }


    /**
     * Fired when a child input element is focused.
     *
     * @param group     Form group for the focused input
     */
    public _onGroupFocus(group: FormGroup) {
        this._focused = true;
    }


    /**
     * Fired when a child input element is blured.
     *
     * @param group     Form group for the input that
     *                  lost the focus
     */
    public _onGroupBlur(group: FormGroup) {
        // Set the component as blured when all the elements
        // lost the focus

        const root = this.fieldset.nativeElement;

        if (!root.contains(document.activeElement)) {
            this._focused = false;
        }

        // Remove extra spaces from the element's URL

        const control = group.get('url');
        const value = control.value;

        if (typeof value === 'string') {
            const trimmed = value.trim();

            if (trimmed.length < 1) {
                control.setValue(null);
            } else if (trimmed.length < value.length) {
                control.setValue(trimmed);
            }
        }
    }

}
