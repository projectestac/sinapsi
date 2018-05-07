import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-school-form',
    templateUrl: 'school-form.component.html'
})
export class SchoolFormComponent {

    @Input('formGroup') form: FormGroup;

}
