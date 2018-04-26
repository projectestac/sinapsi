import { Observable } from 'rxjs/Observable';
import { Component, Input, ViewChild } from '@angular/core';
import { CnToaster } from 'concrete/toaster';
import { CnExpandState } from 'concrete/expandable';

import { ModelCreated, ModelDeleted } from 'app/core';
import { StoreQuery, StoreService, SessionService } from 'app/core';
import { Collection, Model } from 'app/core';
import { Comment, Post, Reaction, Synapse } from 'app/models';
import { PostsView } from '../posts.types';
import { PostsMessages } from '../posts.messages';
import { _ } from 'i18n';


@Component({
    selector: 'app-post-details',
    templateUrl: 'post-details.component.html',
    styleUrls: [ 'post-details.component.scss' ]
})
export class PostDetailsComponent {

    /** Post API path */
    private path = '/api/posts';

    /** Post reactions API path */
    private reactionsPath = '/api/posts/reactions';

    /** Whether the component is expanded */
    private isOpen = false;

    /** Current post model */
    @Input() post: Post = null;

    /** Current synapse model */
    @Input() synapse: Synapse = null;

    /** Current view state */
    @Input() view: PostsView = PostsView.OPTIMAL;

    /** Whether it should expanded initally */
    @Input('open') set setOpen(state: boolean) {
        this.isOpen = (state !== undefined && state !== false);
    };

    /** This posts article element */
    @ViewChild('article') article;

    /** This posts footer element */
    @ViewChild('footer') footer;

    /** Footer expandable */
    @ViewChild('expandable') expandable;

    /** Administration menu */
    @ViewChild('adminMenu') adminMenu;


    /**
     * Current component state
     */
    get state(): CnExpandState {
        return this.isOpen ?
            CnExpandState.OPEN : CnExpandState.CLOSED;
    }


    /**
     * Component constructor.
     */
    constructor(
        protected store: StoreService,
        protected session: SessionService,
        protected toaster: CnToaster
    ) {}


    /**
     * Toggles the expansion state of the article.
     *
     * @returns         Post state after the toggle
     */
    toggleExpansion(): boolean {
        this.isOpen = !this.isOpen;

        if (this.isOpen === false) {
            this.expandable.close();
        }

        return this.isOpen;
    }


    /**
     * Toggle a like reaction from the active user.
     */
    toggleLike() {
        if (!this.session.check()) {
            this.toaster.info(PostsMessages.ReactionError);
        } else {
            this.toggleReaction('liked')
                .subscribe(value => {
                    const increment = (value ? 1 : -1);
                    this.post['like_count'] += increment;
                    this.refreshReaction();
                });
        }
    }


    /**
     * Toggle a favourite reaction from the active user.
     */
    toggleFavorite() {
        if (!this.session.check()) {
            this.toaster.info(PostsMessages.ReactionError);
        } else {
            this.toggleReaction('favourited')
                .subscribe(value => {
                    const increment = (value ? 1 : -1);
                    this.post['favourite_count'] += increment;
                    this.refreshReaction();
                });
        }
    }


    /**
     * Scroll to the top of the post.
     */
    scrollHeaderIntoView() {
        const element = this.article.nativeElement;

        if (element.getBoundingClientRect().top < 1) {
            element.scrollIntoView();
        }
    }


    /**
     * Scroll to the footer of the post.
     */
    scrollFooterIntoView() {
        const element = this.footer.nativeElement;

        if (element.getBoundingClientRect().top < 1) {
            element.scrollIntoView();
        }
    }


    /**
     * Fired on comment creation.
     *
     * @param id        Comment identifier
     */
    onCommentCreated(id: number) {
        this.refreshReaction();
        this.post.comment_count += 1;
    }


    /**
     * Fired on comment creation.
     *
     * @param comment   Comment model
     */
    onCommentDeleted(comment: Comment) {
        this.post.comment_count -= 1;
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
     * Soft-delete the current post.
     */
    removePost() {
        this.store.delete(this.path, this.post.id)
            .subscribe(success => {
                this.post.deleted_at = Date.now().toString();
            });
    }


    /**
     * Restore the current soft-deleted post.
     */
    restorePost() {
        this.store.restore(this.path, this.post.id)
            .subscribe(success => {
                this.post.deleted_at = null;
            });
    }


    /**
     * Refresh the current post reactions.
     *
     * This method fetches the post reactions from the server and
     * updates the current post object with them.
     */
    private refreshReaction() {
        this.store.get(this.reactionsPath, this.post.id)
            .subscribe((reaction: Reaction) => {
                this.post['reaction'] = reaction;
            });
    }


    /**
     * Updates a reaction to the current post.
     *
     * @param name      Reaction name
     * @param value     New reaction value
     *
     * @returns         An observable with the new value
     */
    private updateReaction(name: string, value: boolean): Observable<boolean> {
        const id = this.post.id;
        const path = this.reactionsPath;
        const request = { [name]: value };
        
        return this.store.update(path, id, request)
            .map((response) => value).take(1);
    }


    /**
     * Toggles a reaction to the current post.
     *
     * @param name      Reaction name
     * @returns         An observable with the new value
     */
    private toggleReaction(name: string): Observable<boolean> {
        const reaction = this.post['reaction'];
        const value = !(reaction && reaction[name]);
        
        return this.updateReaction(name, value);
    }

}
