import { Component } from '@angular/core';
import { NotifyTrigger } from './toaster.animations';
import { CnToaster } from './toaster.service';


@Component({
    selector: 'cn-toaster',
    templateUrl: 'toaster.component.html',
    styleUrls: ['toaster.component.scss'],
    animations: [ NotifyTrigger ]
})
export class CnToasterComponent {

    /** Toaster service */
    public service: CnToaster;


    /**
     * Whether the component is showing a message.
     */
    get isOpen(): boolean {
        return (this.service.messages.length > 0);
    }


    /**
     * Attach a toaster service to this component.
     *
     * @param service       Toaster service
     */
    public attachService(service: CnToaster) {
        this.service = service;
    }
}
