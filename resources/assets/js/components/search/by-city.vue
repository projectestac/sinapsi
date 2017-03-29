<template>
    <div class="dropdown">
        <p><strong>{{ trans('messages.cities') }} </strong>{{ cities_DB }}</p>
        <multiselect v-model="cities_UI"
            :placeholder="trans('messages.filter_by_one_or_more_cities')"
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
            cities_UI: this.from_UI ? this.from_UI : "",
            cities_DB:this.from_DB ? this.from_DB : "",
            options:this.from_UI ? this.from_UI : [],
            errors:[],
        }
    },
    watch: {
        cities_UI: function () {
            bus.$emit('filters_changed','l',this.cities_UI);
        }
    },
    mounted: function(){
        this.get_cities();
    },
    methods: {
        get_cities: function(){
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl + '/api/v1/cities',
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    this.options = response;
                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });

        }
    }
}
</script>
