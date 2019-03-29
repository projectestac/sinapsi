import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthorType } from 'app/models';


@Component({
    selector: 'app-author-form',
    templateUrl: 'author-form.component.html'
})
export class AuthorFormComponent {

    @Input('formGroup') form: FormGroup;


    /**
     *
     */
    public hasType(type: AuthorType): boolean {
        const control = this.form.get('type');
        return type == control.value;
    }

}
