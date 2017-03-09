
<template>
    <div>
        <div class="post-tags">
            <span v-for="tag in tags" class="label label-white">
                <a :href="base_url + '/tag/' + tag">{{tag}}</a>
            </span>
        </div>
    </div>

</template>



export default {

    props:['p'],
    methods:{
        split_tags: function (str){
            return (str)? str.split(', ') : [];
        },
    },
    data () {
        return {
            base_url : shared.baseUrl,
            tags : this.split_tags(this.p.tags),
        }
    }
}