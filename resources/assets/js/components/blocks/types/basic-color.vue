<template>
    <div  :class="{'sns-block-container':true,'sortable':editable}">
        <div :class="block.class">
            <a class="tit" :href="block.url" :title="block.title"><h3>{{ block.title }}</h3></a>
            <p></p>
            <p>{{ block.content }}</p>
       </div>
        <span v-if="editable" class="glyphicon glyphicon-trash sns-block-trash-white" aria-hidden="true" @click="remove"></span>
    </div>
</template>


<script>

export default {

    props: ['info','edit'],

    data () {
        return {
            editable: this.edit,
            block : {
                class : "basic_color xar-socials " + JSON.parse(this.info.options).color,
                content : this.info.content,
                title : this.info.title,
                url : JSON.parse(this.info.options).url
            }
        }
    },
    methods:{
        remove() {
            bus.$emit('delete_block',this.info);
        }   
    }

}
</script>
