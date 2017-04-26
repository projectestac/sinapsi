<template>
    <div class="row">

        <div class="col-md-3 hidden-xs">
            <label for="orderby">{{ trans('messages.cities') }}:</label>
        </div>

        <div class="col-md-9">
            <div class="dropdown">
                <multiselect
                    v-model="cities_UI"
                    label="text"
                    track-by="ID"
                    :placeholder="trans('messages.filter_by_one_or_more_cities')"
                    :options="options"
                    :multiple="true"
                    :searchable="true"
                    :loading="isLoading"
                    :internal-search="false"
                    :close-on-select="false"
                    :options-limit="50"
                    :max-height="150"
                    @search-change="get_cities">
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
            cities_UI: this.from_UI ? this.from_UI : [],
            cities_DB:this.from_DB ? this.from_DB : [],
            options:this.from_UI ? this.from_UI : [],
            errors:[],
        }
    },
    watch: {
        cities_UI: function () {
            bus.$emit('filters_changed','l',this.cities_UI);
        }
    },
    mounted: function() {
        if (this.from_DB) {
            var that = this;
            $.each(this.from_DB.split(","), function (index, city) {
                that.set_city(city);
            });
        }
    },

    methods: {

        set_city (city) {
            this.cities_UI.push({ 'ID': city ,'text': city });
        },

        get_cities: _.throttle(function (query) {
            
            if (query){
                this.isLoading = true;
                setTimeout(function () {
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: shared.baseUrl + '/api/v1/city/' + query,
                        method: 'GET',
                        dataType: 'json',
                        success: function (response) {
                            this.options = response;
                            this.isLoading = false;
                        }.bind(this),
                        error: function (jqXHR, textStatus, message) {
                            console.log(message);
                            this.errors.push(message);
                        }.bind(this)
                    });
                }.bind(this), 2000);
            }
        }, 1000)

    }
}

</script>
