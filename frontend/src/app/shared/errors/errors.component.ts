import { Component, Input } from '@angular/core';
import { SettingsService, SessionService } from 'app/core';


@Component({
    selector: 'app-errors',
    templateUrl: 'errors.component.html'
})
export class ErrorsComponent {

    /** Contact email */
    public email = null;

    /** Http error code */
    @Input() code = '404';


    /**
     * Component constructor.
     */
    constructor(
        public session: SessionService,
        public settings: SettingsService
    ) {
        this.email = settings.get('email');
    }

}
