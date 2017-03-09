<template>

    <div>
        <div :class="{'sns-block-container':true,'sortable':editable}">
        <div class="graficDestacat_estil3">
            <h2>{{ block.title }}</h2>
        </div>
        <span v-if="editable" class="glyphicon glyphicon-trash sns-block-trash" aria-hidden="true" @click="remove"></span>
        </div>
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
