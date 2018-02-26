import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoreQuery, StoreService, StoreSucces } from 'app/core';
import { Comment, Post } from 'app/models';


@Component({
    selector: 'app-comment-editor',
    templateUrl: 'comment-editor.component.html',
    styleUrls: [ 'comment-editor.component.scss' ]
})
export class CommentEditorComponent {

    /** This editor storage path */
    protected path = '/api/comments';

    /** Maximum comment length in characters */
    public readonly MAX_LENGTH: number = 500;

    /** Minimum comment length in characters */
    public readonly MIN_LENGTH: number = 10;

    /** Current comment value */
    public content = '';

    /** Requested post */
    @Input() post: Post = null;

    /** Comment created event */
    @Output() created = new EventEmitter<number>();


    /**
     * Component constructor.
     */
    constructor(
        protected store: StoreService
    ) {}


    /**
     * Returns the number of characters remaining. That is, the maximum
     * allowed comment length minus the current comment length.
     *
     * @returns         Number of characters left
     */
    get charsLeft(): number {
        return this.MAX_LENGTH - this.content.length;
    }


    /**
     * Store a comment.
     *
     * @param value     Text to submit
     */
    submit(content: string) {
        this.store.create(this.path, {
            post_id: this.post.id,
            content: content
        }).subscribe((response: StoreSucces) => {
            this.created.next(response.id);
            this.reset();
        });
    }


    /**
     * Reset this editor's form.
     */
    reset() {
        this.content = '';
    }

}
