import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { CnToaster } from 'concrete/toaster';

import { SessionStateChanged } from './session.events';
import { PrivilegeRole, Synapse, User, UserRole } from 'app/models';
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
    private sessionState: SessionState = SessionState.POLLING;

    /** Authenticated user profile */
    private userProfile: User = null;

    /** Authentication pop-up reference */
    private authWindow: Window = null;

    /** Authentication subject */
    private subject = new Subject<any>();

    /** Observable of queries */
    public events = this.subject.asObservable();


    /**
     * Service constructor.
     */
    constructor(
        private http: Http,
        private toaster: CnToaster
    ) {
        this.APP_HOST = window.location.host;
        this.fetchUserProfile();
    }


    /**
     * Service destructor.
     */
    ngOnDestroy() {
        this.subject.complete();
    }


    /**
     * Authentication state
     */
    get state(): SessionState {
        return this.sessionState;
    }


    /**
     * Authenticated user profile
     */
    get profile(): User {
        return this.userProfile;
    }


    /**
     * Returns true if a session is active.
     *
     * @returns     Wether a session is active
     */
    public isActive(): boolean {
        return (this.sessionState === SessionState.ACTIVE);
    }


    /**
     * Returns true if the current user is an administrator.
     *
     * @returns     True if the current user has the role 'admin';
     *              false if there isn't an active session or the
     *              user role is not 'admin'.
     */
    public isAdministrator(): boolean {
        return this.isActive() ?
            this.profile['role'] === UserRole.ADMINISTRATOR : false;
    }




    /**
     * Returns the current user privilege role over the synapse.
     * Note that administrators always have management rights over
     * all synapses.
     *
     * @param synapse       Synapse to check
     * @returns             MANAGER, EDITOR or VIEWER
     */
    private roleForSynapse(synapse: Synapse): PrivilegeRole {
        if (this.isAdministrator()) {
            return PrivilegeRole.MANAGER;
        }

        if (synapse['privilege']) {
            if (synapse.privilege['role']) {
                return synapse.privilege.role;
            }
        }

        return PrivilegeRole.VIEWER;
    }


    /**
     * Returns if the current user can edit the given synapse.
     *
     * @param synapse       Synapse to check
     * @returns             True if the current user has a privilege
     *                      other than VIEWER over the synapse
     */
    public canEditSynapse(synapse: Synapse): boolean {
        const role = this.roleForSynapse(synapse);

        return role === PrivilegeRole.MANAGER ||
               role === PrivilegeRole.EDITOR;
    }


    /**
     * Returns if the current user can manage the given synapse.
     *
     * @param synapse       Synapse to check
     * @returns             True if the current user has a privilege
     *                      over the synapse with a manager role.
     */
    public canManageSynapse(synapse: Synapse): boolean {
        const role = this.roleForSynapse(synapse);
        return role === PrivilegeRole.MANAGER;
    }


    /**
     * Show the authentication / registration window.
     */
    public showSigninForm() {
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
                this.fetchUserProfile().subscribe(authorized => {
                    if (authorized === false) {
                        this.toaster.error(_(
                            'Your account has been temporarily disabled.'));
                    }
                });
            }
        } catch (e) {}}, 500);
    }


    /**
     * Sign out the authenticated user if any.
     */
    public signOut() {
        if (this.sessionState = SessionState.ACTIVE) {
            this.http.post(this.SIGNOUT_PATH, {}).subscribe(
                response => this.clearCurrentUser());
        }
    }


    /**
     * Fetch the authenticated user profile and store it.
     *
     * @returns     An observable with the value true on success
     *              or false on error
     */
    public fetchUserProfile(): Observable<boolean> {
        const subject = new Subject<boolean>();
        
        this.http.get(this.PROFILE_PATH, {})
            .map(response => response.json())
            .subscribe(profile => {
                this.setCurrentUser(<User> profile);
                subject.next(true);
                subject.complete();
            }, errors => {
                this.clearCurrentUser();
                subject.next(false);
                subject.complete();
            });
        
        return subject.asObservable();
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


    /**
     * Set the authenticated user profile.
     */
    private setCurrentUser(user: User) {
        const event = new SessionStateChanged(SessionState.ACTIVE);

        this.userProfile = user,
        this.sessionState = SessionState.ACTIVE;
        this.subject.next(event);
    }


    /**
     * Clear the current authenticated user profile.
     */
    private clearCurrentUser() {
        const event = new SessionStateChanged(SessionState.INACTIVE);

        this.userProfile = null;
        this.sessionState = SessionState.INACTIVE;
        this.subject.next(event);
    }

}
