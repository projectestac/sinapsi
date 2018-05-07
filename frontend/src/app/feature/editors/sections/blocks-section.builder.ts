import { FormBuilder, Validators } from '@angular/forms';
import { SharedValidators } from 'app/shared';
import { _ } from 'i18n';


/** Validators alias */
const V = Validators;

/** SharedValidators alias */
const SV = SharedValidators;

/** Form builder instance */
const fb = new FormBuilder();


/**
 * Block form builder.
 */
export class BlockFormBuilder {

    /**
     * Block options form group.
     */
    static createOptionsForm = () => fb.group({
        type: 'basic',
        color: 'black',
        href: [ null, [V.maxLength(512), SV.http(false)] ],
        image_url: [ null, [V.maxLength(512), SV.http(false)] ],
        profile: [ null, SV.twitter ]
    });


    /**
     * Block form group.
     */
    static createBlockForm = () => fb.group({
        content: null,
        title: [ _('Untitled block'), V.maxLength(255) ],
        options: BlockFormBuilder.createOptionsForm()
    });

}
