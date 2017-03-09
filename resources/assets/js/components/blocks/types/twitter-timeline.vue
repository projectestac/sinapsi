<template>

    <div>
        <div :class="{'sns-block-container':true,'sortable':edit}">
        <a class="twitter-timeline" :href="'https://twitter.com/' + block.title" height="550">Tweets de {{ block.title }}</a>
        <span v-if="editable" class="glyphicon glyphicon-trash sns-block-trash" aria-hidden="true" @click="remove"></span>
    </div>

</template>

<script>

export default {
    props: ['info', 'edit'],
    data () {
        return {
            editable: this.edit,
            block: this.info
        }
    },
    methods:{
        remove() {
            bus.$emit('delete_block',this.info);
        }
    }
}

</script>
