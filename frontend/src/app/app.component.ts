import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CnBreadcrumbService } from 'concrete/breadcrumb';
import { CnToaster } from 'concrete/toaster';
import { SettingsService, StoreService } from 'app/core';
import { StoreErrorEvent } from 'app/core';
import { _ } from 'i18n';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ CnBreadcrumbService ]
})
export class AppComponent implements OnDestroy, OnInit {

    /** Unsubscribe subject */
    private unsubscribe = new Subject();


    /**
     * Component constructor.
     */
    constructor(
        private titleService: Title,
        private breadcrumbService: CnBreadcrumbService,
        private settings: SettingsService,
        private store: StoreService,
        private toaster: CnToaster
    ) {}


    /**
     * Component initialization method.
     */
    ngOnInit() {
        // Subscribe to storage events and show any errors

        this.store.events
           .takeUntil(this.unsubscribe)
           .subscribe(event => {
               if (event instanceof StoreErrorEvent) {
                   if (event.response['status'] !== 404) {
                       this.toaster.error(_('An unexpected error happened, please try again later.'));
                   }
               }
           });

        // Update the page title when the primary route changes

        this.breadcrumbService.breadcrumb.subscribe(breadcrumb => {
            const title: string = this.settings.get('title');

            const sections: string = breadcrumb.filter(e => e.title)
                .map(e => e.title).reverse().join('. ');

            this.titleService.setTitle(sections.length ?
                `${sections} | ${title}` : title);
        });
    }


    /**
     * Component destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

}
