import { Comment } from 'app/models';
import { _, format, ellipsis } from 'i18n';


/**
 * Static message functions.
 */
export class CommentsMessages {

    /** The synapse was successfully deleted */
    static readonly RemoveSuccess = (comment) => format(
        _('The comment «{name}» has been deleted.'),
         { name: ellipsis(comment.content) }
    );


    /** Delete synapse confirmation dialog */
    static readonly RemoveConfirm = (comment) => ({
        refuse:  _('Cancel'),
        confirm: _('Delete comment'),
        text: `
          <p>
            ${format(
              _('Do you want to delete «<strong>{name}</strong>»?'),
               { name: ellipsis(comment.content) }
            )}
          </p>
          <p>
            <small class="text-muted">
              ${ _('This action cannot be undone.') }
            </small>
          </p>`
    });

}
