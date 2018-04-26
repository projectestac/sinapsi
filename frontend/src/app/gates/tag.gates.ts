import { Tag, User, UserRole } from 'app/models';


/**
 * Tag gates.
 */
export const TAG_GATES = {

    /**
     * Determine whether the user can delete the tag.
     */
    'destroy-tag': (user: User, tag: Tag): boolean => {
        return (user.role === UserRole.ADMINISTRATOR) &&
               (tag.deleted_at === null);
    },


    /**
     * Determine whether the user can restore the tag.
     */
    'restore-tag': (user: User, tag: Tag): boolean => {
        return (user.role === UserRole.ADMINISTRATOR) &&
               (tag.deleted_at !== null);
    }

};
