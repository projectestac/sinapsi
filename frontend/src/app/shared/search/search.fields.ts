import { StoreQuery } from 'app/core';
import { _ } from 'i18n';


export interface FieldConfig {
    id: string;
    name: string;
    path: string;
    filters: StoreQuery;
}


/**
 * Predefined published at intervals.
 */
export const TYPEAHEAD_FIELDS: FieldConfig[] = [{
    id:     'tags',
    name:   _('Tags'),
    path:   '/api/tags',
    filters: { sort: ['$name', '-post_count', 'name'] }
  }, {
    id:     'territories',
    name:   _('Territories'),
    path:   '/api/territories',
    filters: null
  }, {
    id:     'municipalities',
    name:   _('Municipalities'),
    path:   '/api/municipalities',
    filters: null
  }, {
    id:     'schools',
    name:   _('Schools'),
    path:   '/api/authors',
    filters: { type: 'schools' }
  }, {
    id:     'projects',
    name:   _('Projects'),
    path:   '/api/authors',
    filters: { type: 'projects' }
}];
