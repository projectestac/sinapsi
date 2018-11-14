import { Component, Input } from '@angular/core';


/** Component states */
export const enum ComponentState {
    PENDING =   'pending',      // Fetching results
    EMPTY =     'empty',        // No results found
    READY =     'ready',        // Results retrieved
    ERROT =     'error'         // Fetch error
};


@Component({
    selector: 'app-state',
    templateUrl: 'state.component.html',
    styleUrls: [ 'state.component.scss' ]
})
export class StateComponent {

    /** Component state */
    @Input() state: ComponentState;


    /**
     * If the component state equals to the given value.
     *
     * @param name      Component state
     */
    public inState(name: string): boolean {
        return (this.state === name);
    }


    /**
     * Reload the current route for this component.
     */
    public reloadRoute() {
        window.location.reload();
    }

}
