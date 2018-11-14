import * as moment from 'moment';
import { _ } from 'i18n';


export interface Ordering {
    id: string;
    name: string;
    sort: string[];
}


/**
 * Predefined results orderings.
 */
export const RESULTS_ORDERINGS: Ordering[] = [{
    id:     'default',
    name:   _('Default ordering'),
    sort:   null
  }, {
    id:     'most-relevant',
    name:   _('Most relevant results first'),
    sort:   ['$title', '-reputation', '-published_at']
  }, {
    id:     'most-recent',
    name:   _('Most recent articles first'),
    sort:   ['-published_at']
  }, {
    id:     'least-recent',
    name:   _('Oldest articles first'),
    sort:   ['published_at']
  }
];
