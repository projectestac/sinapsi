import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-user-form',
    templateUrl: 'user-form.component.html',
    styleUrls: [ 'admin-form.component.scss' ]
})
export class UserFormComponent {

    @Input('formGroup') form: FormGroup;

}
