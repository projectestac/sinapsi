import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CnTabBoxComponent } from './tabbox.component';
import { CnTabItemComponent } from './tabitem.component';
import { CnTabsComponent } from './tabs.component';


@NgModule({
    declarations: [
        CnTabBoxComponent,
        CnTabItemComponent,
        CnTabsComponent
    ],

    imports: [
        CommonModule
    ],

    exports: [
        CnTabBoxComponent,
        CnTabItemComponent,
        CnTabsComponent
    ]
})
export class CnTabsModule {}
