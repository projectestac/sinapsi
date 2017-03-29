<template>
    <div class="dropdown">

        <p><strong>{{ trans('messages.project') }}</strong> {{ projects_DB.join(", ") }}</p>
        <multiselect v-model="projects_UI"
                    :placeholder="trans('messages.filter_by_one_or_more_projects')"
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
            projects_UI: [],
            projects_DB: [],
            options:[],
            errors:[],
        }
    },

    watch: {
        projects_UI: function () {
            bus.$emit('filters_changed','p',this.projects_UI);
        }
    },

    created: function(){
        this.get_projects();
    },
   
    methods: {

        get_projects: function(){
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl + '/api/v1/projects',
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    this.options = response;
                    var project_name ="";

                    var that = this;
                    $.each(this.from_UI, function( index, project ) {
                        project_name = $.grep(that.options, function(e){ return e.ID == project.ID; });
                        that.projects_UI.push({ 'ID': project.ID ,'text': project_name[0].text });
                    });
                    
                    if (this.from_DB) {
                        $.each(this.from_DB.split(","), function (index, project) {
                            project_name = $.grep(that.options, function (e) {
                                return e.ID == project
                            });
                            that.project_DB.push(project_name[0].text);
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
