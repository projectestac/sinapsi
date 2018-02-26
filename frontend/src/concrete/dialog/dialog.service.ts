import { Injectable, Injector, OnDestroy } from '@angular/core';
import { ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CnDialogComponent } from './dialog.component';
import { CnDialogEvent } from './dialog.events';


/**
 * Represents a dialog message.
 */
export class CnDialogMessage {
    constructor(
        public text: string,
        public confirm?: string,
        public refuse?: string,
        public title?: string
    ) {}
}


/**
 * Shows toast messages.
 */
@Injectable()
export class CnDialog implements OnDestroy {

    /** Dialog component instance */
    private component: CnDialogComponent;

    /** Dialog component reference */
    private componentRef: ComponentRef<CnDialogComponent>;


    /**
     * Service constructor.
     */
    constructor(
        private app: ApplicationRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver
    ) {
        this.componentRef = this.attachComponent();
        this.component = this.componentRef.instance;
    }


    /**
     * Destroy the dialog component.
     */
    ngOnDestroy() {
        this.componentRef.destroy();
    }


    /**
     * Shows a modal dialog.
     *
     * @param dialog    Dialog message
     * @returns         Observable
     */
    open(message: CnDialogMessage): Observable<CnDialogEvent> {
        return this.component.show(message);
    }


    /**
     * Shows a confirmation dialog.
     *
     * @param message   Message string
     */
    confirm(message: string): Observable<CnDialogEvent> {
        return this.open(new CnDialogMessage(message));
    }


    /**
     * Attach a new dialog component to the document body.
     *
     * @returns         Created component reference
     */
    private attachComponent(): ComponentRef<CnDialogComponent> {
        const factory = this.resolver.resolveComponentFactory(CnDialogComponent);
        const componentRef = factory.create(this.injector);
        const hostView = <EmbeddedViewRef<any>> componentRef.hostView;

        document.body.appendChild(hostView.rootNodes[0]);
        hostView.detectChanges();

        this.app.attachView(hostView);

        return componentRef;
    }
}
