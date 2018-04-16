import { Model } from 'app/core';
import { User, Synapse } from '.';


/** Privilege role types */
export enum PrivilegeRole {
    MANAGER       = 'manager',
    EDITOR        = 'editor',
    VIEWER        = 'viewer'
};


/**
 * Privilege model class.
 */
export class Privilege implements Model {
    id: number;
    user_id: number;
    synapse_id: number;
    role: PrivilegeRole;
    created_at: string;
    updated_at: string;
    user?: User;
    synapse?: Synapse;
}
