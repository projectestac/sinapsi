<template>
    <div>

        <div :class="{'sns-block-container':true,'sortable':editable}">
        <div class="shadowBox fons_destacat_cont generalitat">
            <div class="shadow hidden-xs"></div>
            <div class="panel panel-default box">
                <div class="panel-heading fons_blanc">
                    <h2 class="panel-title fb_no-separador titol-pd-btm">{{ block.title }}</h2>
                </div>
                <div class="panel-body fons_gris" v-html="block.content">
                </div>
            </div>
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
