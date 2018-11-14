import { Model } from 'app/core';
import { Author } from '.';


/** User role types */
export enum UserRole {
    ADMINISTRATOR =  'admin',
    AUTHOR =         'author'
};


/**
 * User model class.
 */
export class User implements Model {
    id: number;
    name: string;
    password: string;
    remember_token: string;
    avatar_url: string;
    role: UserRole;
    created_at: string;
    disabled_at: string;
    updated_at: string;
    author?: Author;
}
