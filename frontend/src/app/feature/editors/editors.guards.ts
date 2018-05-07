import { Observable } from 'rxjs/Observable';
import { Component, Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


@Injectable()
export class CanDeactivateEditor implements CanDeactivate<Component> {

    /**
     * Decide if the route can be deactivated.
     */
    public canDeactivate(component: Component) {
        if (typeof component['canDeactivate'] === 'function') {
            return component['canDeactivate'].call(component);
        }

        return true;
    }

}