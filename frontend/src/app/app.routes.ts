import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsModule } from 'app/shared/errors';
import { ErrorsComponent } from 'app/shared/errors';

import { HomeModule } from 'app/feature/home';
import { HomeComponent } from 'app/feature/home';
import { environment } from 'environments/environment';
import { _ } from 'i18n';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    HomeComponent,
    ErrorsComponent
];


const ROUTES: Routes = [{
    path: '',
    component: HomeComponent,
    data: { title: environment['title'] }
  }, {
    path: 'authors',
    loadChildren: 'app/feature/authors/authors.module#AuthorsModule'
  }, {
    path: 'catalogs',
    loadChildren: 'app/feature/catalogs/catalogs.module#CatalogsModule',
    data: { title: _('Catalogs') }
  }, {
    path: 'editors',
    loadChildren: 'app/feature/editors/editors.module#EditorsModule'
  }, {
    path: 'help',
    loadChildren: 'app/feature/help/help.module#HelpModule',
    data: { title: _('Help') }
  }, {
    path: 'projects',
    loadChildren: 'app/feature/projects/projects.module#ProjectsModule',
    data: { title: _('Projects') }
  }, {
    path: 'schools',
    loadChildren: 'app/feature/schools/schools.module#SchoolsModule',
    data: { title: _('Schools') }
  }, {
    path: 'synapses',
    loadChildren: 'app/feature/synapses/synapses.module#SynapsesModule',
    data: { title: _('Synapses') }
  }, {
    path: 'tags',
    loadChildren: 'app/feature/tags/tags.module#TagsModule',
    data: { title: _('Tags') }
  }, {
    path: 'users',
    loadChildren: 'app/feature/users/users.module#UsersModule',
    data: { title: _('Educators') }
  }, {
    path: '**',
    component: ErrorsComponent,
    data: { title: 'Not Found' }
}];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    HomeModule,
    ErrorsModule
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutes {}
