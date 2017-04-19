<template>

    <div class="row">

        <div class="col-md-3 hidden-xs">
            <label for="orderby">{{ trans('messages.projects') }}:</label>
        </div>

        <div class="col-md-9">
            <div class="dropdown">

                <multiselect
                    v-model="projects_UI"
                    label="text"
                    track-by="ID"
                    :placeholder="trans('messages.filter_by_one_or_more_projects')"
                    :deselect-label="trans('messages.remove_to_selection')"
                    :options="options"
                    :multiple="true"
                    :searchable="true"
                    :loading="isLoading"
                    :internal-search="false"
                    :close-on-select="false"
                    :options-limit="50"
                    @search-change="get_projects">
                </multiselect>

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
            isLoading: false,
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

    mounted: function() {

        var that = this;
        $.each(this.from_UI, function( index, project ) {
            that.set_project (project.ID);
        });

        if (this.from_DB) {
            that = this;
            $.each(this.from_DB.split(","), function (index, id) {
                that.set_project(id);
            });
        }
    },
   
    methods: {

        set_project (id) {
            this.isLoading = true
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl + '/api/v1/project/id/'+id,
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    this.options = response;
                    // ID is the channel id, not the project id
                    this.projects_UI.push({ 'ID': response[0].ID ,'text': response[0].text });
                    this.isLoading = false;
                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });
        },

        get_projects: _.throttle(function (query) {
            this.isLoading = true;
            setTimeout(function () {
                this.isLoading = true
                $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: shared.baseUrl + '/api/v1/project/name/'+query,
                    method: 'GET',
                    dataType: 'json',
                    success: function (response) {
                        this.options = response;
                        this.isLoading = false;
                    }.bind(this),
                    error: function (jqXHR, textStatus, message) {
                        this.errors.push(message);
                    }.bind(this)
                });
            }.bind(this), 2000)
        }, 1000)

    }
}

</script>
