import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConcreteModule } from 'concrete';
import { ErrorsComponent } from './errors.component';


@NgModule({
    declarations: [
        ErrorsComponent
    ],

    imports: [
        CommonModule,
        ConcreteModule,
        RouterModule
    ],

    exports: [
        ErrorsComponent
    ]
})
export class ErrorsModule {}
