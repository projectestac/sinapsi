import { ElementRef } from '@angular/core';


/**
 * This decorator scrolls to the top of the page after the decorated
 * method is called.
 */
export function ScrollTop(element?: ElementRef) {
    return function (target: any, key: string, descriptor: any) {
        const method = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const response = method.apply(this, args);
            const container = document.getElementById('app-container');

            try {
                window.scrollTo(0, 0);

                container.scrollTop = 0;
                container.scrollIntoView(true);
                container.focus();
            } catch(e) {
                // pass
            }

            return response;
        };

        return descriptor;
    };
}
