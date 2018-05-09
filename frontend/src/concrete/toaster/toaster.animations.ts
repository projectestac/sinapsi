import { transition, trigger } from '@angular/animations';
import { animate, keyframes, style } from '@angular/animations';


/**
 * Show and hide a toast.
 */
export const NotifyTrigger = trigger('notify', [
    transition(':enter', [
        animate(240, keyframes([
            style({
                opacity: 0,
                transform: 'scale3d(0, 0.6, 1)'
            }),

            style({
                opacity: 1,
                transform: 'scale3d(1, 1, 1)'
            })
        ]))
    ]),

    transition(':leave', [
        animate(500, keyframes([
            style({
                opacity: 1
            }),

            style({
                opacity: 0
            })
        ]))
    ])
]);
