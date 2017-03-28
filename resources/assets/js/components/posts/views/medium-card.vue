<template>

<div class="sns-post">
    <div class="row">
        <div :class="{'col-md-9':!post.fullcontent,
                      'col-sm-8':!post.fullcontent,
                      'col-md-12':post.fullcontent,
                      'sns-post-content':post.fullcontent
                      }">

            <div class="row">

                <div v-if='post.tsticky' class='col-md-1'>
                    <span class="glyphicon glyphicon-pushpin sns-sticky" aria-hidden="true"></span>
                </div>

                <div :class="{'col-md-11':post.tsticky,'col-md-12':!post.tsticky }">

                    <post_head :p="post"></post_head>

                    <h3>
                        <a v-if="post.title" @click.prevent="post.fullcontent=(post.fullcontent)?false:true" >{{ post.title }}</a>

                        <a v-else @click.prevent="post.fullcontent=(post.fullcontent)?false:true" >{{ trans('messages.without_title') }}</a>

                        <a class="sns_link_icon" :href="post.link" target="_blank">
                            <span class="glyphicon glyphicon glyphicon-link"></span>
                        </a>
                    </h3>

                </div>
            </div>

            <div v-if="!post.fullcontent" class="cos_bloc basic_text_peq pd-15" v-html="post_description"></div>

            <div v-else class="cos_bloc basic_text_peq pd-15" v-html="post.content"></div>


            <div class="post-tags">
                <span v-for="tag in tags" class="label label-white">
                    <a :href="base_url + '/tag/' + tag">{{tag}}</a>
                </span>
                <br><br>
            </div>

        </div>

        <div  v-if="!post.fullcontent" class="col-md-3 col-sm-4">
            <img v-if="post.thumb" class="sns-post-thumb" :src="post_thumb" :alt="[ trans('messages.image') ]">
        </div>

    </div>

    <div class="row post-foot">
        <post_foot :p="post"></post_foot>
    </div>

</div>

</template>


<script>
    
import post_head from "./partials/head.vue";
import post_foot from "./partials/foot.vue";

export default {
    props:['p'],
    components: {
        post_head,
        post_foot,
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
        
    },
    data () {
        return {
            base_url : location.protocol + "//" + location.host,
            post_description : this.strip_tags(this.p.description),
            post_thumb :  this.build_url(this.p.thumb),
            tags : this.split_tags(this.p.tags),
            post: this.p
        }
    }
}
</script>

<style>

    .post-foot {
        padding: 0 0 1em 1em;
    }


</style>