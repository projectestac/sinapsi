import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from '../card';
import { BlockComponent } from './block.component';


@NgModule({
    imports: [
        CommonModule,
        CardModule
    ],

    declarations: [
        BlockComponent
    ],

    exports: [
        BlockComponent
    ]
})
export class BlockModule {}
