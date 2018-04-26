import { School, User, UserRole } from 'app/models';


/**
 * School gates.
 */
export const SCHOOL_GATES = {

    /**
     * Determine whether the user can delete the project.
     */
    'destroy-school': (user: User, school: School): boolean => {
        return user.role === UserRole.ADMINISTRATOR;
    }

};
