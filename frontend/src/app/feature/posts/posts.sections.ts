import * as moment from 'moment';
import { StoreQuery } from 'app/core';
import { Synapse, User } from 'app/models';
import { PostsSection } from './posts.types';
import { _ } from 'i18n';


/** Posts section configuration */
export interface SectionConfig {
    id: PostsSection;
    name: string;
    title: string;
    icon: string;
    bindings: StoreQuery;
    defaults: StoreQuery;
}


/**
 * Builds section configurations for posts listing.
 */
export class SectionsBuilder {

    /**
     * Sections for a synapse page.
     */
    static forSynapse(): SectionConfig[] {
        const maxPublishedAt = moment()
            .startOf('day').add(90, 'days').toDate();

        return [{
            id: PostsSection.EVERYTHING,
            name: _('Everything'),
            title: _('All posts'),
            icon: 'bars',
            bindings: null,
            defaults: {
                'sort': ['-published_at']
            }
        }, {
            id: PostsSection.FEATURED,
            name: _('Featured'),
            title: _('Featured articles'),
            icon: 'bookmark',
            bindings: {
                'min-reputation': 10,
                'max-published_at': maxPublishedAt,
            },
            defaults: {
                'sort': [ '-reputation', '-published_at' ]
            }
        }, {
            id: PostsSection.VOTED,
            name: _('Most voted'),
            title: _('Most voted articles'),
            icon: 'heart',
            bindings: {
                'min-like_count': 1
            },
            defaults: {
                'sort': ['-like_count', '-published_at']
            }
        }, {
            id: PostsSection.COMMENTED,
            name: _('Most commented'),
            title: _('Most commented articles'),
            icon: 'comments',
            bindings: {
                'min-comment_count': 1
            },
            defaults: {
                'sort': ['-comment_count', '-published_at']
            }
        }];
    }


    /**
     * Sections for a user page.
     */
    static forAuthor(id: number): SectionConfig[] {
        return [{
            id: PostsSection.AUTHORED,
            name: _('Published articles'),
            title: _('Published articles'),
            icon: 'bars',
            bindings: {
                'author_id': id,
                'synapse_id': null
            },
            defaults: {
                'sort': ['-published_at']
            }
        }, {
            id: PostsSection.FAVOURITED,
            name: _('Favourited'),
            title: _('Favourited articles'),
            icon: 'bookmark',
            bindings: {
                'favourited': id,
                'synapse_id': null
            },
            defaults: {
                'sort': ['-published_at']
            }
        }, {
            id: PostsSection.LIKED,
            name: _('Liked'),
            title: _('Liked articles'),
            icon: 'heart',
            bindings: {
                'liked': id,
                'synapse_id': null
            },
            defaults: {
                'sort': ['-published_at']
            }
        }, {
            id: PostsSection.DISCUSSED,
            name: _('Commented'),
            title: _('Commented articles'),
            icon: 'comments',
            bindings: {
                'commented': id,
                'synapse_id': null,
            },
            defaults: {
                'sort': ['-published_at']
            }
        }];
    }

}
