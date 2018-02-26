import { Tag, Synapse } from 'app/models';
import { _, format } from 'i18n';


/**
 * Static message functions.
 */
export class CatalogMessages {

    /** The synapse was successfully deleted */
    static readonly RemoveSynapseSuccess = (tag) => format(
        _('The synapse «<strong>{name}</strong>» has been deleted.'),
         { name: tag.name }
    );


    /** The tag was successfully deleted */
    static readonly RemoveTagSuccess = (tag) => format(
        _('The tag «<strong>{name}</strong>» has been deleted.'),
         { name: tag.name }
    );


    /** Delete synapse confirmation dialog */
    static readonly RemoveSynapseConfirm = (tag) => ({
        refuse:  _('Cancel'),
        confirm: _('Delete synapse'),
        text: `
          <p>
            ${format(
              _('Do you want to delete «<strong>{name}</strong>»?'),
               { name: tag.name }
            )}
          </p>
          <p>
            <small class="text-muted">
              ${ _('This action cannot be undone.') }
            </small>
          </p>`
    });


    /** Delete tag confirmation dialog */
    static readonly RemoveTagConfirm = (tag) => ({
        refuse:  _('Cancel'),
        confirm: _('Delete tag'),
        text: `
          <p>
            ${format(
              _('Do you want to delete «<strong>{name}</strong>»?'),
               { name: tag.name }
            )}
          </p>
          <p>
            <small class="text-muted">
              ${_(`
                The tag will not longer show on search results but can
                be restored later on.
              `)}
            </small>
          </p>`
    });

}
