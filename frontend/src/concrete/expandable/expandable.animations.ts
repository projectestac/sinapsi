import { state, transition } from '@angular/core';
import { animate, style, trigger } from '@angular/core';


/**
 * Collapse an element.
 */
export const ExpandTrigger = trigger('expand', [
    state('open', style({
        height: '*'
    })),

    state('closed', style({
        height: '0px',
        display: 'none',
        overflow: 'hidden'
    })),

    transition('open => closed',
        animate('160ms ease-out')
    ),

    transition('closed => open',
        animate('160ms ease-in')
    )
]);
