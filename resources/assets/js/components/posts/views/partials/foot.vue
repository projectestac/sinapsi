<template>

    <div>

        <sns-like :p="post"></sns-like>

        <sns-favorite :p="post"></sns-favorite>

        <sns-share :p="post"></sns-share>

        <sns-settings :p="post"></sns-settings>

        <sns-comments :p="post"></sns-comments>

        <div v-if="post.fullcontent" class="pull-right">
        <a :href="'#post-' + post.id" title="Torna amunt">
            <img :src="baseurl + '/img/NG_tornar_enrere.png'">
        </a>
        </div>

    </div>

</template>


<script>
    
    import snsLike from "../../buttons/like.vue";
    import snsFavorite from "../../buttons/favorite.vue";
    import snsShare from "../../buttons/share.vue";
    import snsSettings from "../../buttons/settings.vue";
    import snsComments from "../../buttons/comments.vue";
   
    export default {
        props:['p'],
        components: {
            snsLike, snsFavorite, snsShare, snsSettings, snsComments
        },
        data () {
            return {
                post: this.p,
                baseurl: shared.baseUrl
            }
        }
    }

</script>
