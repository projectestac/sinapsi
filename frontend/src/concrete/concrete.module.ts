import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CnDialog } from './dialog';
import { CnToaster } from './toaster';
import { CnBreadcrumbModule } from './breadcrumb';
import { CnDetailsModule } from './details';
import { CnDialogModule } from './dialog';
import { CnExpandableModule } from './expandable';
import { CnIconModule } from './icon';
import { CnMenuModule } from './menu';
import { CnOverlayModule } from './overlay';
import { CnPaginationModule } from './pagination';
import { CnPickerModule } from './picker';
import { CnSearchboxModule } from './searchbox';
import { CnSortableModule } from './sortable';
import { CnSpinnerModule } from './spinner';
import { CnTabsModule } from './tabs';
import { CnToasterModule } from './toaster';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],

    exports: [
        CnBreadcrumbModule,
        CnDetailsModule,
        CnDialogModule,
        CnExpandableModule,
        CnIconModule,
        CnMenuModule,
        CnOverlayModule,
        CnPaginationModule,
        CnPickerModule,
        CnSearchboxModule,
        CnSortableModule,
        CnSpinnerModule,
        CnTabsModule,
        CnToasterModule
    ]
})
export class ConcreteModule {

    /**
     * Root providers.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: ConcreteModule,
            providers: [ CnDialog, CnToaster ]
        };
    }
}
