import { Author } from 'app/models';
import { _, format } from 'i18n';


/**
 * Static message functions.
 */
export class SchoolMessages {

    /** The project was successfully deleted */
    static readonly RemoveSuccess = (author) => format(
        _('The school «<strong>{name}</strong>» has been deleted.'),
         { name: author.name }
    );


    /** Remove project confirmation dialog */
    static readonly RemoveConfirm = (author) => ({
        refuse:  _('Cancel'),
        confirm: _('Delete'),
        text: `
          <p>
            ${format(
              _('Do you want to delete «<strong>{name}</strong>»?'),
               { name: author.name }
            )}
          </p>
          <p>
            <small class="text-muted">
              ${ _('This action cannot be undone.') }
            </small>
          </p>`
    });

}
