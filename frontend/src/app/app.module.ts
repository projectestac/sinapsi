import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragulaModule } from 'ng2-dragula';
import { ConcreteModule } from 'concrete';

import { AppComponent } from 'app/app.component';
import { AppPolicies } from 'app/app.policies';
import { AppRoutes } from 'app/app.routes';
import { CoreModule } from 'app/core';


@NgModule({
    declarations: [
        AppComponent
    ],

    imports: [
        AppPolicies,
        AppRoutes,
        BrowserAnimationsModule,
        BrowserModule,
        ConcreteModule.forRoot(),
        CoreModule.forRoot(),
        DragulaModule,
        HttpModule
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
