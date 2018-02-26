import { Directive, Input, OnInit } from '@angular/core';
import { ElementRef, HostListener, Renderer2 } from '@angular/core';

import { CnExpandableComponent } from './expandable.component';


@Directive({
    selector: '[cnExpandable]'
})
export class CnExpandableDirective implements OnInit {

    /** Expandable component */
    @Input('cnExpandable') expandable: CnExpandableComponent;


    /**
     * Directive constructor.
     */
    constructor(
        private renderer: Renderer2,
        private elementRef: ElementRef
    ) {}


    /**
     * Directive initialization.
     */
    ngOnInit() {
        this.updateAttributes();
    }


    /**
     * Toggle the expandable on click.
     */
    @HostListener('click') onClick() {
        this.toggleExpandable();
    }


    /**
     * Toggle the expandable on enter.
     */
    @HostListener('keyup.enter') onEnter(event: Event) {
        const element = this.elementRef.nativeElement;

        if (!(element instanceof HTMLButtonElement)) {
            this.toggleExpandable();
        }
    }


    /**
     * Toggle this directive's expandable.
     */
    private toggleExpandable() {
        this.expandable.toggle();
        this.updateAttributes();
    }


    /**
     * Update the attributes of the element to which this
     * directive is attached.
     */
    private updateAttributes() {
        const uid = this.expandable.uid;
        const expanded = (this.expandable.state === 'open').toString();
        const element = this.elementRef.nativeElement;

        this.renderer.setAttribute(element, 'aria-controls', uid);
        this.renderer.setAttribute(element, 'aria-expanded', expanded);
    }
}
