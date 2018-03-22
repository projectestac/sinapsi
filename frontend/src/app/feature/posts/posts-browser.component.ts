import { Subject } from 'rxjs/Subject';
import { Component, Input, ViewChild } from '@angular/core';
import { OnDestroy, OnInit } from '@angular/core';
import { RequestManager, StoreQuery } from 'app/core';
import { Synapse } from 'app/models';
import { SectionConfig, SectionsBuilder } from './posts.sections';
import { PostsSection, PostsView } from './posts.types';


@Component({
    selector: 'app-posts-browser',
    templateUrl: 'posts-browser.component.html',
    styleUrls: [ 'posts-browser.component.scss' ],
    providers: [ RequestManager ]
})
export class PostsBrowserComponent implements OnDestroy, OnInit {

    /** Default browser view */
    private readonly DEFAULT_VIEW = PostsView.OPTIMAL;

    /** Unsubscribe subject */
    private unsubscribe = new Subject();

    /** Current request object */
    public request: StoreQuery = {
        view: this.DEFAULT_VIEW,
        section: null
    };

    /** Sections configuration */
    @Input() sections: SectionConfig[] = null;

    /** Request synapse model */
    @Input() synapse: Synapse = null;

    /** Catalog component */
    @ViewChild('catalog') catalog;


    /**
     * Component constructor.
     */
    constructor(
        protected manager: RequestManager
    ) {}


    /**
     * Component initialization.
     */
    ngOnInit() {
        if (!(Array.isArray(this.sections) && this.sections.length > 0)) {
           throw new Error("Attribute 'sections' is required");
        }

        // Modify the request before it is sent to the server

        this.catalog.requests
            .takeUntil(this.unsubscribe)
            .subscribe(request => {
                this.interceptRequest(request);
                setTimeout(() => this.request = request);
            });
    }


    /**
     * Component destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }


    /**
     * Change this browser's section.
     *
     * @param section   New section value
     */
    public requestSection(section: PostsSection) {
        this.manager.merge({
            page: 1,
            section: section
        });
    }


    /**
     * Change this browser's view.
     *
     * @param view      New view value
     */
    public requestView(view: PostsView) {
        this.manager.merge({
            view: view
        });
    }


    /**
     * Intercepts the request before it is sent to the server. This
     * method applies the current section filters to the request.
     *
     * @param request   Request query object
     */
    private interceptRequest(request: StoreQuery) {
        const viewId = request['view'] || this.DEFAULT_VIEW;
        const sectionId = request['section'] || this.sections[0]['id'];

        // Apply the section bindings and defaults to the request

        const section = this.sections.find(s => s.id === sectionId);

        if (section !== undefined) {
            const base = { ...section.defaults, ...request };
            Object.assign(request, base, section.bindings);
        }

        // Update the view and section identifiers

        request['view'] = viewId;
        request['section'] = sectionId;
    }

}
