import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }  from '@angular/router';

import { ConcreteModule } from 'concrete';
import { SynapseModule } from 'app/synapse';
import { EmbedComponent } from 'embed/embed.component';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ConcreteModule,
        HttpModule,
        SynapseModule,
        RouterModule.forRoot([])
    ],

    declarations: [
        EmbedComponent
    ],

    bootstrap: [
        EmbedComponent
    ]
})
export class EmbedModule {}
