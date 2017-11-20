import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConcreteModule } from 'concrete';

import { SyAreaSelectModule } from './area-select';
import { SyViewPickerModule } from './view-picker';

import { SyCommentsModule } from './comments';
import { PostsModule } from './posts';
import { SySearchFormModule } from './search-form';
import { SyShareFormModule } from './share-form';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ConcreteModule,
        SyAreaSelectModule,
        SyViewPickerModule,
        SyCommentsModule,
        PostsModule,
        SySearchFormModule,
        SyShareFormModule
    ],
    
    exports: [
        SyAreaSelectModule,
        SyViewPickerModule,
        SyCommentsModule,
        PostsModule,
        SySearchFormModule,
        SyShareFormModule
    ]
})
export class SynapseModule {}
