import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollTop } from 'app/core/core.decorators';


@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: [ 'footer.component.scss' ]
})
export class FooterComponent {

    /**
     * Component constructor.
     */
    constructor(private router: Router) {}


    /**
     * Navigate to the given route.
     *
     * This is a workaround for Angular bug #6595.
     */
    @ScrollTop()
    public navigate(path: any[]) {
        this.router.navigate(path);
        return false;
    }


    /**
     * Scroll to the top of the window container.
     */
    public scrollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

}
