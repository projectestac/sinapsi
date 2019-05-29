import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ConcreteModule } from 'concrete';

import { AuthModule } from 'app/auth';
import { BlockModule } from './block';
import { BlockpickerModule } from './blockpicker';
import { CardModule } from './card';
import { ColorpickerModule } from './colorpicker';
import { DatepickerModule } from './datepicker';
import { ErrorsModule } from './errors';
import { FeedbackModule } from './feedback';
import { HTMLEditorModule } from './htmleditor';
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
        AuthModule,
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
