import { Project, User, UserRole } from 'app/models';


/**
 * Project gates.
 */
export const PROJECT_GATES = {

    /**
     * Determine whether the user can delete the project.
     */
    'destroy-project': (user: User, project: Project): boolean => {
        return user.role === UserRole.ADMINISTRATOR;
    }

};
