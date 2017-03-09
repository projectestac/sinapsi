
<template>
<div id="center_2_1R">

    <div class="fpca_llista_pestanyes">
        <div class="pestanyes shadowBox-sm pd-15 pd-30">
            <div class="pestanyes_top hidden-xs box">
                <div>
                    <div class="btn-group sns-postview">

                        <!--
                        |--------------------------------------------------------------------------
                        | Medium card button
                        |--------------------------------------------------------------------------
                        -->
                        <button type="button"
                                :class="{'btn':true,
                                         'btn-default':true,
                                         'sns-selected-postview': postview=='medium-card'}"
                                aria-label="Optim" @click.prevent="postview='medium-card'">

                            <span class="glyphicon glyphicon-th-list" aria-hidden="true" title="Òptim"></span>
                        </button>

                        <!--
                        |--------------------------------------------------------------------------
                        | Gallery button
                        |--------------------------------------------------------------------------
                        -->
                        <button type="button"
                                :class="{'btn':true,
                                                 'btn-default':true,
                                                 'sns-selected-postview': postview=='gallery'}"
                                  aria-label="Galeria" @click.prevent="postview='gallery'">
                            <span class="glyphicon glyphicon-picture" aria-hidden="true" title="Galeria"></span>
                        </button>

                        <!--
                        |--------------------------------------------------------------------------
                        | List
                        |--------------------------------------------------------------------------
                        -->
                        <button type="button"
                                :class="{'btn':true,
                                         'btn-default':true,
                                         'sns-selected-postview': postview=='list'}"
                                aria-label="Llista" @click.prevent="postview='list'">
                            <span class="glyphicon glyphicon-align-justify" aria-hidden="true" title="Llista"></span>
                        </button>

                        <!--
                        |--------------------------------------------------------------------------
                        | Share button
                        |--------------------------------------------------------------------------
                        -->
                        <button type="button" data-toggle="collapse" href="#share"
                                style="margin: 0 0.8em"
                                :class="{'btn':true,
                                         'btn-default':true,
                                         'sns-selected-embed': embed==true}"
                                aria-label="Embed" @click.prevent="embed==true?embed=false:embed=true" title="Compartir">
                            <span class="glyphicon glyphicon-link" aria-hidden="true"></span>
                        </button>

                        <!--
                        |--------------------------------------------------------------------------
                        | Expand posts container button
                        |--------------------------------------------------------------------------
                        -->
                        <button type="button"
                                :class="{'btn':true,
                                         'btn-default':true}"
                                v-on:click="toogle_ft" title="Expandir">
                            <span :class="{'glyphicon':true,
                                           'glyphicon-triangle-right':fulltabs==false,
                                           'glyphicon-triangle-left': fulltabs==true}"
                                  aria-hidden="true"></span>
                        </button>
                    </div>

                    <!--
                    |--------------------------------------------------------------------------
                    | Tabs
                    |--------------------------------------------------------------------------
                    -->
                    <ul>
                        <!--
                        |--------------------------------------------------------------------------
                        | All posts tab
                        |--------------------------------------------------------------------------
                        -->
                        <li :class="{'tab':true,
                                     'active':orderby=='n' || orderby=='o' }">
                            <a href="#all" aria-controls="home" role="tab" data-toggle="tab">
                                <div id="tab_all">
                                    <div class="titol-tab">
                                        <span @click="orderby='n'">Tots</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <!--
                        |--------------------------------------------------------------------------
                        | Feature posts tab
                        |--------------------------------------------------------------------------
                        -->
                        <li :class="{'tab':true,
                                     'active':orderby=='f'}">
                            <a href="#featured" aria-controls="home" role="tab" data-toggle="tab">
                                <div id="tab_featured">
                                    <div class="titol-tab">
                                        <span @click="orderby='f'">Destacats</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <!--
                        |--------------------------------------------------------------------------
                        | Liked posts tab
                        |--------------------------------------------------------------------------
                        -->
                        <li :class="{'tab':true,
                                     'active':orderby=='v'}">
                            <a href="#liked" aria-controls="home" role="tab" data-toggle="tab">
                                <div id="tab_liked">
                                    <div class="titol-tab">
                                        <span @click="orderby='v'">Més votats</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <!--
                        |--------------------------------------------------------------------------
                        | Commented posts tab
                        |--------------------------------------------------------------------------
                        -->
                        <li :class="{'tab':true,
                                     'active':orderby=='c'}">
                            <a href="#commented" aria-controls="home" role="tab" data-toggle="tab">
                                <div id="tab_commented" style="float:left">
                                    <div class="titol-tab">
                                        <span @click="orderby='c'">Més comentats</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li></li>

                    </ul>
                </div>
            </div>

            <!--
            |--------------------------------------------------------------------------
            | Tabs (panel-group)
            |--------------------------------------------------------------------------
            -->
            <div class="panel-group pestanyes_bot box-sm">

                <sns-embed :postview="postview"></sns-embed>

                <sns-pagination-top></sns-pagination-top>

                <div class="query-animation" v-if="spin_animation">
                    <p>Consultant...&nbsp;&nbsp;
                        <img :src="spin_image" alt="Obtenint resultats...">
                    </p>
                </div>

                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active">
                        <div v-for='post in posts' :key="post.id">
                            <component :is="'sns-'+postview" :p="post" :s="sinapsi_id"></component>
                        </div>
                    </div>
                </div>

                <sns-pagination-bottom></sns-pagination-bottom>

            </div>

        </div>
    </div>
</div>
</template>

<script>

import snsEmbed from './embed.vue';

import snsMediumCard from  "./views/medium-card.vue";
import snsGallery from  "./views/gallery.vue";
import snsList from  "./views/list.vue";

import snsPaginationTop from  "./pagination-top.vue";
import snsPaginationBottom from  "./pagination-bottom.vue";

export default {

    props:['ft','pv'],
    data () {
        return {
            postview: this.pv ? this.pv : 'medium-card',
            fulltabs: this.ft,
            filters:'',
            posts: [],
            spin_animation:true,
            spin_image: shared.baseUrl + "/img/FW_carga_overlay.gif",
            orderby:'n',
            page: 1
        }
    },
    components: {
        snsEmbed,
        snsMediumCard,
        snsGallery,
        snsList,
        snsPaginationTop,
        snsPaginationBottom

    },
    created: function(){
        bus.$on('searching', function(posts){
            this.spin_animation = true;
        }.bind(this));

        bus.$on('filters_applied', function(filters){
            this.filters = filters;
        }.bind(this));

        bus.$on('posts_available', function(posts){
            this.spin_animation = false;
            this.posts=posts;
        }.bind(this));
    },
    watch:{
        orderby: function() {
            bus.$emit("get_posts",'o=' + this.orderby);
        },
        postview: function(){
            bus.$emit("postview_changed",this.postview);
        }
    },
    methods:{
        toogle_ft: function(){
            this.$emit('toogle_ft')
        },
    },

}

</script>
