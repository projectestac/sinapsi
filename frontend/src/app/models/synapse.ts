import { Model } from 'app/core';
import { Author, Privilege } from '.';


/** General synapse slug */
export const GENERAL_SLUG = 'general';


/** Synapse types */
export enum SynapseType {
    AUTHORS =   'authors',
    TAGS =      'tags',
    SYNAPSES =  'synapses'
};


/**
 * Synapse model class.
 */
export class Synapse implements Model {
    id: number;
    blocks: number[];
    description: string;
    filters: any;
    name: string;
    slug: string;
    type: SynapseType;
    synapse_id: number;
    created_at: string;
    deleted_at: string;
    updated_at: string;
    child_count?: number;
    childs?: Synapse[];
    author?: Author;
    privilege?: Privilege;
}
