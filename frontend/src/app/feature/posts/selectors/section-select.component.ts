import { Component, Input, Output } from '@angular/core';
import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { SectionConfig } from '../posts.sections';
import { PostsSection } from '../posts.types';


@Component({
    selector: 'app-section-select',
    templateUrl: 'section-select.component.html',
    styleUrls: [ 'section-select.component.scss' ]
})
export class SectionSelectComponent implements OnChanges, OnInit {

    /** Active section */
    public section: SectionConfig = null;

    /** Sections configuration */
    @Input() sections: SectionConfig[] = null;

    /** Initial area state value */
    @Input() value: PostsSection = null;

    /** Emitted when an area is choosen */
    @Output() valueChange: EventEmitter<PostsSection>;


    /**
     * Component constructor
     */
    constructor() {
        this.valueChange = new EventEmitter<PostsSection>();
    }


    /**
     * Component initialization.
     */
    ngOnInit() {
        if (!(Array.isArray(this.sections) && this.sections.length > 0)) {
           throw new Error("Attribute 'sections' is required");
        }
    }


    /**
     * On property changes.
     */
    ngOnChanges(changes) {
        if ('value' in changes) {
            this.section = this.findSection(this.value) || this.sections[0];
        }
    }


    /**
     * Pick a new area value.
     *
     * @param value     New area value
     */
    select(section: SectionConfig) {
        if (this.section !== section) {
            this.section = section;
            this.valueChange.emit(section.id);
        }
    }


    /**
     * Returns the section with the given identifier.
     *
     * @param id        Section identifier
     * @returns         Section configuration or null
     */
    private findSection(id: string): SectionConfig {
        return this.sections.find(s => s.id === id) || null;
    }

}
