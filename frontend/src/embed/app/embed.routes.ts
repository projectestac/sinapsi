import { NgModule } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmbedLocationStrategy } from './embed.services';
import { PopupRoute } from './embed.services';


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
        canDeactivate: [ PopupRoute ]
    }])],

    providers: [
        PopupRoute,
    {
        provide: LocationStrategy,
        useClass: EmbedLocationStrategy
    }]
})
export class EmbedRoutes {}
