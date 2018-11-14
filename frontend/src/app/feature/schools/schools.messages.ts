import { Author } from 'app/models';
import { _, format } from 'i18n';


/**
 * Static message functions.
 */
export class SchoolMessages {

    /** The school was successfully deleted */
    static readonly RemoveSuccess = (author) => format(
        _('The school «<strong>{name}</strong>» has been deleted.'),
         { name: author.name }
    );


    /** Remove school confirmation dialog */
    static readonly RemoveConfirm = (author) => ({
        type: 'confirm',
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


    /** Create school prompt dialog */
    static readonly CreatePrompt = () => ({
        type: 'prompt',
        confirm: _('Create school'),
        prompt: _('Name of the school'),
        text: `<p>${_('Please enter a name for the new school.')}</p>`
    });

}
