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


/**
 * Block form group
 */
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


/**
 * Filters form group
 */
export const FILTERS_FORM = fb.group({
    author_id: null,
    municipality_id: null,
    search: null,
    sort: null,
    tag_id: null,
    territory_id: null,
    view: 'optimal',
    "max-published_at": null,
    "min-published_at": null
});


/**
 * Privilege form group
 */
export const PRIVILEGE_FORM = fb.group({
    user: [null, V.required],
    role: ['viewer', V.required]
});


/**
 * Synapse form group
 */
export const SYNAPSE_FORM = fb.group({
    blocks: [],
    filters: FILTERS_FORM,
    synapse: null,
    description: [ null, V.maxLength(255) ],
    name: [ null, [V.required, V.maxLength(150)] ],
    slug: [ null, [SV.slug, V.required, V.maxLength(254)] ]
});


/**
 * Synapse editor form group
 */
export const EDITOR_FORM = fb.group({
    block: BLOCK_FORM,
    synapse: SYNAPSE_FORM,
    blocks: [[]],
    privileges: [[]]
});
