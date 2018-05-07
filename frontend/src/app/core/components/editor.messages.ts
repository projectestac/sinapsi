import { _ } from 'i18n';


/**
 * Static message functions.
 */
export class EditorMessages {

    /** The form was successfully saved */
    static readonly SaveSuccess = () =>
        _('The form data has been successfully saved.');


    /** The form cannot be saved because it's not valid  */
    static readonly ValidationError = () =>
        _('The form has errors, please correct them before saving.');


    /** Reset the form confirmation dialog */
    static readonly ResetConfirm = () => ({
        type: 'confirm',
        confirm: _('Reset form'),
        text: `
          <p>
            ${ _('Do you want to reset the form to its initial state?') }
          </p>
          <p>
            <small class="text-muted">
              ${ _('Any changes you made to the form will be lost.') }
            </small>
          </p>`
    });


    /** Unsaved changes confirmation dialog */
    static readonly DeactivateConfirm = () => ({
        type: 'confirm',
        confirm: _('Leave this page'),
        text: `
          <p>
            ${ _('The form has unsaved changes. ' +
                 'Do you want to leave this page without saving them?') }
          </p>
          <p>
            <small class="text-muted">
              ${ _('Any changes you made to the form will be lost.') }
            </small>
          </p>`
    });

}
