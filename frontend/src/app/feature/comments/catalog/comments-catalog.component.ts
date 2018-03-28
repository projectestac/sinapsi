import { Component, Input, Output } from '@angular/core';
import { EventEmitter, OnInit } from '@angular/core';
import { CnDialog } from 'concrete/dialog';
import { CnToaster } from 'concrete/toaster';

import { FetchState, Collection, Model } from 'app/core';
import { StoreQuery, StoreService } from 'app/core';
import { Comment, Post } from 'app/models';
import { CommentsMessages } from '../comments.messages';


@Component({
    selector: 'app-comments-catalog',
    templateUrl: 'comments-catalog.component.html',
    styleUrls: [ 'comments-catalog.component.scss' ]
})
export class CommentsCatalogComponent implements OnInit {

    /** This catalog storage path */
    protected path = '/api/comments';

    /** Current state */
    public state: FetchState = FetchState.PENDING;

    /** Current collection */
    public collection: Collection<Model>;

    /** Current request query */
    public request: StoreQuery = {
        limit: 15,
        sort: ['-id'],
        with: ['user']
    };

    /** Requested post */
    @Input() post: Post = null;

    /** Comment removal event */
    @Output() deleted = new EventEmitter<Comment>();


    /**
     * Component constructor.
     */
    constructor(
        protected store: StoreService,
        protected dialog: CnDialog,
        protected toaster: CnToaster
    ) {}


    /**
     * Component initialization.
     */
    ngOnInit() {
        this.request['post_id'] = this.post.id;
        this.updateCatalog();
    }


    /**
     * Fetch one comment from the server.
     *
     * @param id    Model identifier
     */
    public fetchOne(id: number) {
        const request = {
            id: id,
            with: ['user']
        };

        this.store.query(this.path, request)
            .subscribe(collection => {
                if (collection.length > 0) {
                    collection.push(...this.collection);
                    this.collection = collection;
                }
            });
    }


    /**
     * Fetch more comments.
     */
    public fetchMore() {
        const length = this.collection.length;
        const pivot = this.collection[length - 1];
        
        this.request['max-id'] = (pivot.id - 1);
        this.updateCatalog();
    }


    /**
     * Update this catalog with new results from the server.
     *
     * @param request       Request query
     */
    private updateCatalog() {
        this.state = FetchState.PENDING;

        this.store.query(this.path, this.request)
            .subscribe(collection => {
                collection.unshift(...this.collection);
                this.collection = collection;
                this.state = FetchState.READY;
            }, errors => this.state = FetchState.ERROR);
    }


    /**
     * Delete an existing comment.
     */
    public remove(comment: Comment) {
        const confirm = CommentsMessages.RemoveConfirm(comment);
        const success = CommentsMessages.RemoveSuccess(comment);
        
        this.dialog.open(confirm)
            .filter(event => event.confirmed)
            .subscribe(event => {
               this.store.delete(this.path, comment.id)
                   .subscribe((response) => {
                       const index = this.collection.indexOf(comment);
                       
                       this.collection.splice(index, 1);
                       this.toaster.success(success);
                       this.deleted.emit(comment);
                   });
           });
    }

}
