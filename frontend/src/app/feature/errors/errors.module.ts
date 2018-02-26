import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors.component';


@NgModule({
    declarations: [
        ErrorsComponent
    ],

    imports: [
        CommonModule,
        RouterModule
    ],

    exports: [
        ErrorsComponent
    ]
})
export class ErrorsModule {}
