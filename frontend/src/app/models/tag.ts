import { CnModel } from 'concrete/core';
import { Synapse } from '.';


/**
 * Tag model class.
 */
export class Tag implements CnModel {
    id: number;
    name: string;
    post_count: number;
    slug: string;
    synapse_id: number;
    created_at: string;
    updated_at: string;
    synapse?: Synapse;
}
