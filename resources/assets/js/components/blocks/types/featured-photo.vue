<template>

    <div :class="{'sns-block-container':true,'sortable':editable}">
        <div class="fpca_llista_graficDestacat">
            <div class="graficDestacat_generic">
                <div class="grafic_destacat shadowBox" style="width:100%">
                    <div class="grafic_destacat_cont box">
                        <a :href="url" :title="block.title">
                            <img class="img-responsive" :src="block.content" alt="block.title">
                                <div>
                                    <h3 class="imatge_text">{{ block.title }}</h3>
                                    <span class="data">
                                    </span>
                                </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <span v-if="editable" class="glyphicon glyphicon-trash sns-block-trash-white" aria-hidden="true" @click="remove"></span>
    </div>

</template>


<script>

    export default {
        props: ['info', 'edit'],
        data () {
            return {
                editable: this.edit,
                block: this.info,
                url: JSON.parse(this.info.options).url
        }
    },
    methods:{
        remove() {
            bus.$emit('delete_block',this.info);
        }
        }
    }

</script>