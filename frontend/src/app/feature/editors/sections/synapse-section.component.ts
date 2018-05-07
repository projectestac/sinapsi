import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-synapse-section',
    templateUrl: 'synapse-section.component.html'
})
export class SynapseSectionComponent {

    @Input('form') form: FormGroup;

}
