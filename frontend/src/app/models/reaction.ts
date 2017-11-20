import { CnModel } from 'concrete/core';


/**
 * Author model class.
 */
export class Reaction implements CnModel {
    id: number;
    commented: boolean;
    favourited: boolean;
    liked: boolean;
    post_id: number;
    user_id: number;
}
