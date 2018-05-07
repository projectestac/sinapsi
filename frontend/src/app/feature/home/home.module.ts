import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { SharedModule } from 'app/shared';
import { PostsModule } from 'app/feature/posts';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [
        HomeComponent
    ],

    imports: [
        RouterModule,
        SharedModule,
        PostsModule
    ],

    exports: [
        HomeComponent
    ]
})
export class HomeModule {}
