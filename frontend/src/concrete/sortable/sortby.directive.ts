import { Subject } from 'rxjs/Subject';
import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { ElementRef, HostListener, Renderer2 } from '@angular/core';

import { CnSortService } from './sort.service';


@Directive({
    selector: '[cnSortBy]'
})
export class CnSortByDirective implements OnInit, OnDestroy {

    /** Sort key for the element */
    @Input('cnSortBy') key: string;

    /** Unsubscribe subject */
    private unsubscribe = new Subject();

    /** HTML element */
    private element: Element;


    /**
     * Directive constructor.
     */
    constructor(
        private elemRef: ElementRef,
        private renderer: Renderer2,
        private sortService: CnSortService
    ) {
        this.element = this.elemRef.nativeElement;
    }


    /**
     * Directive initialization.
     */
    ngOnInit() {
        this.renderer.addClass(this.element, 'sortable');

        // Ensure the element is focusable

        if (this.element.hasAttribute('tabindex') === false) {
            this.renderer.setAttribute(this.element, 'tabindex', '0');
        }

        // Update the element style when the sort changes

        this.sortService.events
            .takeUntil(this.unsubscribe)
            .subscribe(event => this.updateElement());
    }


    /**
     * Directive destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


    /**
     * Update the sort parameters on click.
     */
    @HostListener('click') onClick() {
        this.sortService.sortBy(this.key);
    }


    /**
     * Update the sort parameters on keyup.
     */
    @HostListener('keyup.enter') onEnterUp() {
        this.sortService.sortBy(this.key);
    }


    /**
     * Update the element attributes and classes.
     */
    private updateElement() {
        const element = this.element;
        const renderer = this.renderer;

        const index = this.sortService.indexOf(this.key);
        const ascending = this.sortService.isAscending(this.key);
        const orderName = this.sortService.orderOf(this.key);

        if (index === 0) {
            renderer.setAttribute(element, 'aria-sort', orderName);
        } else {
            renderer.removeAttribute(element, 'aria-sort');
        }

        if (index < 0) {
            renderer.removeClass(element, 'sort-asc');
            renderer.removeClass(element, 'sort-desc');
        } else if (ascending === true) {
            renderer.addClass(element, 'sort-asc');
            renderer.removeClass(element, 'sort-desc');
        } else {
            renderer.addClass(element, 'sort-desc');
            renderer.removeClass(element, 'sort-asc');
        }
    }
}
