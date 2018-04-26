import { SessionState } from './session.service';


/** Authentication events */
export type SessionEvent = (
    UserChanged
);


/**
 * Event triggered when the user changes.
 */
export class UserChanged {
    constructor(public state: SessionState) {}
}
