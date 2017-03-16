
<template>
    <div style="position:relative">
        <p></p>
        <div :class="{'sns-block-container':true,'sortable':edit}" v-html="block.content">
        </div>
        <p></p>
        <span v-if="edit" class="glyphicon glyphicon-trash sns-block-trash" aria-hidden="true" @click="remove(block)"></span>
    </div>
</template>

<script>

export default {

    props: ['info','edit'],

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
