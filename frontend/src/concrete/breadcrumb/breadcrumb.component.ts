import { Subject } from 'rxjs/Subject';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CnBreadcrumbService, CnCrumb } from './breadcrumb.service';


@Component({
    selector: 'cn-breadcrumb',
    templateUrl: 'breadcrumb.component.html'
})
export class CnBreadcrumbComponent implements OnInit, OnDestroy {

    /** Breadcrumb for the active route */
    public breadcrumb: Array<CnCrumb> = [];

    /** Unsubscribe subject */
    private unsubscribe = new Subject();


    /**
     * Component constructor.
     */
    constructor(private service: CnBreadcrumbService) {}


    /**
     * Component initialization method.
     */
    ngOnInit() {
        this.service.breadcrumb
            .takeUntil(this.unsubscribe)
            .subscribe(breadcrumb => {
                this.breadcrumb = breadcrumb;
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
