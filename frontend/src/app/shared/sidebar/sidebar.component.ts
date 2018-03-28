import { Subscription } from 'rxjs/Subscription';
import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { EventEmitter, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { CnDialog } from 'concrete/dialog';
import { Collection } from 'app/core';
import { Block, BlockType } from 'app/models';
import { _ } from 'i18n';

import { SidebarMessages } from './sidebar.messages';


@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: [ 'sidebar.component.scss' ]
})
export class SidebarComponent implements OnInit, OnDestroy, OnChanges {

    /** Instances of this class */
    private static numInstances = 0;

    /** Draggable subscription */
    private draggableSubscription: Subscription = null;

    /** Instance unique identifier */
    public readonly uid: string;

    /** Sidebar blocks */
    @Input() blocks: Collection<Block>;

    /** If the sidebar is editable */
    @Input() editable = false;

    /** Emited after reordering the blocks */
    @Output() sortBlock = new EventEmitter<number[]>();

    /** Emited after removing a block */
    @Output() deleteBlock = new EventEmitter<Block>();


    /**
     * Component constructor.
     */
    constructor(
        private dragula: DragulaService,
        private dialog: CnDialog
    ) {
        SidebarComponent.numInstances++;
        this.uid = `sidebar_${SidebarComponent.numInstances}`;
    }


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
            .filter(event => event.confirmed)
            .subscribe(event => {
                const i = this.blocks.findIndex(e => e.id === block.id);
                this.blocks.splice(i, 1);
                this.deleteBlock.emit(block);
            });
    }


    /**
     * Fired after a block has been reordered.
     */
    private onBlockSorted() {
        const order = this.blocks.map(block => block.id);
        this.sortBlock.emit(order);
    }


    /**
     * Initialize the drag-n-drop zone.
     */
    private initDraggable() {
        this.dragula.setOptions(this.uid, {});
        this.draggableSubscription = this.dragula.dropModel
            .subscribe(event => this.onBlockSorted());
    }


    /**
     * Destroy the drag-n-drop zone.
     */
    private destroyDraggable() {
        if (this.draggableSubscription !== null) {
            this.dragula.destroy(this.uid);
            this.draggableSubscription.unsubscribe();
            this.draggableSubscription = null;
        }
    }

}
