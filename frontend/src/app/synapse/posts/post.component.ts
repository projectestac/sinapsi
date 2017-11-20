import * as moment from 'moment';
import { Component, Input, ViewChild } from '@angular/core';
import { CnModel, CnExpandState } from 'concrete/core';
import { PostView } from './posts.types';
import { Post } from 'app/models';


@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
    styleUrls: [ 'post.component.scss' ]
})
export class PostComponent {
    
    /** Whether the component is expanded */
    private isOpen: boolean = false;
    
    /** Current post model */
    @Input() post: Post = null;
    
    /** Current view state */
    @Input() view: PostView = 'default';
    
    /** Whether it should expanded initally */
    @Input('open') set setOpen(state: boolean) {
        this.isOpen = (state !== undefined && state !== false);
    };
    
    /** This posts article element */
    @ViewChild('article') article;
    
    /** Comments expandable */
    @ViewChild('commentExp') commentExp;
    
    
    /** Current component state */
    get state(): CnExpandState {
        return this.isOpen ? 'open' : 'closed';
    }
    
    
    /**
     * Toggles the state of the article.
     *
     * @returns         Post state after the toggle
     */
    toggle(): boolean {
        this.isOpen = !this.isOpen;
        
        if (this.isOpen === false) {
            this.commentExp.close();
        }
        
        return this.isOpen;
    }
    
    
    /**
     * Add/remove a like from the user.
     *
     * @returns         Like state after the toggle
     */
    toggleLike(): boolean {
        return true;
    }
    
    
    /**
     * Add/remove a favourite from the user.
     *
     * @returns         Favourite state after the toggle
     */
    toggleFavorite(): boolean {
        return true;
    }
    
    
    /**
     * Open the Twitter share form for the post.
     */
    shareOnTwitter() {
        
    }
    
    
    /**
     * Open the Facebook share form for the post.
     */
    shareOnFacebook() {
        
    }
    
    
    /**
     * Open the email share form for the post.
     */
    shareByEmail() {
        
    }
    
    
    /**
     * Open the Nodes share form for the post.
     */
    shareOnNodes() {
        
    }
    
    fromNow(date: Date | string) {
        moment.locale('ca');
        return moment(date).fromNow();
    }
    
    format(date: Date | string) {
        moment.locale('ca');
        return moment(date).format('llll');
    }
    
    
    /**
     * Scroll to the top of the post.
     */
    scrollTop() {
        this.article.nativeElement.scrollIntoView();
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
