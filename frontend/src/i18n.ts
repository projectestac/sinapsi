import { I18N_MESSAGES } from 'environments/environment';


/** Alias for the function i18n */
export function _(m) {
    return i18n(m);
}


/**
 * Returns a translated string for the given message.
 *
 * @param message       Message to translate
 */
export function i18n(message: string): string {
    return (I18N_MESSAGES[message] || message);
};


/**
 * Formats a string using the specified parameters.
 *
 * @example
 * ```typescript
 * let message = format('My name is {name}', { name: 'Earl' });
 * ```
 *
 * @param message       Message to format
 * @param params        Parameters to replace
 */
export function format(message: string, params: Object) {
    Object.entries(params).forEach(([key, value]) => {
        const regex = new RegExp(`{\\s*${key}\\s*}`, 'gm');
        message = message.replace(regex, value);
    });
    
    return message;
};


/**
 * Truncates the given message to the provided length.
 *
 * @param message       Message to truncate
 * @param length        Maximum message length
 */
export function ellipsis(message: string, length: number = 100) {
    return (length > message.length) ?
        message : message.substr(0, length - 1) + '…';
};
