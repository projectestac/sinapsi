import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    HomeComponent
];


const ROUTES: Routes = [{
    path: '',
    component: HomeComponent,
    canDeactivate: [ 'PopupRouterLinks' ]
  }, {
    path: '**',
    component: HomeComponent
}];


@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
  providers: [{
    provide: 'PopupRouterLinks',
    useValue: (component, route, state, nextState) => {
        const lang = document.documentElement.lang || 'en';
        window.open(`/${lang}${nextState.url}`, '_blank');

        return false;
    }
  }]
})
export class EmbedRoutes {}
