import { Component, Input, ViewChild } from '@angular/core';
import { CnDetailsComponent } from './details.component';


@Component({
    selector: 'cn-summary',
    template: '<ng-content></ng-content>'
})
export class CnSummaryComponent {

    /**
     * Component constructor
     */
    constructor(private details: CnDetailsComponent) {}

}
