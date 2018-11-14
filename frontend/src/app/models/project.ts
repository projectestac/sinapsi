import { Model } from 'app/core';
import { Author } from '.';


/**
 * Project model class.
 */
export class Project implements Model {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    author?: Author;
}
