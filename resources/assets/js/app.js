
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/*
 |--------------------------------------------------------------------------
 | Components
 |--------------------------------------------------------------------------
 */

Vue.component('sns-search', require('./components/search/search.vue'));
Vue.component('sns-posts-container', require('./components/posts/container.vue'));
Vue.component('sns-blocks-list', require('./components/blocks/list.vue'));
Vue.component('sns-blocks-sinapsis-list', require('./components/blocks/sinapsis.vue'));
Vue.component('sns-block', require('./components/blocks/block.vue'));
Vue.component('by-school', require('./components/user/by-school.vue'));
Vue.component('block-builder', require('./components/blocks/block-builder.vue'));

// TODO: no global
Vue.component('sns-filters',  require('./components/filters.vue'));
Vue.component('user-entity',  require('./components/user/entity.vue'));
Vue.component('user-sinapsi', require('./components/user/sinapsi.vue'));
Vue.component('sinapsis-list',require('./components/sinapsis-list.vue'));
Vue.component('tags-list',    require('./components/posts/tags-list.vue'));

Vue.component('post-head', require('./components/posts/views/partials/head.vue'));
Vue.component('post-foot', require('./components/posts/views/partials/foot.vue'));
Vue.component('post-tags', require('./components/posts/views/partials/tags.vue'));
/*
 |--------------------------------------------------------------------------
 | Global filters
 |--------------------------------------------------------------------------
 */
Vue.filter('timeago', function(date){
    return jQuery.timeago(date);
});

$(function(){
    $(".scroll").click(function(){
        $("html,body").animate(
            {scrollTop:$(".thetop").offset().top},"1000");
        return false
    })
})

Vue.prototype.trans = (key) => {
    return _.get(window.trans, key, key);
};
