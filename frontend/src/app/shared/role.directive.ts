import { Subject } from 'rxjs/Subject';
import { Directive, Input } from '@angular/core';
import { OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

import { SessionService, SessionState } from 'app/core';
import { SessionEvent, SessionStateChanged } from 'app/core';
import { User } from 'app/models';


/**
 * Conditionally includes a template based on the authenticated
 * user roles.
 */
@Directive({ selector : '[appIfRole]' })
export class RoleDirective implements OnInit, OnChanges, OnDestroy {

    /** Unsubscribe subject */
    private unsubscribe = new Subject();

    /** Roles to match against */
    @Input('appIfRole') roles: string | string[];


    /**
     * Directive constructor
     */
    constructor(
        private auth: SessionService,
        private template: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {}


    /**
     * Directive initialization.
     */
    ngOnInit() {
        this.refreshView();

        this.auth.events
            .takeUntil(this.unsubscribe)
            .subscribe(event => {
                if (event instanceof SessionStateChanged) {
                    this.refreshView();
                }
            });
    }


    /**
     * Directive destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


    /**
     * Called when the component property values change.
     *
     * @param changes       Component changes
     */
    ngOnChanges(changes: SimpleChanges) {
        if ('appIfRole' in changes) {
            this.refreshView();
        }
    }


    /**
     * Includes or removes this directive's template if the authenticated
     * user role matches the provided roles.
     */
    private refreshView() {
        if (this.auth.state !== SessionState.ACTIVE) {
            this.viewContainer.clear();
            return;
        }

        const userRole = this.auth.profile['role'];

        const showView = (Array.isArray(this.roles)) ?
            (this.roles.indexOf(userRole) >= 0) :
            (userRole === this.roles);

        if (showView === true) {
            this.viewContainer.createEmbeddedView(this.template);
        }
    }

}
