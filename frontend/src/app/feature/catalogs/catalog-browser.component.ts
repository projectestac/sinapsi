import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { CnDialog } from 'concrete/dialog';
import { StoreService } from 'app/core';
import { Synapse } from 'app/models';
import { CatalogMessages } from './catalogs.messages';


@Component({
    templateUrl: 'catalog-browser.component.html',
    styleUrls: [ 'catalog-browser.component.scss' ]
})
export class CatalogBrowserComponent {

    /** Active route path */
    public childPath = 'taxonomies';

    /** Search keywords */
    public keywords: string = null;


    /**
     * Component constructor.
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dialog: CnDialog,
        private store: StoreService
    ) {
        // Set the active route path on route changes. This
        // activates the tab for the current route.

        router.events.subscribe(event => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }

            for (const child of route.children) {
                if (route.outlet === PRIMARY_OUTLET) {
                    this.childPath = child.snapshot.url[0].path;
                    break;
                }
            }
        });

        // Listen to URL parameters. This preserves the search
        // parameter between routes

        route.queryParamMap.subscribe(paramMap => {
            this.keywords = paramMap.get('search');
        });
    }


    /**
     * Search the catalog.
     *
     * @param search    Search keywords
     */
    public search(keywords: string) {
        this.router.navigate([this.childPath], {
            relativeTo: this.route,
            queryParams: { search: keywords }
        });
    }


    /**
     * Pick the shown catalog page.
     *
     * @param path      Catalog path
     */
    public pick(path: string) {
        this.router.navigate([path], {
            relativeTo: this.route,
            queryParams: { search: this.keywords }
        });
    }


    /**
     * Edit an existing synapse.
     */
    public edit(synapse: Synapse) {
        this.router.navigate(['/editors', 'synapses', synapse.id]);
    }


    /**
     * Create a new synapse.
     */
    public create() {
        const prompt = CatalogMessages.CreateSynapsePrompt();

        this.dialog.open(prompt)
            .filter(event => event.confirmed)
            .filter(event => !!event.value.trim())
            .subscribe(event => {
                const params = { name: event.value };
                const path = '/api/synapses';

                this.store.create(path, params)
                    .subscribe(s => this.edit(<Synapse> s));
            });
    }

}
