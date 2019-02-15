import { Model } from 'app/core';


/**
 * Category model class.
 */
export class Category implements Model {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}
