import { Synapse, User, UserRole } from 'app/models';
import { PrivilegeRole, SynapseType } from 'app/models';
import { GENERAL_SLUG } from 'app/models';


/**
 * Synapse gates.
 */
export const SYNAPSE_GATES = {

    /**
     * Determine whether the user can update the synapse.
     */
    'update-synapse': (user: User, synapse: Synapse): boolean => {
        return (synapse.privilege.role === PrivilegeRole.EDITOR) ||
               (synapse.privilege.role === PrivilegeRole.MANAGER);
    },


    /**
     * Determine whether the user can delete the synapse.
     */
    'destroy-synapse': (user: User, synapse: Synapse): boolean => {
        return (user.role === UserRole.ADMINISTRATOR) &&
               (synapse.type !== SynapseType.AUTHORS) &&
               (synapse.slug !== GENERAL_SLUG);
    },


    /**
     * Determine whether the user can manage the synapse blocks.
     */
    'manage-blocks': (user: User, synapse: Synapse): boolean => {
        return (synapse.privilege.role === PrivilegeRole.EDITOR) ||
               (synapse.privilege.role === PrivilegeRole.MANAGER);
    },


    /**
     * Determine whether the user can manage the synapse privileges.
     */
    'manage-privileges': (user: User, synapse: Synapse): boolean => {
        return synapse.privilege.role === PrivilegeRole.MANAGER;
    }

};
