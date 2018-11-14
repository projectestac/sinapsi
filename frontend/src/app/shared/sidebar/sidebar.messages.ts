import { _, format } from 'i18n';


/**
 * Static message functions.
 */
export class SidebarMessages {

    /** Remove block confirmation dialog */
    static readonly RemoveConfirm = () => ({
        type: 'confirm',
        confirm: _('Delete'),
        text: `
          <p>${_('Do you want to delete this block?')}</p>
          <p>
            <small class="text-muted">
              ${ _('This action cannot be undone.') }
            </small>
          </p>`
    });

}
