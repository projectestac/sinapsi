import { CnModel } from 'concrete/core';
import { Municipality } from '.';
import { Project } from '.';
import { School } from '.';
import { Synapse } from '.';
import { Territory } from '.';
import { User } from '.';


/**
 * Author model class.
 */
export class Author implements CnModel {
    id: number;
    name: string;
    reputation: boolean;
    slug: string;
    type: string;
    municipality_id: number;
    project_id: number;
    school_id: number;
    synapse_id: number;
    territory_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    municipality?: Municipality;
    project?: Project;
    school?: School;
    synapse?: Synapse;
    territory?: Territory;
    user?: User;
}
