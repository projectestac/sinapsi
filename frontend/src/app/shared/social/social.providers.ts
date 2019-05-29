import { _, format } from 'i18n';


/** Social provider */
export interface SocialProvider {
    id: string;
    title: string;
    icon: string;
    url: string;
    query: string;
}


/**
 * Social share providers.
 */
export const SOCIAL_PROVIDERS: SocialProvider[] = [{
    id:       'twitter',
    title:    _('Share on Twitter'),
    icon:     'twitter',
    url:      'https://twitter.com/intent/tweet',
    query:    'url={link}&text={title}: {description}'
  }, {
    id:       'facebook',
    title:    _('Share on Facebook'),
    icon:     'facebook',
    url:      'https://www.facebook.com/dialog/feed',
    query:    'link={link}&app_id={facebook_app_id}'
  }, {
    id:       'email',
    title:    _('Share by Email'),
    icon:     'envelope-o',
    url:      'mailto:',
    query:    'subject={title}&body={title}%0A{description}%0A%0A{link}'
  }, {
    id:       'feed',
    title:    _('Web syndication'),
    icon:     'feed',
    url:      '../feeds/{href}',
    query:    'limit=20'
}];
