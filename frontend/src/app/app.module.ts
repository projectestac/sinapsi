import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutes } from 'app/app.routes';
import { AppComponent } from 'app/app.component';
import { ConcreteModule } from 'concrete';
import { SharedModule } from 'app/shared';


@NgModule({
    imports: [
        AppRoutes,
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
        ConcreteModule,
        SharedModule
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
