import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { proxy } from 'app/core/services/store.service';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    HomeComponent
];


const ROUTES: Routes = [{
    path: '',
    component: HomeComponent,
    canDeactivate: [ 'PopupRoute' ]
  }, {
    path: '**',
    component: HomeComponent,
    canDeactivate: [ 'PopupRoute' ]
}];


@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue:  proxy('/' + (document.documentElement.lang || 'en'))
  }, {
    provide: 'PopupRoute',
    useValue: (component, route, state, nextState) => {
        window.open(`..${nextState.url}`, '_blank');
        return false;
    }
  }]
})
export class EmbedRoutes {}
