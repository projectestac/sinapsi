import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog.component';
import { DetailsComponent } from './details.component';
import { EditorComponent } from './editor.component';


/**
 * Abstract components module.
 */
@NgModule({
    declarations: [
        CatalogComponent,
        DetailsComponent,
        EditorComponent
    ]
})
export class ComponentsModule {

    constructor() {
        throw new Error('ComponentsModule is abstract');
    }

}
