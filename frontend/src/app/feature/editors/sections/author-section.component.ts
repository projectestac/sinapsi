import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-author-section',
    templateUrl: 'author-section.component.html'
})
export class AuthorSectionComponent {

    @Input('form') form: FormGroup;

}
