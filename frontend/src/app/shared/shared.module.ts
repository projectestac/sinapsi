import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ConcreteModule } from 'concrete';

import { BlockModule } from './block';
import { CardModule } from './card';
import { SidebarModule } from './sidebar';
import { SearchModule } from './search';
import { ShareFormModule } from './share';
import { SocialModule } from './social';
import { StateModule } from './state';

import { MomentPipe } from './moment.pipe';
import { RoleDirective } from './role.directive';


@NgModule({
    declarations: [
        RoleDirective,
        MomentPipe
    ],

    exports: [
        BlockModule,
        CardModule,
        CommonModule,
        ConcreteModule,
        EditorModule,
        FormsModule,
        SidebarModule,
        SearchModule,
        ShareFormModule,
        SocialModule,
        StateModule,
        RoleDirective,
        MomentPipe
    ]
})
export class SharedModule {}
