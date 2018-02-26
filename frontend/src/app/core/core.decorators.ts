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
            
            window.scrollTo({ top: 0, behavior: 'auto' });
            container.scrollTo({ top: 0, behavior: 'auto' });
            container.focus();
            
            return response;
        };
        
        return descriptor;
    };
}
