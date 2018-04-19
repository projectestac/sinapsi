import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConcreteModule } from 'concrete';

import { BlockModule } from './block';
import { BlockpickerModule } from './blockpicker';
import { CardModule } from './card';
import { ColorpickerModule } from './colorpicker';
import { DatepickerModule } from './datepicker';
import { ErrorsModule } from './errors';
import { FeedbackModule } from './feedback';
import { HTMLEditorModule } from './htmleditor';
import { PermissionsModule } from './permissions';
import { SidebarModule } from './sidebar';
import { SearchModule } from './search';
import { ShareFormModule } from './share';
import { SocialModule } from './social';
import { SourceEditorModule } from './sourceeditor';
import { StateModule } from './state';
import { TypeaheadModule } from './typeahead';

import { MomentPipe } from './moment.pipe';
import { StripTagsPipe } from './striptags.pipe';


@NgModule({
    declarations: [
        MomentPipe,
        StripTagsPipe
    ],

    exports: [
        BlockModule,
        BlockpickerModule,
        CardModule,
        CommonModule,
        ConcreteModule,
        ColorpickerModule,
        DatepickerModule,
        ErrorsModule,
        FeedbackModule,
        FormsModule,
        HTMLEditorModule,
        PermissionsModule,
        ReactiveFormsModule,
        SidebarModule,
        SearchModule,
        ShareFormModule,
        SocialModule,
        SourceEditorModule,
        StateModule,
        TypeaheadModule,
        MomentPipe,
        StripTagsPipe
    ]
})
export class SharedModule {}
