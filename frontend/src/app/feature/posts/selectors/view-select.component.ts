import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PostsView } from '../posts.types';


@Component({
    selector: 'app-view-select',
    templateUrl: 'view-select.component.html',
    styleUrls: [ 'view-select.component.scss' ]
})
export class ViewSelectComponent {

    /** Initial area state value */
    @Input() value: PostsView = PostsView.OPTIMAL;

    /** Emitted when an area is choosen */
    @Output() valueChange: EventEmitter<PostsView>;


    /**
     * Component constructor
     */
    constructor() {
        this.valueChange = new EventEmitter<PostsView>();
    }


    /**
     * Pick a new area value.
     *
     * @param value     New area value
     */
    select(value: PostsView | string) {
        const viewValue = <PostsView> value;
        
        if (this.value !== viewValue) {
            this.value = viewValue;
            this.valueChange.emit(viewValue);
        }
    }

}
