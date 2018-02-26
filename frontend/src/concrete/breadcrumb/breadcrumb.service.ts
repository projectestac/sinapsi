import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';


/**
 * Represents a breadcrumb element.
 */
export interface CnCrumb {
    title: string;
    href: string;
    [propName: string]: any;
};


/**
 * Provides an obervable of router breadcrumbs.
 */
@Injectable()
export class CnBreadcrumbService implements OnDestroy {

    /** Breadcrumb subject */
    private subject = new ReplaySubject<CnCrumb[]>(1);

    /** Observable of breadcrumbs */
    public breadcrumb = this.subject.asObservable();


    /**
     * Service constructor.
     *
     * @param http          Http service
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const breadcrumb = this.buildBreadcrumb(this.route);
                this.subject.next(breadcrumb);
            }
        });
    }


    /**
     * Service destructor.
     */
    ngOnDestroy() {
        this.subject.complete();
    }


    /**
     * Builds a breadcrumb for the primary router outlet.
     *
     * @param activatedRoute        An activated route
     * @returns                     Breadcrumb array
     */
    private buildBreadcrumb(activatedRoute: ActivatedRoute): Array<CnCrumb> {
        const breadcrumb = [];
        let parentRoute = null;
        let route = activatedRoute.root;

        do {
            // Add routes with a valid URL to the breadcrumb

            const snapshot = route.snapshot;

            if (snapshot.url.length) {
                const parent = breadcrumb[breadcrumb.length - 1];
                const crumb = this.toCrumb(parent, snapshot);

                breadcrumb.push(crumb);
            }

            // Find the next child on the primary outlet

            parentRoute = route;

            for (const child of route.children) {
                if (route.outlet === PRIMARY_OUTLET) {
                    route = child;
                    break;
                }
            }
        } while (route !== parentRoute);

        return breadcrumb;
    }


    /**
     * Transforms a route snapshot to a crumb item.
     *
     * @param parent        Parent crumb
     * @param snapshot      Route snapshot for the crumb
     *
     * @returns             A crumb item
     */
    private toCrumb(parent: CnCrumb, snapshot: ActivatedRouteSnapshot): CnCrumb {
        // Obtain the crumb data

        const title = snapshot.data['title'];
        const path = snapshot.url.map(s => s.path).join('/');
        let href = parent ? parent.href : null;

        // Append the snapshot path to the its parent href

        href = href ? `${href}/${path}` : path;
        href = href.charAt(0) !== '/' ? `/${href}` : href;

        return { title: title, href: href, ...snapshot.data };
    }
}
