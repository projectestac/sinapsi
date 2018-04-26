import { Injectable } from '@angular/core';
import { User } from 'app/models';
import { SessionService, SessionState } from './session.service';


/**
 * Authorization service.
 */
@Injectable()
export class PoliciesService {

    /** Current policies */
    private policies = {
        '*': (user: User, ability: string) => false
    };


    /**
     * Service constructor.
     */
    constructor(
        private session: SessionService
    ) {}


    /**
     * Register a new set of policies.
     */
    public register(policies: object) {
        Object.assign(this.policies, policies);
    }


    /**
     * Returns if the given ability is authorized to the current user
     * for the given target.
     *
     * @param ability       Ability name
     * @param target        Optional target object
     *
     * @returns             If the ability is authorized
     */
    public can(ability: string, target: any = null): boolean {
        return this.grants(ability) || this.allows(ability, target);
    }


    /**
     * Returns if the given ability is allowed to the current user
     * for the given target object. This method does not check if the
     * global policy explicitly grants the ability to the user.
     *
     * @param ability       Ability name
     * @param target        Target object
     *
     * @returns             If user is allowed or not
     */
    public allows(ability: string, target: any = null): boolean {
        return this.check(this.policies[ability], target);
    }


    /**
     * Returns if the given ability is granted to the current user
     * by the global policy.
     *
     * @param ability       Ability name
     * @returns             If the ability is granted
     */
    public grants(ability: string): boolean {
        return this.check(this.policies['*'], ability);
    }


    /**
     * Calls the given policy method with current user and the
     * provided parameter and returns its result.
     *
     * @param method    Policy function
     * @param param     Optional policy parameter
     *
     * @returns         If there is an active session and
     *                  the function returned true.
     */
    private check(method: Function, param: any = null) {
        const self = this.policies;
        const user = this.session.user;

        return (this.session.check() === true) &&
               (method.call(self, user, param) === true);
    }

}
