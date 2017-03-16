<template>

    <form method="POST" class="cercador_vermell form">

        <div class="form-group">
            
            <div class="form-group sns-search-field">
                <div>
                    <by-term v-on:filters_changed="filters_changed" :from_UI="f_ui.q" :from_DB="f_db.q"></by-term>
                    <input class="btn btn-default" value="" type="submit" @click.prevent="get_posts('')">
                </div>
            </div>

            <div class="row div-search-info">
                <div class="col-md-9">
                    <span v-html="filters_warning" class="filter-info"></span>
                </div>

                <div class="cerca-av col-md-3">
                    <a data-toggle="collapse" href="#advanced-search" title="Cerca avançada">
                        Cerca avançada
                    </a>
                </div>
            </div>

            <div class="collapse row" id="advanced-search">
                <p v-if="f_db.q"><strong>Paraules clau:</strong> {{ f_db.q }}</p>
                <br>
                <by-order   v-on:filters_changed="filters_changed"      :from_UI="f_ui.o"     :from_DB="f_db.o"></by-order>
                <by-tag     v-on:filters_changed="filters_changed"      :from_UI="f_ui.t"     :from_DB="f_db.t"></by-tag>
                <by-st      v-on:filters_changed="filters_changed"      :from_UI="f_ui.st"    :from_DB="f_db.st"></by-st>
                <by-se      v-on:filters_changed="filters_changed"      :from_UI="f_ui.se"    :from_DB="f_db.se"></by-se>
                <by-city    v-on:filters_changed="filters_changed"      :from_UI="f_ui.l"     :from_DB="f_db.l"></by-city>
                <by-source-type v-on:filters_changed="filters_changed"  :from_UI="f_ui.y"     :from_DB="f_db.y"></by-source-type>
                <by-school  v-on:filters_changed="filters_changed"      :from_UI="f_ui.s"     :from_DB="f_db.s"></by-school>
                <by-project  v-on:filters_changed="filters_changed"     :from_UI="f_ui.p"     :from_DB="f_db.p"></by-project>
                <by-date    v-on:filters_changed="filters_changed"      :from_UI="filters_ui_date"  :from_DB="filters_db_date"></by-date>
            </div>

        </div>

    </form>

</template>


<script>

import byTerm from './by-term.vue';
import byTag from './by-tag.vue';
import byOrder from './by-order.vue';
import bySt from './by-st.vue';
import bySe from './by-se.vue';
import byCity from './by-city.vue';
import bySourceType from './by-source-type.vue';
import bySchool from './by-school.vue';
import byProject from './by-project.vue';
import byDate from './by-date.vue';


export default {

    props: ['filters_ui' , 'filters_db', 'filters_all'],
    components: {
        byTerm, byOrder, bySt, bySe, byCity, byTag, bySourceType, bySchool, byProject, byDate
    },
    data() {
        return {
            filters: [],
            posts: [],
            errors: {},
            filters_warning:"",
            f_ui: this.filters_ui ? this.filters_ui : [],
            f_db: this.filters_db ? this.filters_db : []
        }
    },
    computed: {
        filters_ui_date: function(){
            if (this.filters_ui && this.filters_ui.sd && this.filters_ui.ed){
                return { 'sd':this.filters_ui.sd, 'ed':this.filters_ui.ed }
            }
        },
        filters_db_date: function(){
            if (this.filters_db && this.filters_db.sd && this.filters_db.ed){
                return { 'sd':this.filters_db.sd, 'ed':this.filters_db.ed }
            }
        }
    },
    beforeMount: function(){
        this.get_posts('');
    },
    mounted: function () {
        bus.$on('get_posts', function (filters) {
            this.get_posts(filters);
        }.bind(this));
    },
    watch:{
        filters: function(){
            var num_filters = Object.keys(this.filters).length;
            if (num_filters){
                this.filters_warning  = num_filters ==1 ? "S'està aplicant <strong>1</strong> filtre" : "S'estan aplicant <strong>" + num_filters + "</strong> filtres";
            } else {
                this.filters_warning = "";
            }
        }
    },
    methods: {
        filters_changed: function(variable, data) {
            if (data!=""){
                this.filters[variable] = data;
            } else {
                delete(this.filters[variable]);
            }
        },

        build_url: function (pagetype='home', info='0') {
            var url = "";
            switch (pagetype) {
                case 'home':
                    url = '/api/v1/posts';
                    break;
                case 'sinapsi':
                    url = '/api/v1/sinapsi/' + info + '/posts';
                    break;
                case 'school':
                case 'se':
                case 'st':
                case 'project':
                    url = '/api/v1/e/' + pagetype + '/' + info + '/posts';
                    break;
                case 'tag':
                    url = '/api/v1/tag/' + info + '/posts';
                    break;
                case 'post':
                    url = '/api/v1/post/' + info;
                    break;
                default:
                    url = 'page-not-defined';
                    break;
            }
            return url;
        },

        // Convert str querystring in an object
        queryStringToObj : function(str)
        {
            return str.replace(/(^\?)/,'').split("&").map(function(n){
                return n = n.split("="),this[n[0]] = n[1],this
            }.bind({}))[0];
        },

        /**
        *
        * Build querystring from url, form and tabs
        *
        **/
        build_querystring: function (noSearchFormFilters="") {

            var filters = this.f_ui;

            // Get params from page or orderby (no search form). If collision, this params overwrite existing params
            if (noSearchFormFilters){
                var f = noSearchFormFilters.split("="); // f[0] = 'page', f[1] = 4
                filters[f[0]] = f[1];
                if (f[0] == 'o'){
                    // reset page if user change posts order (clicking tab)
                    delete filters.page;
                }
            }

            var queryString="";
            this.filters = filters;

            var that = this;
            $.each(Object.keys(this.filters), function (index, value) {
                queryString += ( queryString == '' ) ? "?" : '&';
                queryString += value + "=";

                if (Array.isArray(that.filters[value])){
                    $.each(that.filters[value], function (i, v) {
                        queryString += v.ID + ",";
                        //queryString += value.slice(1) + "=" + encodeURIComponent($(value).val());
                    });
                    queryString = queryString.slice(0, -1);
                } else {
                    queryString += that.filters[value];
                }
            });

            return queryString.replace(/\+/g,"%2B"); //preserve plus sign

        },
    
        get_posts: function (filters="") {

            bus.$emit('searching');
            var url = shared.baseUrl + this.build_url(shared.page.type, shared.page.info.id);
            filters = this.build_querystring(filters);
            bus.$emit('filters_applied', filters);

            //history.pushState({urlPath:'/'+filters},"Sinapsi", "/" + filters);

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url + filters,
                method: 'POST',
                dataType: 'json',
                success: function (response) {
                    this.posts = response;
                    bus.$emit('posts_available', this.posts);
                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });

            // Get posts count to build pagination (more slow than get (15) posts)
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url + '/count' + filters,
                method: 'POST',
                dataType: 'json',
                success: function (response) {
                    var pagination = {
                        'current_page': parseInt(response.current_page),
                        'last_page': parseInt(response.last_page),
                        'total_posts': parseInt(response.total_posts)
                    };
                    bus.$emit('pagination_available', pagination);
                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });
        }

    }
}

</script >


<style>

.filter-info{
   color: #666;
   font-style: italic;
}


</style>