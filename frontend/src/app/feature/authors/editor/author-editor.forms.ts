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


/** Author synapse form */
export const SYNAPSE_FORM = fb.group({
    id: null,
    description: [ null, V.maxLength(255) ],
    name: [ null, [V.required, V.maxLength(150)] ],
    slug: [ null, [V.required, V.maxLength(254), SV.slug] ]
});


/** Author feeds form */
export const FEEDS_FORM = fb.group({
    feeds: arrayForGroup(25, {
        id: null,
        url: [ null, [V.maxLength(512), SV.http(true)] ]
    })
});


/** School form group */
export const SCHOOL_FORM = fb.group({
    municipality: null,
    territory: null,
    synapse: SYNAPSE_FORM,
    school: fb.group({
        id: null,
        name: [ null, [V.required, V.maxLength(150)] ]
    })
});


/** Project form group */
export const PROJECT_FORM = fb.group({
    municipality: null,
    territory: null,
    school: null,
    synapse: SYNAPSE_FORM,
    project: fb.group({
        id: null,
        name: [ null, [V.required, V.maxLength(150)] ]
    })
});


/** User form group */
export const USER_FORM = fb.group({
    municipality: null,
    territory: null,
    school: null,
    synapse: SYNAPSE_FORM,
    user: fb.group({
        id: null,
        email: [ null, [V.required, V.email] ],
        name: [ null, [V.required, V.maxLength(150)] ]
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
