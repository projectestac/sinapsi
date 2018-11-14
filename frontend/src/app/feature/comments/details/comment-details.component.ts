import { Component, Input } from '@angular/core';
import { Model } from 'app/core';
import { Comment } from 'app/models';


@Component({
    selector: 'app-comment-details',
    templateUrl: 'comment-details.component.html',
    styleUrls: [ 'comment-details.component.scss' ]
})
export class CommentDetailsComponent {

    /** Current comment model */
    @Input() comment: Comment = null;

}
