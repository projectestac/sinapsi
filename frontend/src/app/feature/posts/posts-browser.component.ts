import { Subject } from 'rxjs/Subject';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { RequestManager } from 'app/core';
import { Synapse } from 'app/models';
import { PostsSection, PostsView } from './posts.types';


@Component({
    selector: 'app-posts-browser',
    templateUrl: 'posts-browser.component.html',
    styleUrls: [ 'posts-browser.component.scss' ],
    providers: [ RequestManager ]
})
export class PostsBrowserComponent implements OnInit, OnDestroy {

    /** Default browser section */
    private readonly DEFAULT_SECTION = PostsSection.EVERYTHING;

    /** Default browser view */
    private readonly DEFAULT_VIEW = PostsView.OPTIMAL;

    /** Unsubscribe subject */
    private unsubscribe = new Subject();

    /** Current posts section */
    @Input() section: PostsSection = this.DEFAULT_SECTION;

    /** Current posts view */
    @Input() view: PostsView = this.DEFAULT_VIEW;

    /** Request synapse model */
    @Input() synapse: Synapse = null;

    /** Request search filter */
    @Input() search: string = null;


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
        this.manager.queries
            .takeUntil(this.unsubscribe)
            .subscribe(query => {
                this.section = query['section'] || this.DEFAULT_SECTION;
                this.view = query['view'] || this.DEFAULT_VIEW;
                this.search = query['search'] || null;
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
    requestSection(section: PostsSection) {
        this.manager.replace({
            section: section,
            search: this.search,
            view: this.view,
        });
    }


    /**
     * Change this browser's view.
     *
     * @param view      New view value
     */
    requestView(view: PostsView) {
        this.manager.merge({
            view: view
        });
    }

}
