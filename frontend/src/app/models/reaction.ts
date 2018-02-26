import { Model } from 'app/core';


/**
 * Author model class.
 */
export class Reaction implements Model {
    id: number;
    commented: boolean;
    favourited: boolean;
    liked: boolean;
    post_id: number;
    user_id: number;
    created_at?: string;
    updated_at?: string;
}
