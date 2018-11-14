import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsRoutes } from './authors.routes';


@NgModule({
    imports: [
        AuthorsRoutes
    ],

    providers: [
        AuthorsResolver
    ]
})
export class AuthorsModule {}
