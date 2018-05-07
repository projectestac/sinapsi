import { Author } from 'app/models';
import { _, format } from 'i18n';


/**
 * Static message functions.
 */
export class UserMessages {

    /** The user was successfully disabled */
    static readonly DisableSuccess = (author) => format(
        _('The user «<strong>{name}</strong>» has been successfully disabled.'),
         { name: author.name }
    );


    /** The user was successfully restored */
    static readonly RestoreSuccess = (author) => format(
        _('The user «<strong>{name}</strong>» has been re-enabled.'),
         { name: author.name }
    );


    /** Disable user confirmation dialog */
    static readonly DisableConfirm = (author) => ({
        refuse:  _('Cancel'),
        confirm: _('Disable user'),
        text: `
          <p>
            ${format(
              _('Do you want to disable the user «<strong>{name}</strong>»?'),
               { name: author.name }
            )}
          </p>
          <p>
            <small class="text-muted">
              ${_(
                'The user will no longer be able to access the application. ' +
                'User accounts can be temporarily disabled and re-enabled ' +
                'again later.'
              )}
            </small>
          </p>`
    });

}
