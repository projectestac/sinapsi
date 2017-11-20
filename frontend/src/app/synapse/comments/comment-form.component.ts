import { Component, Input } from '@angular/core';


@Component({
    selector: 'sy-comment-form',
    templateUrl: 'comment-form.component.html',
    styleUrls: [ 'comment-form.component.scss' ]
})
export class SyCommentFormComponent {
    
    /** Maximum comment length in characters */
    public readonly MAX_LENGTH: number = 500;
    
    /** Minimum comment length in characters */
    public readonly MIN_LENGTH: number = 10;
    
    /** Current comment value */
    public text: string = '';
    
    
    /**
     * Returns the number of characters remaining. That is, the maximum
     * allowed comment length minus the current comment length.
     *
     * @returns         Number of characters left
     */
    get charsLeft(): number {
        return this.MAX_LENGTH - this.text.length;
    }
    
    
    /**
     * Submits a comment.
     *
     * @param value     Text to submit
     */
    submit(text: string) {
        console.log(text);
    }
}
