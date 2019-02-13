import { state, transition } from '@angular/animations';
import { animate, style, trigger } from '@angular/animations';


/**
 * Collapse an element.
 */
export const ExpandTrigger = trigger('expand', [
    state('open', style({
        height: '*',
        overflow: 'hidden',
        opacity: '1'
    })),

    state('closed', style({
        height: '0px',
        display: 'none',
        overflow: 'hidden',
        opacity: '0'
    })),

    transition('open => closed',
        animate('160ms ease-out')
    ),

    transition('closed => open',
        animate('160ms ease-in')
    )
]);
