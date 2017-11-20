import { Component } from '@angular/core';


@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: [ 'footer.component.scss' ]
})
export class FooterComponent {
    
    /**
     * Scroll to the top of the window container.
     */
    public scrollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
