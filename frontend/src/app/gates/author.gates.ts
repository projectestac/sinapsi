import { Author, User } from 'app/models';
import { AuthorType } from 'app/models';


/**
 * Author gates.
 */
export const AUTHOR_GATES = {

    /**
     * Determine whether the user can update the author.
     */
    'update-author': (user: User, author: Author): boolean => {
        return author.user_id === user.id;
    },


    /**
     * Determine whether the user can manage the author feeds.
     */
    'manage-feeds': (user: User, author: Author): boolean => {
        return author.user_id === user.id;
    }

};
