import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CnComponentState } from 'concrete/core';


@Component({
    selector: 'app-state',
    templateUrl: 'state.component.html',
    styleUrls: [ 'state.component.scss' ]
})
export class StateComponent {
    
    /** Component state */
    @Input() state: CnComponentState;
    
    
    /**
     * Component constructor.
     */
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}
    
    
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
