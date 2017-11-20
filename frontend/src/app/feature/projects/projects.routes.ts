import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './details';
import { ProjectsCatalogComponent } from './catalog';


/**
 * Routing components
 */
export const ROUTING_COMPONENTS = [
    ProjectsComponent,
    ProjectsCatalogComponent,
    ProjectDetailsComponent
];


/**
 * Module routes
 */
export const ROUTES: Routes = [{
    path: '',
    component: ProjectsComponent,
    children: [{
        path: '',
        component: ProjectsCatalogComponent,
        data: { title: 'Projects' }
    }, {
        path: ':slug',
        component: ProjectDetailsComponent
    }]
}];


/**
 * Routing module
 */
@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class ProjectsRoutes {}