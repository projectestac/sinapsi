import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorEditorComponent } from './editor';
import { AuthorsResolver } from './authors.resolver';
import { _ } from 'i18n';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    AuthorEditorComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    children: [{
        path: 'compose/:id',
        component: AuthorEditorComponent,
        data: { title: _('Author editor') }
    }, {
        path: ':id',
        resolve: { author: AuthorsResolver }
    }]
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class AuthorsRoutes {}
