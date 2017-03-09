<template id="gallery">

    <div class="col-sm-6 col-md-4">
        <div style="height:250px;text-align: center">
            <figure>
                <a :href="post.link">
                    <img class="sns-post-thumb" :src="post_thumb" >
                </a>
                <figcaption>
                    <a :href="post.link">{{ post.title}}</a>
                </figcaption>
            </figure>
        </div>
    </div>

</template>


<script>

export default {
    props:['p'],
    methods:{

        build_url: function (url)
        {
            if (!url){
                return location.protocol + "//" + location.host +"/img/nophoto.jpg";
            }
            if ( !url.startsWith('http') ){
                url = location.protocol + "//" + location.host +"/" + url;
            }
            return url;
        },

    },
    data () {

        return {
            base_url : location.protocol + "//" + location.host,
            post_thumb :  this.build_url(this.p.thumb),
            post: this.p
        }

    }
}
</script>