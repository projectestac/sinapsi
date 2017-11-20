import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Block } from 'app/models';

declare var twttr: any;

@Component({
    selector: 'app-block',
    templateUrl: 'block.component.html',
    styleUrls: [ 'block.component.scss' ]
})
export class BlockComponent implements AfterViewInit {
    
    /** Block model */
    @Input() block: Block;
    
    /** Block wrapper element */
    @ViewChild('blockElement') blockElement;
    
    
    /**
     * Fired after the content was initialized.
     */
    ngAfterViewInit() {
        if (this.block.options['type'] === 'twitter') {
            twttr.widgets.load(this.blockElement.nativeElement);
        }
    }
}
