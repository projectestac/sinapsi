import { Model } from 'app/core';
import { Author } from '.';
import { Feed } from '.';
import { Reaction } from '.';
import { Tag } from '.';


/**
 * Post model class.
 */
export class Post implements Model {
    id: number;
    comment_count: number;
    content: string;
    excerpt: string;
    favourite_count: number;
    image_url: string;
    like_count: number;
    md5_hash: string;
    reputation: boolean;
    title: string;
    url: string;
    author_id: number;
    feed_id: number;
    created_at: string;
    deleted_at: string;
    published_at: string;
    updated_at: string;
    author?: Author;
    feed?: Feed;
    reaction?: Reaction;
    tags?: Tag[];
}
