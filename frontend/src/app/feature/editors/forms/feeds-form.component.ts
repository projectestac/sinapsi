import { Component, Input, OnInit } from '@angular/core';
import { ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SharedValidators } from 'app/shared';


/** Validators alias */
const V = Validators;

/** SharedValidators alias */
const SV = SharedValidators;

/** Form builder instance */
const fb = new FormBuilder();


@Component({
    selector: 'app-feeds-form',
    templateUrl: 'feeds-form.component.html',
    styleUrls: [ 'feeds-form.component.scss' ]
})
export class FeedsFormComponent implements OnInit {

    /** Wether this component is focused */
    private _focused = false;

    /** Feeds form array */
    public form: FormArray;

    /** Placeholder text */
    @Input() placeholder = 'http://www.example.org/feed/atom/';

    /** Feeds control as an array */
    @Input() control: FormControl;

    /** This component's input elements */
    @ViewChildren('feedBox') inputs;

    /** This component's root element */
    @ViewChild('fieldset') fieldset;


    /**
     * Component initialization.
     */
    ngOnInit() {
        this.form = this.createForm();
        this.updateCollection(this.control.value);

        // Sync the control validations with the form array

        this.control.setValidators((control) => {
            const controls = this.form.controls;
            const fails = controls.find(c => c.invalid);
            return fails ? { 'invalid': true } : null;
        });

        // Update the form array when the control value changes

        this.control.valueChanges.subscribe(values => {
            this.updateCollection(values);
        });
    }


    /**
     * Builds the form array.
     */
    private createForm(): FormArray {
        return this.createGroups(25, {
           url: [ null, [V.maxLength(512), SV.http(true)] ]
        });
    }


    /**
     * Create a FormArray for the given FormGroup configuration.
     *
     * @param n         Number of groups on the array
     * @param config    Form group configuration
     *
     * @returns         A form array of form groups
     */
    private createGroups(n: number, config: any): FormArray {
        const groups: FormGroup[] = [];

        for (let i = 0; i < n; i++) {
            groups.push(fb.group(config));
        }

        return fb.array(groups);
    }


    /**
     * Update the feeds collection.
     *
     * @param values    Feeds array
     */
    private updateCollection(values: any[]) {
        const feeds = Array.isArray(values) ? values : [];
        this.form.patchValue(feeds);
    }


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
     * Returns the first empty form group.
     *
     * @returns         Form group
     */
    public _firstEmpty(): FormGroup {
        const controls = this.form.controls;
        return <FormGroup> controls.find(c => !c.value['url']);
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

        // Update the feeds control values

        const feeds = this.control.value || [];
        const values = this.form.value;

        this.control.patchValue(values.map(feed => {
            return feeds.find(v => v.url === feed.url) || feed;
        }));
    }

}
