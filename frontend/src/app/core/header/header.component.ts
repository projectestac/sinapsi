import { Component, Input, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SessionService, SessionState } from 'app/core/auth';
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
        public session: SessionService
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
