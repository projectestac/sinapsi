import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConcreteModule } from 'concrete';

import { LocalesModule } from 'app/core/locales';
import { FooterComponent } from './footer.component';


@NgModule({
    declarations: [
        FooterComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        ConcreteModule,
        LocalesModule
    ],

    exports: [
        FooterComponent
    ]
})
export class FooterModule {}
