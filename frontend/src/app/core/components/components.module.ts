import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';


/**
 * Abstract components module.
 */
@NgModule({
    declarations: [
        CatalogComponent
    ]
})
export class ComponentsModule {

    constructor() {
        throw new Error('ComponentsModule is abstract');
    }

}
