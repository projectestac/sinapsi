import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-feeds-section',
    templateUrl: 'feeds-section.component.html'
})
export class FeedsSectionComponent {

    @Input('form') form: FormGroup;

}
