import { Model } from 'app/core';
import { Post, Synapse } from '.';


/**
 * Synapse bump model class.
 */
export class Bump implements Model {
    id: number;
    sticked: boolean;
    created_at: string;
    updated_at: string;
    post?: Post;
    synapse?: Synapse;
}
