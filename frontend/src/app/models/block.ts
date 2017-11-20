import { CnModel } from 'concrete/core';
import { Synapse } from '.';


/**
 * Block model class.
 */
export class Block implements CnModel {
    id: number;
    content: string;
    options: string;
    title: string;
    synapse_id: number;
    created_at: string;
    updated_at: string;
    synapse?: Synapse;
}
