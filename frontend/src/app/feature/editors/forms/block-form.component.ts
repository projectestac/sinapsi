import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-block-form',
    templateUrl: 'block-form.component.html',
    styleUrls: [ 'admin-form.component.scss' ]
})
export class BlockFormComponent implements OnInit {

    /** Options form group control */
    public options: FormGroup;

    /** Form group control */
    @Input('formGroup') form: FormGroup;


    /**
     * Component initialization
     */
    public ngOnInit() {
        this.options = <FormGroup> this.form.get('options');
    }


    /**
     * Returns if the selected block type is one of the given types.
     *
     * @param types     True if the current type is on the array
     */
    public typeIn(types: string[]): boolean {
        const type = this.form.get('options.type');
        return type ? types.indexOf(type.value) >= 0 : false;
    }

}
