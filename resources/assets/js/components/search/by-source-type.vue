<template>

    <div class="row">

        <div class="col-md-3 hidden-xs">
            <label for="orderby">{{ trans('messages.source_type') }}:</label>
        </div>

        <div class="col-md-9">
            <div class="dropdown">
                <multiselect v-model="sources_type_UI"
                    :placeholder="trans('messages.filter_by_one_or_more_source_type')"
                    :deselect-label="trans('messages.remove_to_selection')"
                     label="text"
                    :max-height="150"
                     track-by="ID"
                    :options="options"
                    :multiple="true"
                    :taggable="true"
                    :close-on-select="false"
                >
                </multiselect>
            </div>
        </div>
    </div>

</template>

<script>

import Multiselect from 'vue-multiselect'

var messages = _.get(window.trans, 'messages');

export default {
    props:['from_UI','from_DB'],
    components: {
        Multiselect
    },
    data () {
        return {
            sources_type_UI: this.from_UI ? this.from_UI : "",
            sources_type_DB: this.from_DB ? this.from_DB : "",
            options: [
                {'ID':'LLI','text': messages['nursery']},
                {'ID':'PRI','text': messages['primary']},
                {'ID':'SEC','text': messages['secondary']},
                {'ID':'IE','text': messages['institute_school']},
                {'ID':'Adults','text': messages['adults']},
                {'ID':'ZER','text': messages['zer']},
                {'ID':'EOI','text': messages['eoi']},
                {'ID':'MUSDANS','text': messages['dance_and_music']},
                {'ID':'EE','text': messages['special_education']},
                {'ID':'ESTR','text': messages['foreign']},
                {'ID':'CdA','text': messages['fields_learning']},
                {'ID':'SEZ','text': messages['educational_services']},
                {'ID':'CLIC','text': messages['click']},
                {'ID':'CREDA','text': messages['creda']},
                {'ID':'ST','text': messages['st']},
                {'ID':'Projecte','text': messages['project']},
            ]
        }
    },
    watch: {
        sources_type_UI: function () {
            bus.$emit('filters_changed','y',this.sources_type_UI);
        }
    },
}
</script>
