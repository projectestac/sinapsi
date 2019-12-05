import { Subscription } from 'rxjs';
import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { EventEmitter, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { filter } from 'rxjs/operators';
import { DragulaService } from 'ng2-dragula';
import { CnDialog } from 'concrete/dialog';
import { Collection } from 'app/core';
import { Block, BlockType } from 'app/models';
import { _ } from 'i18n';

import { SidebarMessages } from './sidebar.messages';


/** Component intances */
let uid = 0;


@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy, OnChanges {

    /** Instances of this class */
    private static numInstances = 0;

    /** Draggable subscription */
    private draggableSubscription: Subscription = null;

    /** Instance unique identifier */
    public readonly uid: string;

    /** Unique identifier of the component */
    @Input() id = `app-sidebar-${uid++}`;

    /** Sidebar blocks */
    @Input() blocks: Collection<Block>;

    /** If the sidebar is editable */
    @Input() editable = false;

    /** Emited after reordering the blocks */
    @Output() sortBlock = new EventEmitter<number[]>();

    /** Emited after removing a block */
    @Output() deleteBlock = new EventEmitter<Block>();

    /** Emited on block changes */
    @Output() changeBlock = new EventEmitter<Block[]>();


    /**
     * Component constructor.
     */
    constructor(
        private dragula: DragulaService,
        private dialog: CnDialog
    ) { }


    /**
     * Component initialization method.
     */
    ngOnInit() {
        if (this.editable !== false) {
            this.initDraggable();
        }
    }


    /**
     * Component destructor.
     */
    ngOnDestroy() {
        this.destroyDraggable();
    }


    /**
     * Called on property value changes.
     *
     * @param changes       Component changes
     */
    ngOnChanges(changes: SimpleChanges) {
        if ('editable' in changes) {
            if (changes['editable'].currentValue) {
                this.initDraggable();
            } else {
                this.destroyDraggable();
            }
        }
    }


    /**
     * Toggle the editable state of the sidebar.
     */
    public toggleEditable() {
        this.editable = !this.editable;

        if (this.editable) {
            this.initDraggable();
        } else {
            this.destroyDraggable();
        }
    }


    /**
     * Fired to remove a block..
     *
     * @param block     Sidebar block to remove
     */
    public remove(block: Block) {
        const confirm = SidebarMessages.RemoveConfirm();

        this.dialog.open(confirm)
            .pipe(filter(event => event.confirmed))
            .subscribe(event => {
                const i = this.blocks.findIndex(e => e === block);
                this.blocks.splice(i, 1);
                this.deleteBlock.emit(block);
                this.changeBlock.emit(this.blocks);
            });
    }


    /**
     * Fired after a block has been reordered.
     */
    private onBlockSorted() {
        const order = this.blocks.map(block => block.id);
        this.sortBlock.emit(order);
        this.changeBlock.emit(this.blocks);
    }


    /**
     * Initialize the drag-n-drop zone.
     */
    private initDraggable() {
        if (!this.draggableSubscription) {
            this.dragula.setOptions(this.id, {});
            this.draggableSubscription = this.dragula.dropModel
                .subscribe(event => this.onBlockSorted());
        }
    }


    /**
     * Destroy the drag-n-drop zone.
     */
    private destroyDraggable() {
        if (this.draggableSubscription !== null) {
            this.dragula.destroy(this.id);
            this.draggableSubscription.unsubscribe();
            this.draggableSubscription = null;
        }
    }

}
