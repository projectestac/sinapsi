import { Model } from 'app/core';
import { Synapse } from '.';


/**
 * Tag model class.
 */
export class Tag implements Model {
    id: number;
    name: string;
    post_count: number;
    slug: string;
    synapse_id: number;
    created_at: string;
    deleted_at: string;
    updated_at: string;
    synapse?: Synapse;
}
