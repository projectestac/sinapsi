import { Component, Input } from '@angular/core';
import { SessionService, SessionState } from 'app/core';
import { environment } from 'environments/environment';


@Component({
    selector: 'app-errors',
    templateUrl: 'errors.component.html'
})
export class ErrorsComponent {

    /** Contact email */
    public email = environment['email'];

    /** Http error code */
    @Input() code = '404';


    /**
     * Component constructor.
     */
    constructor(
        private session: SessionService
    ) {}


    /**
     * Shows the log in popup window.
     */
    public showSignin() {
        this.session.showSigninForm();
    }

}
