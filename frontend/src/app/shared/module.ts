import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConcreteModule } from 'concrete';

import { BlockModule } from './block';
import { CardModule } from './card';
import { FooterModule } from './footer';
import { HeaderModule } from './header';
import { LocalesModule } from './locales';
import { SocialModule } from './social';
import { StateModule } from './state';

import { CatalogComponent } from './catalog/catalog.component';


@NgModule({
    declarations: [
        CatalogComponent
    ],
    
    imports: [
        CommonModule,
        RouterModule,
        ConcreteModule,
        BlockModule,
        CardModule,
        HeaderModule,
        LocalesModule,
        FooterModule,
        SocialModule,
        StateModule
    ],
    
    exports: [
        BlockModule,
        CardModule,
        HeaderModule,
        LocalesModule,
        FooterModule,
        SocialModule,
        StateModule,
        CatalogComponent
    ]
})
export class SharedModule {}
