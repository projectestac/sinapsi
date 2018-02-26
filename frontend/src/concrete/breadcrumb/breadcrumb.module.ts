import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CnBreadcrumbComponent } from './breadcrumb.component';
import { CnBreadcrumbService } from './breadcrumb.service';


@NgModule({
    declarations: [
        CnBreadcrumbComponent
    ],

    imports: [
        CommonModule,
        RouterModule
    ],

    exports: [
        CnBreadcrumbComponent
    ],

    providers: [
        CnBreadcrumbService
    ]
})
export class CnBreadcrumbModule {}
