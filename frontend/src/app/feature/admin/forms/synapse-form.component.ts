import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-synapse-form',
    templateUrl: 'synapse-form.component.html',
    styleUrls: [ 'admin-form.component.scss' ]
})
export class SynapseFormComponent {

    @Input('formGroup') form: FormGroup;

}
