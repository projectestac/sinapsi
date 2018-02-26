import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersCatalogComponent } from './catalog';
import { UserDetailsComponent } from './details/user-details.component';
import { UsersComponent } from './users.component';
import { _ } from 'i18n';


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
        data: { title: _('Educators') }
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
