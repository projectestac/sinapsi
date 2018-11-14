import { Component, Input, Output } from '@angular/core';
import { EventEmitter, SimpleChanges } from '@angular/core';


/** Paginable collection interface */
export interface CnCollection {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
}


@Component({
    selector: 'cn-pagination',
    templateUrl: 'pagination.component.html'
})
export class CnPaginationComponent {

    /** Maximum number of pages default */
    static readonly DEFAULT_MAX_PAGES = 3;

    /** Emitted on page change */
    @Output() pageChange: EventEmitter<number>;

    /** Show boundary links */
    @Input('bounds') showBounds = false;

    /** Show metadata */
    @Input('meta') showMeta = true;

    /** Maximum number of pages to show */
    @Input() maxPages: number;

    /** CnCollection to paginate */
    @Input() collection: CnCollection;


    /**
     * Component constructor.
     *
     * @param settings      Settings service
     */
    constructor() {
        this.maxPages = CnPaginationComponent.DEFAULT_MAX_PAGES;
        this.pageChange = new EventEmitter<number>();
    }


    /** If a next page exists */
    get hasNext(): boolean {
        return this.collection.current_page < this.collection.last_page;
    }


    /** If a previous page exists */
    get hasPrevious(): boolean {
        return this.collection.current_page > 1;
    }


    /**
     * Returns if the given page is the current page on the
     * collection.
     *
     * @param page      Page number
     */
    isCurrentPage(page: number) {
        return (page === this.collection.current_page);
    }


    /**
     * Returns the array of page numbers to show.
     *
     * @returns         Page numbers array
     */
    pagesRange(): Array<number> {
        const numbers = [];
        const c = this.maxPages - 1;

        const current = this.collection.current_page;
        const last = this.collection.last_page;
        let previous = Math.max(1, current - Math.floor(c / 2));
        const next = Math.min(last, previous + c);

        if (next - previous < this.maxPages) {
            previous = Math.max(1, next - c);
        }

        for (let n = previous; n <= next; n++) {
            numbers.push(n);
        }

        return numbers;
    }


    /**
     * Emits a page change event.
     *
     * @param page      Page number
     */
    emitPageChange(page: number) {
        this.pageChange.emit(page);
    }
}
