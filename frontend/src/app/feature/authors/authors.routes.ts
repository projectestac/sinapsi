import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AuthorsResolver } from './authors.resolver';


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: ':id',
    resolve: {
        author: AuthorsResolver
    }
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class AuthorsRoutes {}