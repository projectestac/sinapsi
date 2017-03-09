<template>
        <a v-if="post.tsticky" :href="unstick_url">
            <span class="glyphicon glyphicon glyphicon-download"></span> Desfixa {{ text }}
        </a>
        <a v-else :href="stick_url">
            <span class="glyphicon glyphicon glyphicon-upload"></span> Fixa a dalt {{ text }}
        </a>

</template>

<script>

    export default {
        props:['p'],
        methods:{
            build_url: function(action){
                 if (shared.page.type=="sinapsi")
                    return "/post/" + this.p.id+"/"+action+"/sinapsi/"+shared.page.info.id;
                 else
                    return "/post/" + this.p.id + "/"+action;
            }
        },
        data () {
            return {
                baseurl: location.protocol + "//" + location.host,
                post: this.p,
                stick_url: this.build_url('stick'),
                unstick_url: this.build_url('unstick'),
                text: (shared.page.info.name) ? " de " + shared.page.info.name :""
            }
        },
    }

</script>