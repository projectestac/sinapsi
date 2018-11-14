import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConcreteModule } from 'concrete';

import { LocalesModule } from 'app/core/locales';
import { HeaderComponent } from './header.component';


@NgModule({
    declarations: [
        HeaderComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        ConcreteModule,
        LocalesModule
    ],

    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {}
