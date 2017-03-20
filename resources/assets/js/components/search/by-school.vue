<template>
    <div class="dropdown">

        <p><strong>{{ trans('messages.schools') }}</strong> {{ schools_DB.join(", ") }}</p>
        <multiselect v-model="schools_UI"
                    :placeholder="trans('messages.filter_by_one_or_more_schools')"
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

export default {

    props:['from_UI','from_DB'],
    components: {
        Multiselect
    },
    data () {
        return {
            schools_UI: [],
            schools_DB: [],
            options:[],
            errors:[],
        }
    },

    watch: {
        schools_UI: function () {
            this.$emit('filters_changed','s',this.schools_UI);
        }
    },

    created: function(){
        this.get_schools();
    },
   
    methods: {

        get_schools: function(){
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl + '/api/v1/schools',
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    this.options = response;
                    var school_name ="";

                    var that = this;
                    $.each(this.from_UI, function( index, school ) {
                        school_name = $.grep(that.options, function(e){ return e.ID == school.ID; });
                        that.schools_UI.push({ 'ID': school.ID ,'text': school_name[0].text });
                    });
                    if (this.from_DB) {
                        $.each(this.from_DB.split(","), function (index, school) {
                            school_name = $.grep(that.options, function (e) {
                                return e.ID == school
                            });
                            that.schools_DB.push(school_name[0].text);
                        });
                    }

                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });
        }

    }
}

</script>
