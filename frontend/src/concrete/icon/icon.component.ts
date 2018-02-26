import { Component, Input } from '@angular/core';


/**
 * Icon component.
 */
@Component({
    selector: 'cn-icon',
    templateUrl: 'icon.component.html'
})
export class CnIconComponent {

    /** Icon name */
    @Input() value = 'fw';

}
