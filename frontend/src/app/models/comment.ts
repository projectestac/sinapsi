import { Model } from 'app/core';
import { Post } from '.';
import { User } from '.';


/**
 * Comment model class.
 */
export class Comment implements Model {
    id: number;
    content: string;
    post_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    post?: Post;
    user?: User;
}
