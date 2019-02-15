import { StoreQuery } from 'app/core';
import { _ } from 'i18n';


export interface FieldConfig {
    id: string;
    name: string;
    path: string;
    filters: StoreQuery;
    icon: string;
}


/**
 * Predefined published at intervals.
 */
export const TYPEAHEAD_FIELDS: FieldConfig[] = [{
    id:     'tags',
    name:   _('Tags'),
    path:   '/api/tags',
    filters: { sort: ['$name', '-post_count', 'name'] },
    icon:   'tag'
  }, {
    id:     'territories',
    name:   _('Territories'),
    path:   '/api/territories',
    filters: null,
    icon:   'globe'
  }, {
    id:     'municipalities',
    name:   _('Municipalities'),
    path:   '/api/municipalities',
    filters: null,
    icon:   'map-marker'
  }, {
    id:     'categories',
    name:   _('Categories'),
    path:   '/api/categories',
    filters: null,
    icon:   'folder'
  }, {
    id:     'schools',
    name:   _('Schools'),
    path:   '/api/authors',
    filters: { type: 'schools' },
    icon:   'graduation-cap'
  }, {
    id:     'projects',
    name:   _('Projects'),
    path:   '/api/authors',
    filters: { type: 'projects' },
    icon:   'file'
}];
