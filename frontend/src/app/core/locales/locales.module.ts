import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalesComponent } from './locales.component';

@NgModule({
    declarations: [ LocalesComponent ],
    imports: [ CommonModule ],
    exports: [ LocalesComponent ]
})
export class LocalesModule {}
