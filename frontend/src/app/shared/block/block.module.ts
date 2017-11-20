import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card';
import { BlockComponent } from './block.component';


@NgModule({
    declarations: [
        BlockComponent
    ],
    
    imports: [
        CommonModule,
        CardModule
    ],
    
    exports: [
        BlockComponent
    ]
})
export class BlockModule {}
