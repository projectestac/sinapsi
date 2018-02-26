import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StoreQuery } from './store.service';


/**
 * Builds and parses request queries from the browser's current
 * URL parameters.
 */
@Injectable()
export class RequestManager implements OnDestroy {

    /** Query subject */
    protected subject = new ReplaySubject<StoreQuery>(1);

    /** Observable of queries */
    public queries = this.subject.asObservable();


    /**
     * Contructor for this service.
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.queryParamMap
            .subscribe(paramMap => {
                this.subject.next(this.toQuery(paramMap));
            });
    }


    /**
     * Service destructor.
     */
    ngOnDestroy() {
        this.subject.complete();
    }


    /**
     * Navigate to the given path relative to the current route.
     */
    navigate(path: any) {
        this.router.navigate(path, {
            relativeTo: this.route
        });
    }


    /**
     * Replace the given parameters from the current URL.
     *
     * @param params    Query parameters
     */
    replace(params: any) {
        this.router.navigate(['.'], {
            relativeTo: this.route,
            queryParams: params
        });
    }


    /**
     * Merge the given parameters with the current URL parameters.
     *
     * @param params    Query parameters
     */
    merge(params: any) {
        this.router.navigate(['.'], {
            relativeTo: this.route,
            queryParamsHandling: 'merge',
            queryParams: params
        });
    }


    /**
     * Sets the limit number value on the URL.
     *
     * @param limit     Limit parameter value
     */
    limit(limit: number) {
        this.merge({ limit: limit });
    }


    /**
     * Sets the page number value on the URL.
     *
     * @param page     Page parameter value
     */
    page(page: number) {
        this.merge({ page: page });
    }


    /**
     * Sets the search value on the URL. This method also resets
     * the page number value.
     *
     * @param search    Search parameter value
     */
    search(value: string) {
        this.merge({ page: 1, search: value });
    }


    /**
     * Sets the sort value on the URL. This method also resets
     * the page number value.
     *
     * @param sort      Sort parameter values
     */
    sort(values: string[]) {
        this.merge({ page: 1, sort: values });
    }


    /**
     * Converts a router ParamMap to a StoreQuery object.
     *
     * @param params    Parameters map
     * @returns         Query object
     */
    toQuery(params: ParamMap): StoreQuery {
        const query: StoreQuery = {};

        params.keys.forEach((key) => {
            if (key === 'limit' || key === 'page') {
                query[key] = parseInt(params.get(key), 10);
            } else if (key === 'sort' || key === 'with') {
                query[key] = params.getAll(key);
            } else {
                const values = params.getAll(key);
                query[key] = (values.length > 1) ?
                    values : values[0];
            }
        });

        return query;
    }

}
