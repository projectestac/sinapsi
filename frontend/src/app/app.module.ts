import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
        HttpClientModule
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
