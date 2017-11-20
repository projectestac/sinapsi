import { Observable } from 'rxjs/Observable';
import { Component, Input, OnInit } from '@angular/core';
import { CnModel, CnQuery, CnQuerier } from "concrete/core";
import { CatalogComponent, OnRequestChange } from 'app/shared';
import { PostView } from './posts.types';


@Component({
    selector: 'posts-catalog',
    templateUrl: 'posts-catalog.component.html',
    styleUrls: [ 'posts-catalog.component.scss' ],
    providers: [ CnQuerier ]
})
export class PostsCatalogComponent extends CatalogComponent {
    
    /** Request query filters */
    @Input() filters: Object = {};
    
    /** Current view (default, list, gallery) */
    @Input() view: PostView = 'default';
    
    /** Catalog REST API path */
    @Input() requestPath: string = 'api/posts';
    
    /** Request query default values */
    @Input() requestDefaults: CnQuery = {
        section: 'default',
        sort: ['-published_at']
    };
    
    /** Request query mandatory values */
    @Input() requestBindings: CnQuery = {
        limit: 15,
        with: ['author', 'reaction', 'tags']
    };
    
    
    /**
     * Component initialization.
     */
    ngOnInit() {
        this.requestBindings = Object.assign(
            this.filters || {},
            this.requestBindings
        );
        
        super.ngOnInit();
    }
    
    
    /**
     *
     */
    changeSection(section: string) {
        this.fetch({ section: section });
        // sort: ['-reputation', '-published_at']
    }
    
    
    @OnRequestChange('section')
    private onSectionChange(request: CnQuery) {
        switch (request.section) {
            case 'featured':
                request['sort'] = ['-published_at', '-reputation'];
                request['min-reputation'] = 60;
                break;
            case 'voted':
                request['sort'] = ['-like_count', '-published_at'];
                request['min-like_count'] = 1;
                break;
            case 'commented':
                request['sort'] = ['-comment_count', '-published_at'];
                request['min-comment_count'] = 1;
                break;
        }
    }
    
    
    /**
     * ngForOf track by function.
     *
     * @param index     Index
     * @param model     Model
     *
     * @returns         Model unique ID
     */
    trackById(index: number, model: CnModel) {
        return model.id;
    }
}