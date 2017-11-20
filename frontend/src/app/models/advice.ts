import { CnModel } from 'concrete/core';


/**
 * Advice model.
 */
export class Advice implements CnModel {
    id: number;
    archived: boolean;
    description: string;
    inspection_type: string;
    read: boolean;
    sent: boolean;
    slug: string;
    article_id: number;
    order_id: number;
    resource_id: number;
    season_id: number;
    supplier_id: number;
    to_user_id: number;
    type_id: number;
    user_id: number;
    created_at: string;
    refreshed_at: string;
    updated_at: string;
}
