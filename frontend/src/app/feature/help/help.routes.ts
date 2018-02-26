import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpComponent } from './help.component';
import { HelpAboutComponent } from './help-about.component';
import { HelpIndexComponent } from './help-index.component';
import { HelpSearchComponent } from './help-search.component';
import { _ } from 'i18n';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    HelpComponent,
    HelpAboutComponent,
    HelpIndexComponent,
    HelpSearchComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: HelpComponent,
    children: [{
        path: '',
        component: HelpIndexComponent,
        data: { title: _('Table of contents') }
    }, {
        path: 'about',
        component: HelpAboutComponent,
        data: { title: _('About') }
    }, {
        path: 'search',
        component: HelpSearchComponent,
        data: { title: _('Advanced search') }
    }]
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class HelpRoutes {}
