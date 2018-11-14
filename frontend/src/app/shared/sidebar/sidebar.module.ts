import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { CnIconModule } from 'concrete/icon';

import { BlockModule } from '../block';
import { SidebarComponent } from './sidebar.component';


@NgModule({
    imports: [
        CommonModule,
        BlockModule,
        CnIconModule,
        DragulaModule
    ],

    declarations: [
        SidebarComponent
    ],

    exports: [
        SidebarComponent
    ]
})
export class SidebarModule {}
