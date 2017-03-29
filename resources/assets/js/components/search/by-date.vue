<template>
    <div class="form-group">
        <p><strong>{{ trans('messages.date_range') }}</strong>{{ sd_DB }} {{ trans('messages.to') }} {{ ed_DB }}</p>
        <div class="row">
            <div class="col-md-12">
                <input v-model="sd_UI" type="date" class="sns-date">
                    &nbsp;&nbsp; {{ trans('messages.to') }} &nbsp;&nbsp;
                <input  v-model="ed_UI" type="date" class="sns-date">
            </div>
        </div>
    </div>
</template>


<script>

import Multiselect from 'vue-multiselect'

export default {
    props:['from_UI','from_DB'],
    components: {
        Multiselect
    },
    data () {
        return {
            sd_UI: this.from_UI ? this.from_UI.sd[0].text : '',
            ed_UI: this.from_UI ? this.from_UI.ed[0].text : '',
            sd_DB: this.from_DB ? this.from_DB.sd : '',
            ed_DB: this.from_DB ? this.from_DB.ed : '',
        }
    },
    watch: {
        sd_UI: function () {
            bus.$emit('filters_changed','sd',this.sd_UI);
        },
        ed_UI: function () {
            bus.$emit('filters_changed','ed',this.ed_UI);
        },

    }
}
</script>
