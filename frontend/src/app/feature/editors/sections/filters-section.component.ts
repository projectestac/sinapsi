import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-filters-section',
    templateUrl: 'filters-section.component.html'
})
export class FiltersSectionComponent {

    @Input('form') form: FormGroup;

}
