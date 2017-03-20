<template>

        <div class="btn-group" v-if="user_can_post_edit">

            <button type="button" class="btn btn-default dropdown-toggle sns-btn-post-options"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="glyphicon glyphicon glyphicon-cog"></span> <span class="caret"></span>
            </button>

            <ul class="dropdown-menu">

                <li><a :href="baseurl  + '/post/' + post.id + '/edit'">
                        <span class="glyphicon glyphicon glyphicon-pencil"></span> {{ trans('messages.edit') }}
                    </a>
                </li>

                <li><a :href="baseurl  + '/post/' + post.id + '/refresh'">
                        <span class="glyphicon glyphicon glyphicon-refresh"></span> {{ trans('messages.reload') }}
                    </a>
                </li>

                <li v-if="!post.hidden">
                    <a :href="baseurl + '/post/' + post.id +'/hide'">
                        <span class="glyphicon glyphicon glyphicon-eye-close"></span> {{ trans('messages.hide') }}
                    </a>
                </li>
                <li v-else>
                    <a :href="baseurl  + '/post/' + post.id + '/unhide'">
                        <span class="glyphicon glyphicon glyphicon-eye-open"></span> {{ trans('messages.show') }}
                    </a>
                </li>

                <li>
                    <a class="red" :href="baseurl  + '/post/' + post.id +'/destroy'">
                        <span class="glyphicon glyphicon glyphicon-trash"></span> {{ trans('messages.delete') }}
                    </a>
                </li>

                <li>
                    <sticky :p="post"></sticky>
                </li>

                <li v-if="user.sinapsi_dst">
                    <a :href="baseurl+'/post/'+post.id+'/in/sinapsi/'+user.sinapsi_dst">
                        <span class="glyphicon glyphicon glyphicon-log-in"></span> {{ trans('messages.include_to') }} {{ user.sinapsi_dst }}
                    </a>
                </li>
                <li v-if="user.sinapsi_dst">
                    <a :href="baseurl+'/post/'+post.id+'/out/sinapsi/'+user.sinapsi_dst">
                        <span class="glyphicon glyphicon glyphicon-log-out"></span> {{ trans('messages.remove_to') }} {{ user.sinapsi_dst }}
                    </a>
                </li>

        </ul>
        </div>
   
</template>

<script>

import sticky from './sticky.vue';

export default {
    props:['p'],
    components:{
        sticky
    },
    data (){
        return {
            baseurl: location.protocol + "//" + location.host,
            post: this.p,
            user_can_post_edit: shared.user.can_post_edit
        }
    },
    computed:{
        user: function(){
            if (shared.user.logged){
                return JSON.parse(shared.user.data);
            } else{
                return false
            }
        }
    },

}
</script>