import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';
import { CnMenuComponent } from './menu.component';


@Directive({
    selector: '[cnMenu]'
})
export class CnMenuDirective implements OnInit, OnDestroy {

    /** Menu component */
    @Input('cnMenu') menu: CnMenuComponent;

    /** Unsubscribe subject */
    private unsubscribe = new Subject();


    /**
     * Directive constructor.
     */
    constructor(private elementRef: ElementRef) { }


    /**
     * Directive initialization
     */
    ngOnInit() {
        this.menu.dismissEvent
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(() => {
                const element = this.elementRef.nativeElement;
                setTimeout(() => element.focus());
            });
    }


    /**
     * Directive destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


    /**
     * Open the menu on click.
     */
    @HostListener('click') onClick() {
        this.openMenu();
    }


    /**
     * Open the menu on enter.
     */
    @HostListener('keyup.enter') onEnter() {
        const element = this.elementRef.nativeElement;

        if (!(element instanceof HTMLButtonElement)) {
            this.openMenu();
        }
    }


    /**
     * Open this directive menu.
     */
    private openMenu() {
        this.setMenuPosition();
        this.menu.open();
    }


    /**
     * Sets the menu position relative to the element to which
     * this directive is attached.
     */
    private setMenuPosition() {
        const element = this.elementRef.nativeElement;
        const wrapper = this.menu.wrapper.nativeElement;
        const elementRect = element.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();

        const left = elementRect.left;
        const top = (elementRect.top + elementRect.height);

        wrapper.style.left = `${left}px`;
        wrapper.style.top = `${top}px`;
        wrapper.style.position = 'fixed';
    }
}
