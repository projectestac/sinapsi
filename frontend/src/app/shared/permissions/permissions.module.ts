import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoleDirective } from './role.directive';


@NgModule({
    declarations: [
        RoleDirective
    ],

    imports: [
        CommonModule
    ],

    exports: [
        RoleDirective
    ]
})
export class PermissionsModule {}
