<template>

    <ul class="pagination sns-pagination-mini">
        <span v-if="total_posts!=0" class="sns-total-results" v-html="msg_results"></span>

        <div v-if="total_posts==0" class="sns-total-results-void">
            {{ trans('messages.no_results_founds') }}<br><br>
            {{ trans('messages.operator_to_expand_search') }}<br>
            <ul>
                <li>{{ trans('messages.example_operator_1') }}</li>
                <li>{{ trans('messages.example_operator_2') }}</li>
            </ul>
        </div>
    </ul>
</template>

<script>

    var messages = _.get(window.trans, 'messages');

    export default {
        data(){
            return {
                total_posts: messages['processing_2']
            }
        },
        computed:{
            msg_results: function(){
                if (this.total_posts == 1 ){
                    return messages['found_1_result'];
                }
                return  messages['found'] + " <strong>" + this.total_posts +"</strong> " +  messages['results'];
            }
        },
        mounted: function(){

            bus.$on('pagination_available', function(pagination){
                this.total_posts = pagination.total_posts;
            }.bind(this));

            bus.$on('searching', function(){
                this.total_posts = messages['processing_2'];
            }.bind(this));

        },
    }
</script>