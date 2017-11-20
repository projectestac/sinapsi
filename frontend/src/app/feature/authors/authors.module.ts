import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared';
import { ConcreteModule } from 'concrete';

import { AuthorsRoutes } from './authors.routes';
import { AuthorsResolver } from './authors.resolver';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ConcreteModule,
        AuthorsRoutes
    ],
    
    providers: [
        AuthorsResolver
    ]
})
export class AuthorsModule { }
