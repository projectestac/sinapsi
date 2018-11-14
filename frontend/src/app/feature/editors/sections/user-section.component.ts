import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-user-section',
    templateUrl: 'user-section.component.html'
})
export class UserSectionComponent {

    @Input('form') form: FormGroup;

}
