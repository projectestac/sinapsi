import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


/**
 * Opens the requested routes in an new popup window. This
 * causes everything that is not the main route to open in
 * the main application instead of on the embed window.
 */
export function popupRoute() {
    return (component, route, state, nextState) => {
        window.open(nextState.url, '_blank');
        return false;
    }
}


/**
 * Points router links to the main application. This allows
 * us to use absolute paths with the router.
 */
export function rewriteRoute() {
    return '/' + (document.documentElement.lang || 'en');
}


/**
 * Routing components.
 */
export const ROUTING_COMPONENTS = [
    HomeComponent
];


/**
 * Routing module.
 */
@NgModule({
    exports: [ RouterModule ],

    imports: [ RouterModule.forRoot([{
        path: '**',
        component: HomeComponent,
        canDeactivate: [ 'PopupRoute' ]
    }])],

    providers: [{
        provide: APP_BASE_HREF,
        useFactory: rewriteRoute
    }, {
        provide: 'PopupRoute',
        useFactory: popupRoute
    }]
})
export class EmbedRoutes {}
