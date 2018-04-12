import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-project-form',
    templateUrl: 'project-form.component.html',
    styleUrls: [ 'admin-form.component.scss' ]
})
export class ProjectFormComponent {

    @Input('formGroup') form: FormGroup;

}
