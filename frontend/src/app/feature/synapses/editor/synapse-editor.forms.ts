import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedValidators } from 'app/shared';
import { Author } from 'app/models';
import { _ } from 'i18n';


/** Validators alias */
const V = Validators;

/** SharedValidators alias */
const SV = SharedValidators;

/** Form builder instance */
const fb = new FormBuilder();


/** Synapse form group */
export const SYNAPSE_FORM = fb.group({
    filters: null,
    search: null,
    synapse: null,
    view: 'optimal',
    description: [ null, V.maxLength(255) ],
    name: [ null, [V.required, V.maxLength(150)] ],
    slug: [ null, [SV.slug, V.required, V.maxLength(254)] ]
});


/** Block form group */
export const BLOCK_FORM = fb.group({
    title: [ _('Untitled block'), V.maxLength(255) ],
    content: null,
    options: fb.group({
        type: 'basic',
        color: 'black',
        href: [ null, [V.maxLength(512), SV.http(false)] ],
        image_url: [ null, [V.maxLength(512), SV.http(false)] ],
        profile: [ null, SV.twitter ]
    })
});


/** Synapse privileges form group */
export const PRIVILEGES_FORM = fb.group({
    privileges: arrayForGroup(25, {
        id: null,
        user: [null, V.required],
        role: [null, V.required]
    })
});


/**
 * Create a FormArray for the given FormGroup configuration.
 *
 * @param n         Number of groups on the array
 * @param config    Form group configuration
 *
 * @returns         A form array of form groups
 */
function arrayForGroup(n: number, config: any): FormArray {
    const groups: FormGroup[] = [];

    for (let i = 0; i < n; i++) {
        groups.push(fb.group(config));
    }

    return fb.array(groups);
}
