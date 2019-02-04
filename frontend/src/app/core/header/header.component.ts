import { Component, Input, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SessionService } from 'app/core/auth';
import { SettingsService } from 'app/core/services';


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent {

    /** Toolbar links expandable menu */
    @ViewChild('linksExp') linksExp;


    /**
     * Component constructor.
     */
    constructor(
        private router: Router,
        public session: SessionService
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.linksExp.close();
            }
        });
    }


    /**
     * Navigate to the profile of the authenticated user.
     */
    public showUserProfile(event: Event) {
        if (this.session.check()) {
            const author = this.session.user.author;
            this.router.navigate(['/authors', author.id]);
        }
    }


    /**
     * Navigate to the setting editor for the authenticated user.
     */
    public showUserSettings(event: Event) {
        if (this.session.check()) {
            const author = this.session.user.author;
            this.router.navigate(['/editors', 'authors', author.id]);
        }
    }

}
