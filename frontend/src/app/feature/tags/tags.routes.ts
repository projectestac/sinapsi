import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router'
import { TagsComponent } from './tags.component';
import { TagDetailsComponent } from './details';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    TagsComponent,
    TagDetailsComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: TagsComponent,
    children: [{
        path: ':slug',
        component: TagDetailsComponent
    }, {
        path: '',
        redirectTo: '/catalogs/tags'
    }]
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class TagsRoutes {}