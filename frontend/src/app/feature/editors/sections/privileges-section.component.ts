import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-privileges-section',
    templateUrl: 'privileges-section.component.html'
})
export class PrivilegesSectionComponent {

    @Input('form') form: FormGroup;

}
