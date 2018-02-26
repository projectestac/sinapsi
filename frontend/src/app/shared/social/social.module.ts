import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CnMenuModule } from 'concrete/menu';

import { SocialLinksComponent } from './social-links.component';
import { SocialMenuComponent } from './social-menu.component';
import { SocialService } from './social.service';


@NgModule({
    declarations: [
        SocialLinksComponent,
        SocialMenuComponent
    ],
    
    imports: [
        CommonModule,
        CnMenuModule
    ],
    
    exports: [
        SocialLinksComponent,
        SocialMenuComponent
    ],
    
    providers: [
        SocialService
    ]
})
export class SocialModule {}
