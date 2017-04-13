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
                return shared.baseUrl +"/img/nophoto.jpg";
            }
            if ( !url.startsWith('http') ){
                url = shared.baseUrl +"/" + url;
            }
            return url;
        },

    },
    data () {

        return {
            base_url : shared.baseUrl ,
            post_thumb :  this.build_url(this.p.thumb),
            post: this.p
        }

    }
}
</script>