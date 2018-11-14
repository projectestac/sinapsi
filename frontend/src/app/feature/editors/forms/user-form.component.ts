import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-user-form',
    templateUrl: 'user-form.component.html'
})
export class UserFormComponent {

    @Input('formGroup') form: FormGroup;

}
