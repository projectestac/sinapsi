import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { CnStore } from "concrete/core";


@Component({
    templateUrl: 'catalogs.component.html',
    styleUrls: [ 'catalogs.component.scss' ],
    providers: [ CnStore ]
})
export class CatalogsComponent {
    
    /** Active route path */
    public childPath: string = 'taxonomies';
    
    /** Search keywords */
    public keywords: string = null;
    
    
    /**
     * Component constructor.
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        // Set the active route path on route changes. This
        // activates the tab for the current route.
        
        router.events.subscribe(event => {
            if (!(event instanceof NavigationEnd))
                return;
            
            for (let child of route.children) {
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
    search(keywords: string) {
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
    pick(path: string) {
        this.router.navigate([path], {
            relativeTo: this.route,
            queryParams: { search: this.keywords }
        });
    }
    
    
    create() {
        
    }

}
