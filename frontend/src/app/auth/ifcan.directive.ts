import { Subject } from 'rxjs';
import { Directive, Input } from '@angular/core';
import { OnChanges, OnInit, OnDestroy } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';

import { PoliciesService } from './policies.service';
import { SessionService } from './session.service';
import { UserChanged } from './session.events';


/**
 * Conditionally includes a template if the given policy is authorized.
 */
@Directive({ selector: '[appIfCan]' })
export class IfCanDirective implements OnInit, OnChanges, OnDestroy {

    /** Unsubscribe subject */
    private unsubscribe = new Subject();

    /** Policy gate */
    @Input('appIfCan') gate: any[];


    /**
     * Directive constructor
     */
    constructor(
        private container: ViewContainerRef,
        private policies: PoliciesService,
        private session: SessionService,
        private template: TemplateRef<any>
    ) { }


    /**
     * Directive initialization.
     */
    ngOnInit() {
        this.session.events
            .pipe(
                takeUntil(this.unsubscribe),
                filter(e => e instanceof UserChanged)
            ).subscribe(e => this.updateDOM());

        this.updateDOM();
    }


    /**
     * Directive destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


    /**
     * Called on property changes.
     */
    ngOnChanges(changes) {
        if ('appIfCan' in changes) {
            this.updateDOM();
        }
    }


    /**
     * Remove or create the DOM element based on the provided
     * policy gate.
     */
    private updateDOM() {
        const ability = this.gate[0];
        const target = this.gate[1];

        if (this.policies.can(ability, target)) {
            this.container.createEmbeddedView(this.template);
        } else {
            this.container.clear();
        }
    }

}
