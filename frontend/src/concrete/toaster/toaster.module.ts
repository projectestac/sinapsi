import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CnOverlayModule } from 'concrete/overlay';
import { CnToasterComponent } from './toaster.component';
import { CnToaster } from './toaster.service';


@NgModule({
    declarations: [
        CnToasterComponent
    ],

    imports: [
        CommonModule,
        CnOverlayModule
    ],

    entryComponents: [
        CnToasterComponent
    ]
})
export class CnToasterModule {}
