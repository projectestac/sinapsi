import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PostsSection } from '../posts.types';


@Component({
    selector: 'app-section-select',
    templateUrl: 'section-select.component.html',
    styleUrls: [ 'section-select.component.scss' ]
})
export class SectionSelectComponent {

    /** Initial area state value */
    @Input() value: PostsSection = PostsSection.EVERYTHING;

    /** Emitted when an area is choosen */
    @Output() valueChange: EventEmitter<PostsSection>;


    /**
     * Component constructor
     */
    constructor() {
        this.valueChange = new EventEmitter<PostsSection>();
    }


    /**
     * Pick a new area value.
     *
     * @param value     New area value
     */
    select(value: PostsSection | string) {
        const sectionValue = <PostsSection> value;
        
        if (this.value !== sectionValue) {
            this.value = sectionValue;
            this.valueChange.emit(sectionValue);
        }
    }

}
