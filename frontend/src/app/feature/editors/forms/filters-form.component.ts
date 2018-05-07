import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-filters-form',
    templateUrl: 'filters-form.component.html'
})
export class FiltersFormComponent {

    /** Form for this component */
    @Input('formGroup') form: FormGroup;

}
