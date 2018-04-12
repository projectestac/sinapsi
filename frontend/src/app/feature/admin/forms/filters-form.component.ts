import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-filters-form',
    templateUrl: 'filters-form.component.html',
    styleUrls: [ 'admin-form.component.scss' ]
})
export class FiltersFormComponent {

    @Input('formGroup') form: FormGroup;

}
