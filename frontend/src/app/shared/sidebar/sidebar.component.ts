import { Subscription } from 'rxjs/Subscription';
import { Component, Input, SimpleChanges } from '@angular/core';
import { OnChanges, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Collection } from 'app/core';
import { Block, BlockType } from 'app/models';


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


    /**
     * Component constructor.
     */
    constructor(private dragula: DragulaService) {
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
            (changes['editable'].currentValue) ?
               this.initDraggable() : this.destroyDraggable();
        }
    }


    /**
     * Toggle the editable state of the sidebar.
     */
    public toggleEditable() {
        this.editable = !this.editable;
    }


    /**
     * Fired to remove a block.
     *
     * @param block     Sidebar block to remove
     */
    public remove(block: Block) {
        console.log("Remove Block");
    }


    /**
     * Fired after a block has been reordered.
     */
    private onBlockSorted() {
        const order = this.blocks.map(block => block.id);
        console.log("Reorder Blocks");
        console.log(order);
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
