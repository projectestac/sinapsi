import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared';
import { PostsModule } from 'app/feature/posts';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [
        HomeComponent
    ],

    imports: [
        SharedModule,
        PostsModule
    ],

    exports: [
        HomeComponent
    ]
})
export class HomeModule {}
