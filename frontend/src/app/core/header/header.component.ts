import { Component, Input, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SessionService, SessionState } from 'app/core/services';
import { SettingsService } from 'app/core/services';
import { User } from 'app/models';


@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent {

    /** Header title */
    @Input() title: string = null;

    /** Toolbar links expandable menu */
    @ViewChild('linksExp') linksExp;


    /** Available locales */
    public locales: any = {};


    /**
     * Component constructor.
     */
    constructor(
        private router: Router,
        private settings: SettingsService,
        private session: SessionService
    ) {
        this.title = settings.get('title');
        this.locales = settings.get('locales');

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.linksExp.close();
            }
        });
    }


    /**
     * Authenticated user accessor.
     */
    get currentUser(): User {
        return this.session.profile;
    }


    /**
     * Session state.
     */
    get sessionState(): SessionState {
        return this.session.state;
    }


    /**
     * Navigate to the profile of the authenticated user.
     */
    public showUserProfile(event: Event) {
        if (this.session.isActive()) {
            const author = this.currentUser.author;
            this.router.navigate(['/authors', author.id]);
        }
    }


    /**
     * Navigate to the setting editor for the authenticated user.
     */
    public showUserSettings(event: Event) {
        if (this.session.isActive()) {
            const author = this.currentUser.author;
            this.router.navigate(['/authors', 'compose', author.id]);
        }
    }


    /**
     * Shows the log in form popup window.
     */
    public showSigninForm(event: Event) {
        this.session.showSigninForm();
    }


    /**
     * Signs the authenitcated user out of the application.
     */
    public signOut(event: Event) {
        this.session.signOut();
    }

}
