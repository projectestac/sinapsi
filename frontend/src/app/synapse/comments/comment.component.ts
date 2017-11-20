import { Component, Input } from '@angular/core';
import { CnDialog } from 'concrete/dialog';
import { CnModel } from 'concrete/core';


@Component({
    selector: 'sy-comment',
    templateUrl: 'comment.component.html',
    styleUrls: [ 'comment.component.scss' ]
})
export class SyCommentComponent {
    
    /** Current comment model */
    @Input() comment: CnModel = null;
    
    
    /**
     * Component constructor.
     */
    constructor(private dialogService: CnDialog) {}
    
    
    /**
     * Delete the current comment.
     */
    delete() {
        this.dialogService.open({
            text: "Do you want to delete this comment?",
            confirm: "Delete",
            refuse: "Cancel"
        }).subscribe(event => {
            if (event.confirmed) {
                console.log('deleted!');
            }
        });
    }
}
