<template>

    <div class="row sns-post-small">

        <div  v-if="!post.fullcontent" style="float:left;margin:0 10px">
            <img v-if="post.thumb" class="sns-post-thumb-small" :src="post_thumb" :alt="imatge">
            <div v-else class="sns-post-thumb-small"></div>
        </div>

        <div>
            <post_head :p="post"></post_head>
            <h2>
                <a v-if="post.title" @click.prevent="post.fullcontent=(post.fullcontent)?false:true" >{{ post.title }}</a>
                <a v-else @click.prevent="post.fullcontent=(post.fullcontent)?false:true" >{{ trans('messages.without_title') }}</a>
            </h2>


            <div v-if="post.fullcontent">

                <div v-if="!post.fullcontent" class="cos_bloc basic_text_peq pd-15" v-html="post_description"></div>
                <div v-else class="cos_bloc basic_text_peq pd-15" v-html="post.content"></div>

                <div class="post-tags">
                    <span v-for="tag in tags" class="label label-white">
                        <a :href="base_url + '/tag/' + tag">{{tag}}</a>
                </span>
                <br><br>
                </div>

                <post_foot :p="post"></post_foot>
            </div>

        </div>
        <hr>
    </div>


</template>


<script>

import post_head from "./partials/head.vue";
import post_foot from "./partials/foot.vue";

export default {
    props:['p','u','s'],
    components: {
        post_head,
        post_foot
    },
    data () {
        return {
            base_url : location.protocol + "//" + location.host,
            post_description : this.strip_tags(this.p.description),
            post_thumb :  this.build_url(this.p.thumb),
            tags : this.split_tags(this.p.tags),
            post: this.p,
            user: this.u,
            sinapsi_id: this.s
        }
    },
    methods:{
        strip_tags: function(str){
            var allow = "<a>";
            // making sure the allow arg is a string containing only tags in lowercase (<a><b><c>)
            allow = (((allow || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
            var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
            return str.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
                return allow.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
            });
        },
        build_url: function (url){
            if ( !url.startsWith('http') ){
                url = location.protocol + "//" + location.host +"/" + url;
            }
            return url;
        },
        split_tags: function (str){
            return (str)? str.split(', ') : [];
        },

    }
}
</script>
