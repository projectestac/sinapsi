import { Component, Input, ViewChild } from '@angular/core';
import { AfterViewInit, ElementRef } from '@angular/core';
import { Block, BlockType } from 'app/models';


@Component({
    selector: 'app-block',
    templateUrl: 'block.component.html',
    styleUrls: [ 'block.component.scss' ]
})
export class BlockComponent implements AfterViewInit {

    /** Block model */
    @Input() block: Block;

    /** Whether the block is interactive */
    @Input() locked = false;

    /** Block wrapper element */
    @ViewChild('blockElement') blockElement;


    /**
     * Fired after the content was initialized.
     */
    ngAfterViewInit() {
        if (this.blockType() === BlockType.TWITTER) {
            this.initTimeline(this.blockElement);
        }
    }


    /**
     * Returns this block's type.
     *
     * @returns     Block type
     */
    public blockType(): BlockType {
        return (this.block['options'] && this.block.options['type']) ?
            this.block.options['type'] : BlockType.BASIC;
    }


    /**
     * Initialize the Twitter timeline widget for a block.
     *
     * @param block     Block element
     */
    private initTimeline(block: ElementRef) {
        const element = block.nativeElement;
        twttr.ready(() => twttr.widgets.load(element));
    }

}
