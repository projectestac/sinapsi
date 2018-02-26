import { Injectable, Injector, OnDestroy } from '@angular/core';
import { ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ApplicationRef, EmbeddedViewRef } from '@angular/core';
import { CnToasterComponent } from './toaster.component';


/** Toast message types */
export const enum CnToasterType {
    SUCCESS =   'success',
    DANGER =    'danger',
    WARNING =   'warning',
    INFO =      'info'
};


/**
 * Represents a toast message.
 */
export interface CnToastMessage {
    text: string;
    type: CnToasterType;
    delay?: number
}


/**
 * Shows toast messages.
 */
@Injectable()
export class CnToaster implements OnDestroy {

    /** Success message dismiss delay */
    static readonly SUCCESS_DELAY = 5000;

    /** Active toasts */
    public messages: Array<CnToastMessage> = [];

    /** Toaster component reference */
    private componentRef: ComponentRef<CnToasterComponent>;


    /**
     * Service constructor.
     */
    constructor(
        private injector: Injector,
        private app: ApplicationRef,
        private resolver: ComponentFactoryResolver
    ) {
        this.componentRef = this.attachComponent();
    }


    /**
     * Destroy the toaster component.
     */
    ngOnDestroy() {
        this.componentRef.destroy();
    }


    /**
     * Shows a success toast.
     *
     * @param text      Toast text
     * @returns         A new CnToast object
     */
    success(text: string): CnToastMessage {
        return this.toast(<CnToastMessage> {
            text: text,
            type: CnToasterType.SUCCESS,
            delay: CnToaster.SUCCESS_DELAY
        });
    }


    /**
     * Shows an informational toast.
     *
     * @param text      Toast text
     * @returns         A new CnToast object
     */
    info(text: string): CnToastMessage {
        return this.toast(<CnToastMessage> {
            text: text,
            type: CnToasterType.INFO,
            delay: CnToaster.SUCCESS_DELAY
        });
    }


    /**
     * Shows an error toast.
     *
     * @param text      Toast text
     * @returns         A new CnToast object
     */
    error(text: string): CnToastMessage {
        return this.toast(<CnToastMessage> {
            text: text,
            type: CnToasterType.DANGER
        });
    }


    /**
     * Shows an informational toast.
     *
     * @param text      Toast text
     * @returns         A new CnToast object
     */
    warning(text: string): CnToastMessage {
        return this.toast(<CnToastMessage> {
            text: text,
            type: CnToasterType.WARNING
        });
    }


    /**
     * Display a toast message.
     *
     * @param message   Toast message object
     * @returns         Toast object
     */
    toast(message: CnToastMessage): CnToastMessage {
        this.messages.unshift(message);

        if (message.delay && message.delay > 0) {
            setTimeout(
                () => this.dismiss(message),
                message.delay
            );
        }

        return message;
    }


    /**
     * Dismiss a toast immediatelly.
     *
     * @param message     Toast message to dismiss
     */
    dismiss(message: CnToastMessage) {
        const index = this.messages.indexOf(message);
        if (index >= 0) { this.messages.splice(index, 1); }
    }


    /**
     * Dismiss all the toasts.
     */
    clear() {
        this.messages.splice(0);
    }


    /**
     * Attach a new toaster component to the document body.
     *
     * @returns         Created component reference
     */
    private attachComponent(): ComponentRef<CnToasterComponent> {
        const factory = this.resolver.resolveComponentFactory(CnToasterComponent);
        const componentRef = factory.create(this.injector);
        const hostView = <EmbeddedViewRef<any>> componentRef.hostView;

        componentRef.instance.attachService(this);
        document.body.appendChild(hostView.rootNodes[0]);
        hostView.detectChanges();

        this.app.attachView(hostView);

        return componentRef;
    }
}
