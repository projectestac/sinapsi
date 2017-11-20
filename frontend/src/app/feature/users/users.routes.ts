import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './details/user-details.component';
import { UsersCatalogComponent } from './catalog';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    UsersComponent,
    UsersCatalogComponent,
    UserDetailsComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: UsersComponent,
    children: [{
        path: '',
        component: UsersCatalogComponent,
        data: { title: 'Educators' }
    }, {
        path: ':slug',
        component: UserDetailsComponent
    }]
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class UsersRoutes {}