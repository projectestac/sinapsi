<template>

    <div class="row well well-sm">

        <div class="col-md-12">
            <img class="sns-avatar" :src="comment.user_avatar">&nbsp;&nbsp;
            <a class="user_link" target="_blank" :href="baseurl + '/user/' + comment.user_id">{{ comment.user_name }}</a> {{ trans('messages.say') }}
            <span class="sns-date pull-right">
                <span :title="comment.created_at">{{ comment.created_at | timeago }}</span>
            </span>
        </div>

        <div class="col-md-12">
            <p class="cos_bloc basic_text_peq pd-15" v-html="comment.text"></p>
            <div v-if="user_can_delete" class="sns-metacomment">
                <a class="btn btn-default sns-btn-post-options" :title="esborrar" @click="delete_comment($event)">
                        <span class="glyphicon glyphicon glyphicon-trash"></span>
                </a>
            </div>
        </div>

    </div>

</template>

<script>

export default {
  
  props:[ 'c' ],
  data () {
    return {
        comment: this.c,
        errors: this.errors,
        baseurl: shared.baseUrl,
        user: shared.user.logged ? JSON.parse(shared.user.data) : '',
        user_can_post_edit: shared.user.can_post_edit,
    }
  },
  computed:{

     user_can_delete: function(){
       
        if (this.user_can_post_edit || this.user.id == this.c.user_id){
            return true;
        }
        return false;
    }
  },  
  methods:{

        edit_comment: function(event){
            //TODO
        },

        delete_comment: function(event){

            var btn = event.currentTarget.childNodes[0];
            $(btn).addClass('gly-spin');
           
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl + '/api/v1/comment/'+this.c.id,
                method: 'DELETE',
                dataType: 'json',

                success: function (data) {
                    bus.$emit('delete_comment',this.c);
                    $(btn).removeClass('gly-spin');
                }.bind(this),

                error: function (jqXHR, textStatus, message) {
                    switch (message){
                        case 'Unauthorized':
                            this.errors.push( trans('messages.you_need_log_in_to_do_this_action') );
                            break;
                        case 'Internal Server Error':
                            this.errors.push( trans('messages.there_was_an_error') );
                            break;
                        default:
                            this.errors.push( trans('messages.the_server_not_respond') );
                    }
                    $(btn).removeClass('gly-spin');

                }.bind(this)
            });
        }
    }

}

</script>

<style>

.user_link {
    font-style: italic;
}

</style>