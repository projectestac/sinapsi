import { Component, Input, ViewChild } from '@angular/core';
import { CnTabsComponent } from './tabs.component';


@Component({
    selector: 'cn-tabbox',
    templateUrl: 'tabbox.component.html'
})
export class CnTabBoxComponent {

    /**
     * Component constructor
     */
    constructor(
        private tabs: CnTabsComponent
    ) {}
}
