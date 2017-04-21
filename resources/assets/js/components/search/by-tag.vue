<template>

    <div class="row">

        <div class="col-md-3 hidden-xs">
            <label for="orderby">{{ trans('messages.descriptors') }}:</label>
        </div>

        <div class="col-md-9">
            <div class="dropdown">
                <multiselect
                    v-model="tags_UI"
                    label="text"
                    track-by="ID"
                    :placeholder="trans('messages.filter_by_one_or_more_descriptors')"
                    :deselect-label="trans('messages.remove_to_selection')"
                    :options="options"
                    :multiple="true"
                    :searchable="true"
                    :loading="isLoading"
                    :internal-search="false"
                    :close-on-select="false"
                    :options-limit="50"
                    :max-height="150"
                    @search-change="get_tags">
            </multiselect>
            </div>
        </div>

    </div>

</template>

<script>

import Multiselect from 'vue-multiselect'


export default {

    props:['from_UI', 'from_DB'],
    components: {
        Multiselect
    },
    data () {
        return {
            tags_UI: [],
            tags_DB: [],
            options:[],
            errors:[],
        }
    },
    watch: {
        'tags_UI': function () {
           bus.$emit('filters_changed','t',this.tags_UI);
        }
    },

    mounted: function() {

        var that = this;
        $.each(this.from_UI, function( index, tag ) {
            that.set_tag (tag.ID);
        });

        if (this.from_DB) {
            that = this;
            $.each(this.from_DB.split(","), function (index, id) {
                that.set_tag(id);
            });
        }
    },

    methods: {
        set_tag (query) {
            this.isLoading = true
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl + '/api/v1/tag/id/'+query,
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    this.options = response;
                    this.tags_UI.push({ 'ID': response[0].ID ,'text': response[0].text });
                    this.isLoading = false;
                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });
        },

        get_tags: _.throttle(function (query) {
            this.isLoading = true;
            setTimeout(function () {
                $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: shared.baseUrl + '/api/v1/tag/name/'+query,
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

    },
}
</script>
