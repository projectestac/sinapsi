import { CnModel } from 'concrete/core';

/** Synapse types */
export type SynapseType = (
    'authors' |
    'tags' |
    'synapses'
);


/**
 * Synapse model class.
 */
export class Synapse implements CnModel {
    id: number;
    blocks: number[];
    description: string;
    filters: any;
    name: string;
    slug: string;
    type: SynapseType;
    synapse_id: number;
    created_at: string;
    updated_at: string;
    child_count?: number;
    childs?: Synapse[];
}
