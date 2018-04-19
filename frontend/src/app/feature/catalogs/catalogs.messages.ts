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


    /** The tag was successfully restored */
    static readonly RestoreTagSuccess = (tag) => format(
        _('The tag «<strong>{name}</strong>» has been restored.'),
         { name: tag.name }
    );


    /** Delete synapse confirmation dialog */
    static readonly RemoveSynapseConfirm = (tag) => ({
        type: 'confirm',
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
        type: 'confirm',
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
              ${_(
                'The tag will not longer show on search results but can' +
                'be restored later on.'
               )}
            </small>
          </p>`
    });


    /** Create synapse prompt dialog */
    static readonly CreateSynapsePrompt = () => ({
        type: 'prompt',
        confirm: _('Create synapse'),
        prompt: _('Name of the synapse'),
        text: `<p>${_('Please enter a name for the new synapse.')}</p>`
    });


    /** Create tag prompt dialog */
    static readonly CreateTagPrompt = (tag) => ({
        type: 'prompt',
        confirm: _('Create synapse'),
        prompt: _('Name of the synapse'),
        text: `
          <p>
            ${format(
               _('No synapse exists for the tag «<strong>{name}</strong>».'),
               { name: tag.name }
            )}
          </p>
          <p>
            <small class="text-muted">
              ${_('To edit the tag, a synapse must be created.')}
              ${_('Please enter a name to create a new synapse for the tag.')}
            </small>
          </p>`
    });

}
