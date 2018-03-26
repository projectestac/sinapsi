import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConcreteModule } from 'concrete';

import { BlockModule } from './block';
import { CardModule } from './card';
import { ColorpickerModule } from './colorpicker';
import { DatepickerModule } from './datepicker';
import { HTMLEditorModule } from './htmleditor';
import { SidebarModule } from './sidebar';
import { SearchModule } from './search';
import { ShareFormModule } from './share';
import { SocialModule } from './social';
import { StateModule } from './state';
import { TypeaheadModule } from './typeahead';

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
        ColorpickerModule,
        DatepickerModule,
        FormsModule,
        HTMLEditorModule,
        ReactiveFormsModule,
        SidebarModule,
        SearchModule,
        ShareFormModule,
        SocialModule,
        StateModule,
        TypeaheadModule,
        RoleDirective,
        MomentPipe
    ]
})
export class SharedModule {}
