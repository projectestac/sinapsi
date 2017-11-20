import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeModule } from 'app/feature/home';
import { HomeComponent } from 'app/feature/home';
import { ErrorsModule } from 'app/feature/errors';
import { ErrorsComponent } from 'app/feature/errors';


const ROUTES: Routes = [{
    path: '',
    component: HomeComponent,
    data: {
        title: 'Sinapsi',
        description: 'News published by the Catalan educational centers'
    }
  }, {
   path: 'authors',
   loadChildren: 'app/feature/authors/authors.module#AuthorsModule',
   data: {
       title: 'Authors',
       description: 'Authors'
   }
  }, {
   path: 'catalogs',
   loadChildren: 'app/feature/catalogs/catalogs.module#CatalogsModule',
   data: {
       title: 'Catalogs',
       description: 'Synapse catalogs'
   }
  }, {
   path: 'projects',
   loadChildren: 'app/feature/projects/projects.module#ProjectsModule',
   data: {
       title: 'Projects',
       description: 'Projects'
   }
  }, {
   path: 'schools',
   loadChildren: 'app/feature/schools/schools.module#SchoolsModule',
   data: {
       title: 'Schools',
       description: 'Schools'
   }
  }, {
   path: 'synapses',
   loadChildren: 'app/feature/synapses/synapses.module#SynapsesModule',
   data: {
       title: 'Synapses',
       description: 'Synapses'
   }
  }, {
   path: 'tags',
   loadChildren: 'app/feature/tags/tags.module#TagsModule',
   data: {
       title: 'Tags',
       description: 'Tags'
   }
  }, {
   path: 'users',
   loadChildren: 'app/feature/users/users.module#UsersModule',
   data: {
       title: 'Educators',
       description: 'Educators'
   }
  }, {
    path: '**',
    component: ErrorsComponent,
    data: {
        title: 'Not Found',
        description: 'Content not found'
    }
}];


@NgModule({
  imports: [
    HomeModule,
    ErrorsModule,
    RouterModule.forRoot(ROUTES)
  ],
  
  exports: [
    RouterModule
  ]
})
export class AppRoutes {}