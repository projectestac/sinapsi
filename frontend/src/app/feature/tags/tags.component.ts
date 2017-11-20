import { Component } from "@angular/core";
import { CnStore } from "concrete/core";


@Component({
    template: '<router-outlet></router-outlet>',
    providers: [ CnStore ]
})
export class TagsComponent {}
