import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CnIconModule } from 'concrete/icon';
import { CnOverlayModule } from 'concrete/overlay';
import { CnMenuComponent } from './menu.component';
import { CnMenuDirective } from './menu.directive';
import { CnMenuItemComponent } from './menuitem.component';


@NgModule({
    imports: [
        CommonModule,
        CnIconModule,
        CnOverlayModule
    ],

    exports: [
        CnMenuComponent,
        CnMenuItemComponent,
        CnMenuDirective
    ],

    declarations: [
        CnMenuComponent,
        CnMenuItemComponent,
        CnMenuDirective
    ]
})
export class CnMenuModule {}
