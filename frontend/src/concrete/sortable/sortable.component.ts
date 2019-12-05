import { Subject } from 'rxjs';
import { Component, Input, Output } from '@angular/core';
import { OnChanges, OnInit, OnDestroy } from '@angular/core';
import { EventEmitter, SimpleChanges } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { CnKeySorted, CnSortEvent } from './sort.events';
import { CnSortService } from './sort.service';


/**
 * Sortable component.
 */
@Component({
    selector: 'cn-sortable, [cn-sortable]',
    template: '<ng-content></ng-content>',
    styleUrls: ['sortable.component.scss'],
    providers: [CnSortService]
})
export class CnSortableComponent implements OnInit, OnChanges, OnDestroy {

    /** Sort array */
    @Input('cnSortValue') value: Array<string>;

    /** Emitted on a sort change */
    @Output('cnSortChange') sortChange: EventEmitter<CnSortEvent>;

    /** Unsubscribe subject */
    private unsubscribe = new Subject();


    /**
     * Component constructor.
     */
    constructor(private sortService: CnSortService) {
        this.sortChange = new EventEmitter();
        this.value = [];
    }


    /**
     * Component initialitzation
     */
    ngOnInit() {
        this.sortService.events
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(event => {
                if (event instanceof CnKeySorted) {
                    this.sortChange.emit(event);
                }
            });
    }


    /**
     * Directive destructor.
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.sortChange.complete();
    }


    /**
     * Called when a component's property data changes.
     */
    ngOnChanges(changes: SimpleChanges) {
        if ('value' in changes && changes['value'] !== undefined) {
            const values = changes['value'].currentValue;
            this.sortService.fromArray(values);
        }
    }

}
