<template>

    <div class="btn-group">

        <button type="button" class="btn btn-default dropdown-toggle sns-btn-post-options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="glyphicon glyphicon glyphicon-send"></span> <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">

            <li>
                <a target="_blank" :href="twitter_link">Twitter</a>
            </li>
            <li>
                <a target="_blank" :href="facebook_link">Facebook</a>
            </li>
            <li>
                <a target="_blank" :href="email_link">Envia per correu</a>
            </li>

            <li v-if="user">
                <a :href="user.wp_dst + wp_link"> Envia al meu NODES
                </a>
            </li>

        </ul>
    </div>

</template>

<script>
export default {
    props:['p'],
    data () {
        return {

            twitter_link: "https://twitter.com/intent/tweet?text=" + this.p.title
                         +" (" + this.p.source_name + ", " + this.p.source_location + ")&url=" + this.p.link,

            facebook_link: "https://www.facebook.com/sharer/sharer.php?u="
                          + this.p.link + "&summary=" + this.p.title,

            email_link: "mailto:?subject=" + this.p.title + "&body=" + "Et recomano aquest enllaç de "
                        + this.p.source_name + "(" + this.p.source_location + "):" + this.p.link,

            wp_link: '/wp-admin/press-this.php?u=' + this.p.link +'&t='
                    + this.p.title + '&i=' + this.p.thumb + '&s=' + this.strip_tags(this.p.description),
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
    }
}
</script>