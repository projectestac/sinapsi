import { transition, trigger } from '@angular/animations';
import { animate, keyframes, style } from '@angular/animations';


/**
 * Show the menu.
 */
export const ShowTrigger = trigger('show', [
    transition('close => open', [
        animate(160, keyframes([
            style({
                opacity: 0,
                transform: 'scale3d(0, 0, 1)'
            }),

            style({
                opacity: 1,
                transform: 'scale3d(1, 1, 1)'
            })
        ]))
    ])
]);
