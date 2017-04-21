<template>

    <div class="row">

        <div class="col-md-3 hidden-xs">
            <label for="orderby">{{ trans('messages.schools') }}:</label>
        </div>

        <div class="col-md-9">
            <div class="dropdown">

                <multiselect
                    v-model="schools_UI"
                    label="text"
                    track-by="ID"
                    :placeholder="trans('messages.filter_by_one_or_more_schools')"
                    :deselect-label="trans('messages.remove_to_selection')"
                    :options="options"
                    :multiple="true"
                    :searchable="true"
                    :loading="isLoading"
                    :internal-search="false"
                    :close-on-select="false"
                    :options-limit="50"
                    :max-height="150"
                    @search-change="get_schools">
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
            schools_UI: [],
            schools_DB: [],
            options:[],
            errors:[],
        }
    },

    watch: {
        schools_UI: function () {
            bus.$emit('filters_changed','s',this.schools_UI);
        }
    },

    mounted: function() {
        var that = this;
        $.each(this.from_UI, function( index, school ) {
            that.set_school (school.ID);
        });

        if (this.from_DB) {
            that = this;
            $.each(this.from_DB.split(","), function (index, id) {
                that.set_school(id);
            });
        }
    },
    
    methods: {
        set_school (query) {
            this.isLoading = true
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl + '/api/v1/school/id/'+query,
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    this.options = response;
                    this.schools_UI.push({ 'ID': response[0].ID ,'text': response[0].text });
                    this.isLoading = false;
                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });
        },

        get_schools: _.throttle(function (query) {
            this.isLoading = true;
            setTimeout(function () {
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl + '/api/v1/school/name/'+query,
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
