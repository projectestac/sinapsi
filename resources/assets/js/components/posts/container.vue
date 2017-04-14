
<template>
<div id="center_2_1R">

    <div class="fpca_llista_pestanyes">
        <div class="pestanyes shadowBox-sm pd-15 pd-30">
            <div class="pestanyes_top hidden-xs box">
                <div>
                    <div class="btn-group sns-btn-selector">

                        <!--
                        |--------------------------------------------------------------------------
                        | Medium card button
                        |--------------------------------------------------------------------------
                        -->
                        <button type="button"
                                :class="{'btn':true,
                                         'btn-default':true,
                                         'sns-selected-postview': postview=='medium-card'}"
                                :aria-label="[ trans('messages.optimal') ]" @click.prevent="postview='medium-card'">

                            <span class="glyphicon glyphicon-th-list" aria-hidden="true" :title="[ trans('messages.optimal') ]"></span>
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
                                  :aria-label="[ trans('messages.gallery') ]" @click.prevent="postview='gallery'">
                            <span class="glyphicon glyphicon-picture" aria-hidden="true" :title="[ trans('messages.gallery') ]"></span>
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
                                :aria-label="[ trans('messages.list') ]" @click.prevent="postview='list'">
                            <span class="glyphicon glyphicon-align-justify" aria-hidden="true" :title="[ trans('messages.list') ]"></span>
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
                                :aria-label="[ trans('messages.share') ]" @click.prevent="embed==true?embed=false:embed=true" :title="[ trans('messages.share') ]">
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
                                v-on:click="toogle_ft" :title="[ trans('messages.expand') ]">
                            <span class="glyphicon glyphicon-resize-horizontal" aria-hidden="true"></span>
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
                                        <span @click="orderby='n'">{{ trans('messages.all') }}</span>
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
                                        <span @click="orderby='f'">{{ trans('messages.featured') }}</span>
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
                                        <span @click="orderby='v'">{{ trans('messages.top_rated') }}</span>
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
                                        <span @click="orderby='c'">{{ trans('messages.most_discussed') }}</span>
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
                    <p>{{ trans('messages.processing') }}&nbsp;&nbsp;
                        <img :src="spin_image" :alt="[ trans('messages.getting_results') ]">
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

<style>

    .tab-content{
        padding:10px;
    }

    .pestanyes_top li.tab span{
        color: #BF0000;
    }

    .pestanyes_top li.tab.active span{
        color: #000;
    }

    .sns-btn-selector{
        float:right;
        top: 6px;
        right: 10px;
    }

    .sns-btn-selector button{
        background-color:transparent;
        border:0;
        padding:5px;
    }

    .sns-btn-selector button span {
        color:#a7a7a7;
        font-size:12px;
        padding: 0;
    }

    button.sns-selected-postview  span{
        color:#666;
    }

    button.sns-selected-embed span{
        color:#BF0000;
    }

    div.query-animation{
        text-align:center;
        margin:5em;
    }

    .gly-spin {
        -webkit-animation: spin 2s infinite linear;
        -moz-animation: spin 2s infinite linear;
        -o-animation: spin 2s infinite linear;
        animation: spin 2s infinite linear;
    }
    @-moz-keyframes spin {
        0% {
            -moz-transform: rotate(0deg);
        }
        100% {
            -moz-transform: rotate(359deg);
        }
    }
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(359deg);
        }
    }
    @-o-keyframes spin {
        0% {
            -o-transform: rotate(0deg);
        }
        100% {
            -o-transform: rotate(359deg);
        }
    }
    @keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }


</style>