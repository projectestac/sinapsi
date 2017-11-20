import { CnModel } from 'concrete/core';


/**
 * Project model class.
 */
export class Project implements CnModel {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}
