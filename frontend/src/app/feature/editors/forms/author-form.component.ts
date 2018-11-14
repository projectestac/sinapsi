import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-author-form',
    templateUrl: 'author-form.component.html'
})
export class AuthorFormComponent {

    @Input('formGroup') form: FormGroup;

}
