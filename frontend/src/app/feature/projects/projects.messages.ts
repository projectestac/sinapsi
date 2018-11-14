import { Author } from 'app/models';
import { _, format } from 'i18n';


/**
 * Static message functions.
 */
export class ProjectMessages {

    /** The project was successfully deleted */
    static readonly RemoveSuccess = (author) => format(
        _('The project «<strong>{name}</strong>» has been deleted.'),
         { name: author.name }
    );


    /** Remove project confirmation dialog */
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


    /** Create project prompt dialog */
    static readonly CreatePrompt = () => ({
        type: 'prompt',
        confirm: _('Create project'),
        prompt: _('Name of the project'),
        text: `<p>${_('Please enter a name for the new project.')}</p>`
    });

}
