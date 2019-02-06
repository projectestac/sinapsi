import { NgModule } from '@angular/core';
import { AuthModule } from 'app/auth';
import { AUTH_POLICIES } from 'app/auth';
import { GLOBAL_GATES, USER_GATES } from './gates';
import { AUTHOR_GATES, PROJECT_GATES, SCHOOL_GATES } from './gates';
import { SYNAPSE_GATES, TAG_GATES } from './gates';


/**
 * Authentication polices module.
 */
@NgModule({
  imports: [
    AuthModule.forRoot()
  ],

  exports: [
    AuthModule
  ],

  providers: [{
    provide: AUTH_POLICIES,
    useValue: [
        AUTHOR_GATES,
        GLOBAL_GATES,
        PROJECT_GATES,
        SCHOOL_GATES,
        SYNAPSE_GATES,
        TAG_GATES,
        USER_GATES
    ]
  }],
})
export class AppPolicies {}
