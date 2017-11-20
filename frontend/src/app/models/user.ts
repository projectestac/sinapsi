import { CnModel } from 'concrete/core';


/**
 * User model class.
 */
export class User implements CnModel {
    id: number;
    email: string;
    name: string;
    password: string;
    remember_token: string;
    role: string;
    created_at: string;
    deleted_at: string;
    updated_at: string;
}
