import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-project-form',
    templateUrl: 'project-form.component.html'
})
export class ProjectFormComponent {

    @Input('formGroup') form: FormGroup;

}
