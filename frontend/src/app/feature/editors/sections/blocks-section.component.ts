import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Block } from 'app/models';
import { BlockFormBuilder } from './blocks-section.builder';


@Component({
    selector: 'app-blocks-section',
    templateUrl: 'blocks-section.component.html',
    styleUrls: [ 'blocks-section.component.scss' ]
})
export class BlocksSectionComponent implements OnInit {

    /** Block form */
    public form = null;

    /** Form control (blocks array) */
    @Input('form') blocks: FormGroup;


    /**
     * Component initialization.
     */
    ngOnInit() {
        this.form = BlockFormBuilder.createBlockForm();
    }


    /**
     * Adds a block to the begining of the sidebar.
     *
     * @param block     Block element
     */
    public unshift(block: Block) {
        if (Array.isArray(this.blocks.value)) {
            this.blocks.value.unshift(block);
        } else {
            this.blocks.patchValue([ block ]);
        }
    }

}
