import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcreteModule } from 'concrete';
import { LocalesModule } from 'app/shared/locales';
import { FooterComponent } from './footer.component';


@NgModule({
    declarations: [
        FooterComponent
    ],
    
    imports: [
        CommonModule,
        ConcreteModule,
        LocalesModule
    ],
    
    exports: [
        FooterComponent
    ]
})
export class FooterModule {}
