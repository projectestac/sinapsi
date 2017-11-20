import { Component, Input } from '@angular/core';
import { CnCollection, CnModel } from 'concrete/core';


@Component({
    selector: 'sy-comment-board',
    templateUrl: 'comment-board.component.html',
    styleUrls: [ 'comment-board.component.scss' ]
})
export class SyCommentBoardComponent {
    
    /** Current comments array */
    @Input() comments: CnCollection<CnModel>;
    
    
    /**
     * Fetches more comments from the backend.
     */
    fetchMore() {
        
    }
}
