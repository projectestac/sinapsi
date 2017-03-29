<template>
    <div class="dropdown">
        <p><strong>{{ trans('messages.regionals_services') }}</strong> <span v-html="sstt_DB.join()"></span></p>
        <multiselect v-model="sstt_UI"
            :placeholder="trans('messages.filter_by_one_or_more_regional_services')"
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
            sstt_UI: [],
            sstt_DB: [],
            options: [
                {'ID':1,'text': messages['girona'] },
                {'ID':2,'text': messages['baix_llobregat'] },
                {'ID':3,'text': messages['tarragona'] },
                {'ID':4,'text': messages['barcelona_education'] },
                {'ID':5,'text': messages['lleida'] },
                {'ID':6,'text': messages['terres_ebre']},
                {'ID':7,'text': messages['comarques_barcelona'] },
                {'ID':8,'text': messages['voriental_maresma']},
                {'ID':9,'text': messages['voccidental']},
                {'ID':10,'text': messages['central_catalonia']},
            ]
        }
    },
    mounted: function(){

        var st_name ="";
        var that = this;

        //from ui
        $.each(this.from_UI, function( index, st ) {
            st_name = $.grep(that.options, function(e){ return e.ID == st.ID; });
            that.sstt_UI.push({ 'ID': st.ID ,'text': st_name[0].text });
        });

        if (this.from_DB) {
            $.each(this.from_DB.split(","), function (index, tag) {
                st_name = $.grep(that.options, function (e) {
                    return e.ID == tag;
                });
                that.sstt_DB.push(st_name[0].text);
            });
        }

    },
    watch: {
        sstt_UI: function () {
            bus.$emit('filters_changed','st',this.sstt_UI);
        }
    }
}
</script>
