import { Model } from 'app/core';
import { Synapse } from '.';


/** Block types */
export const enum BlockType {
    BASIC =     'basic',
    CARD =      'card',
    HEADER =    'header',
    HTML =      'html',
    PICTURE =   'picture',
    TWITTER =   'twitter'
};


/**
 * Block model class.
 */
export class Block implements Model {
    id: number;
    title: string;
    content: string;
    options: any;
    synapse_id: number;
    created_at: string;
    updated_at: string;
    synapse?: Synapse;
}
