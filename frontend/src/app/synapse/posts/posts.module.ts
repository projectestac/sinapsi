import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared';
import { ConcreteModule } from 'concrete';

import { SyCommentsModule } from 'app/synapse/comments';
import { SyShareFormModule } from '../share-form';
import { SyAreaSelectModule } from '../area-select';
import { SyViewPickerModule } from '../view-picker';

import { PostComponent } from './post.component';
import { PostsCatalogComponent } from './posts-catalog.component';


@NgModule({
    declarations: [
        PostsCatalogComponent,
        PostComponent
    ],
    
    imports: [
        CommonModule,
        RouterModule,
        ConcreteModule,
        SharedModule,
        SyCommentsModule,
        SyAreaSelectModule,
        SyViewPickerModule,
        SyShareFormModule
    ],
    
    exports: [
        PostsCatalogComponent,
        PostComponent
    ]
})
export class PostsModule {}
