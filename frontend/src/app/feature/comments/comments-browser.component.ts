import { Component, ViewChild } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { SessionService, SessionState } from 'app/core/services';
import { CatalogComponent, StoreQuery } from 'app/core';
import { Collection, Model } from 'app/core';
import { Post } from 'app/models';


@Component({
    selector: 'app-comments-browser',
    templateUrl: 'comments-browser.component.html',
    styleUrls: [ 'comments-browser.component.scss' ]
})
export class CommentsBrowserComponent {

    /** Request post model */
    @Input() post: Post = null;

    /** Comments catalog element */
    @ViewChild('catalog') catalog;

    /** Comment creation event */
    @Output() created = new EventEmitter<number>();

    /** Comment removal event */
    @Output() deleted = new EventEmitter<Comment>();


    /**
     * Component constructor.
     */
    constructor(private session: SessionService) {}


    /**
     * Session state.
     */
    get sessionState(): SessionState {
        return this.session.state;
    }


    /**
     * Shows the log in form popup window.
     */
    public showSigninForm(event: Event) {
        this.session.showSigninForm();
    }


    /**
     * Fired on comment creation.
     *
     * @param id        Comment identifier
     */
    onCommentCreated(id: number) {
        this.catalog.fetchOne(id);
        this.created.emit(id);
    }


    /**
     * Fired on comment creation.
     *
     * @param comment   Comment model
     */
    onCommentDeleted(comment: Comment) {
        this.deleted.emit(comment);
    }

}
