import { transition, trigger } from '@angular/core';
import { animate, keyframes, style } from '@angular/core';


/**
 * Show the dialog.
 */
export const ShowTrigger = trigger('show', [
    transition(':enter', [
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
