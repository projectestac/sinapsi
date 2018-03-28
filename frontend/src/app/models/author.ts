import { Model } from 'app/core';
import { Municipality } from '.';
import { Project } from '.';
import { School } from '.';
import { Synapse } from '.';
import { Territory } from '.';
import { User } from '.';


/** Author types */
export enum AuthorType {
    PROJECTS =  'projects',
    SCHOOLS =   'schools',
    USERS =     'users'
};


/**
 * Author model class.
 */
export class Author implements Model {
    id: number;
    name: string;
    reputation: boolean;
    slug: string;
    type: AuthorType;
    municipality_id: number;
    project_id: number;
    school_id: number;
    synapse_id: number;
    territory_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    municipality?: Municipality;
    project?: Project;
    school?: School;
    synapse?: Synapse;
    territory?: Territory;
    user?: User;
}
