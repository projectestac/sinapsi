import { SessionState } from './session.service';


/** Authentication events */
export type SessionEvent = (
    SessionStateChanged
);


/**
 * Event triggered when the authentication state changes.
 */
export class SessionStateChanged {
    constructor(public state: SessionState) {}
}
