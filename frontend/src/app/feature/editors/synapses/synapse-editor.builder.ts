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
 * Synapse form builder.
 */
export class SynapseFormBuilder {

    /**
     * Filters form group.
     */
    static createFiltersForm = () => fb.group({
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
     * Synapse form group.
     */
    static createSynapseForm = () => fb.group({
        blocks: null,
        synapse: null,
        filters: SynapseFormBuilder.createFiltersForm(),
        description: [ null, V.maxLength(255) ],
        name: [ null, [V.required, V.maxLength(150)] ],
        slug: [ null, [SV.slug, V.required, V.maxLength(254)] ]
    });
    
    
    /**
     * Synapse editor form group.
     */
    static createEditorForm = () => fb.group({
        blocks: [ new Array() ],
        privileges: [ new Array() ],
        synapse: SynapseFormBuilder.createSynapseForm()
    });

}
