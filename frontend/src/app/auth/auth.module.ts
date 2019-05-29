import { NgModule, ModuleWithProviders } from '@angular/core';
import { PoliciesService } from './policies.service';
import { SessionService } from './session.service';
import { IfCanDirective } from './ifcan.directive';


/**
 * Authentication and authorization module.
 */
@NgModule({
    declarations: [
        IfCanDirective
    ],

    exports: [
        IfCanDirective
    ]
})
export class AuthModule {

    /**
     * Root providers.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                PoliciesService,
                SessionService
            ]
        };
    }

}
