import { Injectable, Injector, OnDestroy } from '@angular/core';
import { ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { Observable } from 'rxjs';

import { CnDialogMessage, CnDialogType } from './dialog.types';
import { CnDialogComponent } from './dialog.component';
import { CnDialogEvent } from './dialog.events';


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
        return this.component.show({
            type: CnDialogType.CUSTOM,
            ...message
        });
    }


    /**
     * Shows an alert dialog.
     *
     * @param message   Message string
     */
    alert(message: string): Observable<CnDialogEvent> {
        return this.open(new CnDialogMessage(
            message, CnDialogType.ALERT));
    }


    /**
     * Shows a confirmation dialog.
     *
     * @param message   Message string
     */
    confirm(message: string): Observable<CnDialogEvent> {
        return this.open(new CnDialogMessage(
            message, CnDialogType.CONFIRMATION));
    }


    /**
     * Shows a prompt dialog.
     *
     * @param message   Message string
     */
    prompt(message: string): Observable<CnDialogEvent> {
        return this.open(new CnDialogMessage(
            message, CnDialogType.PROMPT));
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
