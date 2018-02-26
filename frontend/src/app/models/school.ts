import { Model } from 'app/core';
import { Author } from '.';


/**
 * School model class.
 */
export class School implements Model {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    author?: Author;
}
