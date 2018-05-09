import { User, UserRole } from 'app/models';


/**
 * Abilities not automatically granted to admins.
 */
const GUARDED_ABILITIES = [
    'destroy-synapse',
    'destroy-tag',
    'destroy-user',
    'restore-tag',
    'restore-user'
];


/**
 * Global session gates.
 */
export const GLOBAL_GATES = {

    /**
     * Grant all gates to administrators.
     */
    '*': (user: User, ability: string): boolean => {
        return (user.role === UserRole.ADMINISTRATOR) &&
               (GUARDED_ABILITIES.includes(ability) === false);
    },


    /**
     * Determine whether the user can manage projects.
     */
    'manage-authors': (user: User): boolean => {
        return user.role === UserRole.ADMINISTRATOR;
    },


    /**
     * Determine whether the user can manage comments.
     */
    'manage-comments': (user: User): boolean => {
        return user.role === UserRole.ADMINISTRATOR;
    },


    /**
     * Determine whether the user can manage synapses.
     */
    'manage-synapses': (user: User): boolean => {
        return user.role === UserRole.ADMINISTRATOR;
    },


    /**
     * Determine whether the user can manage tags.
     */
    'manage-tags': (user: User): boolean => {
        return user.role === UserRole.ADMINISTRATOR;
    }

};
