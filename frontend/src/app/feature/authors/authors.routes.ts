import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsResolver } from './authors.resolver';
import { _ } from 'i18n';


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    children: [{
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
