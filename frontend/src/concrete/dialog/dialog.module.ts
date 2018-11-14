import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CnOverlayModule } from 'concrete/overlay';
import { CnDialogComponent } from './dialog.component';
import { CnDialog } from './dialog.service';


@NgModule({
    imports: [
        CommonModule,
        CnOverlayModule
    ],

    declarations: [
        CnDialogComponent
    ],

    entryComponents: [
        CnDialogComponent
    ]
})
export class CnDialogModule {}
