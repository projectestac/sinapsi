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
     * Returns this block's HREF option as an absolute URL.
     *
     * @returns     Block URL
     */
    public toAbsoluteURL(value: string): string {
        const href = value ? value.trim() : null;
        let url = null;

        if (href === null || href.length === 0) {
            return null;
        }

        try {
            const base = document.baseURI;
            const hasProtocol = /^https?:\/\//.test(href);
            url = hasProtocol ? new URL(href) : new URL(`${base}/${href}`);
        } catch (e) {}

        return url ? url.toString() : null;
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
