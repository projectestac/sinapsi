import { Observable } from 'rxjs/Observable';
import { Component, Input, OnInit } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';

import { CatalogComponent, OnRequestChange } from 'app/core';
import { RequestManager, Model, StoreQuery } from 'app/core';
import { PostsSection, PostsView } from '../posts.types';
import { Synapse } from 'app/models';


@Component({
    selector: 'app-posts-catalog',
    templateUrl: 'posts-catalog.component.html',
    styleUrls: [ 'posts-catalog.component.scss' ],
    providers: [ RequestManager ]
})
export class PostsCatalogComponent extends CatalogComponent
    implements OnInit, OnChanges {

    /** This catalog storage path */
    protected path = '/api/posts';

    /** Default bindings */
    protected _bindings: StoreQuery = {
        with: ['author', 'reaction', 'tags'],
        limit: 15
    };

    /** Default query values for requests */
    @Input() defaults: StoreQuery = {
        sort: ['-published_at']
    };

    /** Query bindings for requests */
    @Input() bindings: StoreQuery = {};

    /** Requested synapse */
    @Input() synapse: Synapse = null;

    /** Current posts view */
    @Input() view: PostsView = PostsView.OPTIMAL;


    /**
     * Component initialization.
     */
    ngOnInit() {
        super.ngOnInit();
    }


    /**
     * Called when the component property values change.
     *
     * @param changes       Component changes
     */
    ngOnChanges(changes: SimpleChanges) {
        // Filter by the synapse identifier or the custom filters
        // if the synapse does not exists on the database.
        
        if ('synapse' in changes) {
            let filters = {};

            if (this.synapse !== null) {
                filters = (this.synapse['id']) ?
                    { synapse_id: this.synapse.id } :
                    this.synapse['filters'] || {};
            }

            this.bindings = Object.assign({},
                filters, this._bindings);
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
    trackById(index: number, model: Model) {
        return model.id;
    }


    /**
     * Listen for section changes and update the request defaults
     * accordingly.
     *
     * @param request       Current request object
     */
    @OnRequestChange('section')
    private onSectionChange(request: StoreQuery) {
        switch (request.section) {
            case 'featured':
                this.defaults['sort'] = ['-published_at', '-reputation'];
                this.defaults['min-comment_count'] = null;
                this.defaults['min-reputation'] = 30;
                this.defaults['min-like_count'] = null;

                request['sort'] = ['-published_at', '-reputation'];
                request['min-comment_count'] = null;
                request['min-reputation'] = 30;
                request['min-like_count'] = null;
                break;
            case 'voted':
                request['sort'] = ['-like_count', '-published_at'];
                request['min-comment_count'] = null;
                request['min-reputation'] = null;
                request['min-like_count'] = 1;

                this.defaults['sort'] = ['-like_count', '-published_at'];
                this.defaults['min-comment_count'] = null;
                this.defaults['min-reputation'] = null;
                this.defaults['min-like_count'] = 1;
                break;
            case 'commented':
                request['sort'] = ['-comment_count', '-published_at'];
                request['min-comment_count'] = 1;
                request['min-reputation'] = null;
                request['min-like_count'] = null;

                this.defaults['sort'] = ['-comment_count', '-published_at'];
                this.defaults['min-comment_count'] = 1;
                this.defaults['min-reputation'] = null;
                this.defaults['min-like_count'] = null;
                break;
            default:
                request['sort'] = ['-published_at'];
                request['min-comment_count'] = null;
                request['min-reputation'] = null;
                request['min-like_count'] = null;

                this.defaults['sort'] = ['-published_at'];
                this.defaults['min-comment_count'] = null;
                this.defaults['min-reputation'] = null;
                this.defaults['min-like_count'] = null;
        }
    }

}
