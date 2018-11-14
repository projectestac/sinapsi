import { Model } from 'app/core';
import { Author } from '.';


/**
 * Feed model class.
 */
export class Feed implements Model {
    id: number;
    etag: string;
    reputation: boolean;
    url: string;
    author_id: number;
    created_at: string;
    deleted_at: string;
    modified_at: string;
    updated_at: string;
    author?: Author;
}
