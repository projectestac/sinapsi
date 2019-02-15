import { FormBuilder, Validators } from '@angular/forms';
import { SharedValidators } from 'app/shared';
import { UserRole } from 'app/models';
import { _ } from 'i18n';


/** Validators alias */
const V = Validators;

/** SharedValidators alias */
const SV = SharedValidators;

/** Form builder instance */
const fb = new FormBuilder();


/**
 * Author form builder.
 */
export class AuthorFormBuilder {

    /**
     * Synapse form group.
     */
    static createSynapseForm = () => fb.group({
        blocks: null,
        description: [ null, V.maxLength(512) ],
        name: [ null, [V.required, V.maxLength(255)] ],
        slug: [ null, [SV.slug, V.required, V.maxLength(255)] ]
    });


    /**
     * Author form group.
     */
    static createAuthorForm = () => fb.group({
        category: null,
        municipality: null,
        territory: null,
        school: null
    });


    /**
     * User form group.
     */
    static createUserForm = () => fb.group({
        role: [ UserRole.AUTHOR ]
    });


    /**
     * Synapse editor form group.
     */
    static createEditorForm = () => fb.group({
        blocks: [ new Array() ],
        feeds: [ new Array() ],
        author: AuthorFormBuilder.createAuthorForm(),
        synapse: AuthorFormBuilder.createSynapseForm(),
        user: AuthorFormBuilder.createUserForm()
    });

}
