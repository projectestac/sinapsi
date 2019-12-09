import { Component, HostListener, Input, Output } from '@angular/core';
import { AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { ElementRef, EventEmitter } from '@angular/core';
import { Renderer2 } from '@angular/core';


@Component({
    selector: 'cn-overlay',
    templateUrl: 'overlay.component.html',
    styleUrls: ['overlay.component.scss']
})
export class CnOverlayComponent implements AfterViewInit, OnDestroy {

    /** Whether the overlay is open */
    public isOpen = false;

    /** Whether the overlay locks the document */
    public isLocker = true;

    /** Inerted elements */
    private inerts: Array<Element> = [];

    /** Overlay root container */
    @ViewChild('overlay', { static: undefined }) overlay;

    /** Overlay content container */
    @ViewChild('content', { static: undefined }) content;

    /** Emitted on overlay dismission */
    @Output('dismiss') dismissEvent: EventEmitter<boolean>;

    /** Whether to lock the body from interaction */
    @Input('lock') set setLock(value: boolean) {
        this.isLocker = (value !== undefined && value !== false);
    }

    /** Whether the overlay is open */
    @Input('open') set setOpen(value: boolean) {
        this.isOpen = (value !== undefined && value !== false);
        this.switchOverlay(this.isOpen);
    }


    /**
     * Dismiss the dialog when the escape key is pressed.
     */
    @HostListener('window:keydown.Escape', ['$event'])
    onEscape(event: KeyboardEvent) {
        const element = this.overlay.nativeElement;

        if (this.isOpen && !element.hasAttribute('inert')) {
            this.dismiss();
            event.stopPropagation();
        }
    }


    /**
     * Component constructor.
     */
    constructor(
        private host: ElementRef,
        private renderer: Renderer2
    ) {
        this.dismissEvent = new EventEmitter<boolean>();
    }


    /**
     * Component initialization.
     */
    ngAfterViewInit() {
        this.switchOverlay(this.isOpen);
    }


    /**
     * Component clean-up.
     */
    ngOnDestroy() {
        this.removeOverlay();
    }


    /**
     * Dismiss this overlay.
     */
    public dismiss() {
        this.switchOverlay(false);
        this.dismissEvent.emit(true);
    }


    /**
     * Show or hide this overlay.
     *
     * @param open    Whether to show or hide the overlay
     */
    public switchOverlay(open: boolean) {
        const contentElement = this.content.nativeElement;

        if (open === true) {
            this.attachOverlay();
            this.populateInerts();
            setTimeout(() => contentElement.focus());
        } else {
            this.restoreInerts();
            this.detachOverlay();
        }
    }


    /**
     * Blocks body elements from user interaction.
     */
    private populateInerts() {
        const children = document.body.children;

        for (let i = 0; i < children.length; i++) {
            const element = children[i];

            if (this.mustInert(element)) {
                this.renderer.setAttribute(element, 'inert', 'inert');
                this.inerts.push(element);
            }
        }
    }


    /**
     * Restores the blocked body elements.
     */
    private restoreInerts() {
        for (let i = 0; i < this.inerts.length; i++) {
            const element = this.inerts[i];
            this.renderer.removeAttribute(element, 'inert');
        }

        this.inerts.splice(0);
    }


    /**
     * Returns if the element must be inerted.
     *
     * An element must be inerted if it does not already contain an
     * 'inert' attribute and it's not not the current overlay or an
     * script/style element.
     */
    private mustInert(element: Element) {
        return (
            this.isLocker === true &&
            element !== this.overlay.nativeElement &&
            element.hasAttribute('inert') === false &&
            element instanceof HTMLScriptElement === false &&
            element instanceof HTMLStyleElement === false
        );
    }


    /**
     * Attaches this overlay to the body element.
     */
    private attachOverlay() {
        const overlayElement = this.overlay.nativeElement;
        const bodyElement = document.body;

        this.renderer.appendChild(bodyElement, overlayElement);
    }


    /**
     * Detaches this overlay from the body element.
     */
    private detachOverlay() {
        const overlayElement = this.overlay.nativeElement;
        const hostElement = this.host.nativeElement;

        this.renderer.appendChild(hostElement, overlayElement);
    }


    /**
     * Removes this overlay from the body element.
     */
    private removeOverlay() {
        const overlayElement = this.overlay.nativeElement;
        const parentElement = overlayElement.parentNode;

        this.renderer.removeChild(parentElement, overlayElement);
    }
}
