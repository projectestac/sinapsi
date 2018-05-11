import { Model } from 'app/core';
import { Author, Post, User } from '.';


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
    author?: Author;
    post?: Post;
    user?: User;
}
