import { Observable, Subject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CnToaster } from 'concrete/toaster';

import { UserChanged } from './session.events';
import { User } from 'app/models';
import { _ } from 'i18n';


/** Possible authentication states */
export const enum SessionState {
    POLLING =   'polling',
    INACTIVE =  'inactive',
    ACTIVE =    'active',
};


/**
 * Authentication service.
 */
@Injectable()
export class SessionService implements OnDestroy {

    /** Authentication error message */
    private DISABLED_MESSAGE = _('Your account has been temporarily disabled.');

    /** Log in API path */
    private SIGNIN_PATH = '/accounts/register';

    /** Log out API path */
    private SIGNOUT_PATH = '/api/accounts/logout';

    /** User profile API path */
    private PROFILE_PATH = '/api/accounts/profile';

    /** App location host */
    private APP_HOST: string;

    /** Log in popup options */
    private POPUP_OPTIONS = {
        toolbar: 'no',
        location: 'no',
        status: 'no',
        menubar: 'no',
        copyhistory: 'no',
        width: 560,
        height: 600
    };

    /** Authentication state */
    private state = SessionState.POLLING;

    /** Authentication pop-up reference */
    private authWindow: Window = null;

    /** Authentication subject */
    private subject = new Subject<any>();

    /** Authenticated user */
    public user: User = null;

    /** Observable of queries */
    public events = this.subject.asObservable();


    /**
     * Service constructor.
     */
    constructor(
        private http: HttpClient,
        private toaster: CnToaster
    ) {
        this.APP_HOST = window.location.host;
        this.fetchUser();
    }


    /**
     * Service destructor.
     */
    ngOnDestroy() {
        this.subject.complete();
    }


    /**
     * Returns true if a session is active.
     *
     * @returns     Whether a session is active
     */
    public check(): boolean {
        return (this.state === SessionState.ACTIVE);
    }


    /**
     * Show the authentication / registration window.
     */
    public showSignInForm() {
        // Focus the current pop-up if it is not closed

        if (this.authWindow && !this.authWindow.closed) {
            this.authWindow.focus();
            return;
        }

        // Show the log-in popup window

        this.authWindow = this.openPopup(this.SIGNIN_PATH, 'SigninWindow');

        // Poll the popup location and closed status till the window
        // is closed or a redirection to the application host happens

        const timer = setInterval(() => { try {
            if (this.authWindow.closed) {
                clearInterval(timer);
            }

            const host = this.authWindow.location.host;

            if (host === this.APP_HOST) {
                clearInterval(timer);
                
                this.authWindow.close();
                this.fetchUser().subscribe(authorized => {
                    if (authorized === false) {
                        this.toaster.error(this.DISABLED_MESSAGE);
                    }
                });
            }
        } catch (e) {}}, 500);
    }


    /**
     * Sign out the authenticated user if any.
     */
    public signOut() {
        if (this.state = SessionState.ACTIVE) {
            this.http.post(this.SIGNOUT_PATH, {}).subscribe(
                response => this.clearUser());
        }
    }


    /**
     * Fetch the authenticated user profile and store it.
     *
     * @returns     An observable with the value true on success
     *              or false on error
     */
    private fetchUser(): Observable<boolean> {
        const subject = new Subject<boolean>();
        this.state = SessionState.POLLING;

        this.http.get(this.PROFILE_PATH, {})
            .subscribe(user => {
                this.setUser(<User> user);
                subject.next(true);
                subject.complete();
            }, errors => {
                this.clearUser();
                subject.next(false);
                subject.complete();
            });

        return subject.asObservable();
    }


    /**
     * Set the authenticated user profile.
     */
    private setUser(user: User) {
        this.user = user,
        this.state = SessionState.ACTIVE;
        this.subject.next(new UserChanged(this.state));
    }


    /**
     * Clear the current authenticated user profile.
     */
    private clearUser() {
        this.user = null;
        this.state = SessionState.INACTIVE;
        this.subject.next(new UserChanged(this.state));
    }


    /**
     * Open a new pop-up window.
     *
     * @param url       URL to open
     * @param name      Target or name of the window
     * @param params    Popup parameters object
     *
     * @returns         A reference to the opened window
     */
    private openPopup(url: string, name: string): Window {
        const options = Object.assign({}, this.POPUP_OPTIONS);

        // Center the popup window on the screen

        if (options['width'] && options['height']) {
            options['top'] = (screen.height / 2) - (options['height'] / 2);
            options['left'] = (screen.width / 2) - (options['width'] / 2);
        }

        // Map the options to a specification string

        const specs = Object.keys(options).map(
            (k) => `${k}=${options[k]}`).join(',');

        return window.open(url, name, specs);
    }

}
