<template>

    <div class="dropdown">

        <multiselect
            v-model="users"
            label="text"
            track-by="ID"
            :placeholder="trans('messages.select_one_or_more_users')"
            :deselect-label="trans('messages.remove_to_selection')"
            :options="options"
            :multiple="true"
            :searchable="true"
            :loading="isLoading"
            :internal-search="false"
            :close-on-select="false"
            :options-limit="50"
            @search-change="get_users">
        </multiselect>
        <input type="hidden" :name="usertype" :value="get_users_id">

    </div>

</template>

<script>

import Multiselect from 'vue-multiselect'

export default {

    props:['selected','type'],
        components: {
        Multiselect
    },
    data () {
        return {
            isLoading: false,
            users: this.selected,
            options:[],
            errors:[],
            usertype: this.type
        }
    },
    computed: {
        get_users_id: function (){
            var array = $.map(this.users, function(value, index) {
                    return [value.ID];
                });
        return array;
        }


    },
    methods: {
        set_user (query) {
            this.isLoading = true
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl + '/api/v1/user/id/' + query,
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    this.options = response;
                    this.users.push({ 'ID': response[0].ID ,'text': response[0].text });
                    this.isLoading = false;
                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    console.log(message);
                    this.errors.push(message);
                }.bind(this)
            });
        },


        get_users: _.throttle(function (query) {
            
            if (query){
                this.isLoading = true;
                setTimeout(function () {
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: shared.baseUrl + '/api/v1/user/name/' + query,
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
