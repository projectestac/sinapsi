import { _ } from 'i18n';

/** Color definition */
export interface Color {
  id: string;
  name: string;
}


/** Available colors */
export const COLORS: Color[] = [
  { id: 'black',      name: _('Black') },
  { id: 'blue',       name: _('Blue') },
  { id: 'cyan',       name: _('Cyan') },
  { id: 'secondary',  name: _('Gray') },
  { id: 'green',      name: _('Green') },
  { id: 'orange',     name: _('Orange') },
  { id: 'pink',       name: _('Pink') },
  { id: 'purple',     name: _('Purple') },
  { id: 'red',        name: _('Red') },
  { id: 'tangerine',  name: _('Tangerine') },
  { id: 'white',      name: _('White') },
  { id: 'yellow',     name: _('Yellow') }
];
