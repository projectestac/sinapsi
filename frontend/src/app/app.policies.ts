import { NgModule } from '@angular/core';
import { PoliciesService } from 'app/core';

import {
    AUTHOR_GATES,
    GLOBAL_GATES,
    PROJECT_GATES,
    SCHOOL_GATES,
    SYNAPSE_GATES,
    TAG_GATES,
    USER_GATES
} from 'app/gates';


@NgModule()
export class AppPolicies {

    /**
     * Register the application policies.
     */
    constructor(policies: PoliciesService) {
        policies.register(AUTHOR_GATES);
        policies.register(GLOBAL_GATES);
        policies.register(PROJECT_GATES);
        policies.register(SCHOOL_GATES);
        policies.register(SYNAPSE_GATES);
        policies.register(TAG_GATES);
        policies.register(USER_GATES);
    }

}
