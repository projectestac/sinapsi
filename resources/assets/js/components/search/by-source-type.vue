<template>
    <div class="dropdown">

        <p><strong>{{ trans('messages.source_type') }}</strong> {{ sources_type_DB }}</p>
        <multiselect v-model="sources_type_UI"
            :placeholder="trans('messages.filter_by_one_or_more_source_type')"
            :deselect-label="trans('messages.remove_to_selection')"
             label="text"
             track-by="ID"
            :options="options"
            :multiple="true"
            :taggable="true"
            :close-on-select="false"
        >
    </multiselect>
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
                {'ID':'Escola','text': messages['school']},
                {'ID':'Institut','text': messages['high_school']},
                {'ID':'IE','text': messages['institute_school']},
                {'ID':'SEZ','text': messages['educational_services']},
                {'ID':'Blog','text': messages['personal_blog']},
                {'ID':'ZER','text': messages['zer']},
                {'ID':'CFA','text': messages['adults']},
                {'ID':'CdA','text': messages['fields_leraning']},
                {'ID':'CREDA','text': messages['creda']},
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
