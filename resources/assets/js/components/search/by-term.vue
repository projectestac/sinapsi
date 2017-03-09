<template>
    <div>
        <multiselect v-model="terms_UI"
             placeholder="Filtra per una o més paraules clau"
             deselect-label="Treu de la selecció"
             label="text"
             track-by="ID"
             :options="options"
             :multiple="true"
             :taggable="true"
             @tag="addTerm">
        </multiselect>
        <input class="btn btn-default" value="" type="submit" @click.prevent="get_data">
    </div>

</template>

<script>

import Multiselect from 'vue-multiselect'

export default {

    props: ['from_UI', 'from_DB'],
    components: {
        Multiselect
    },
    data () {
        return {
            terms_UI: this.from_UI ? this.from_UI : [],
            terms_DB: this.from_DB ? this.from_DB : [],
            options:  this.from_UI ? this.from_UI : []
        }
    },
    watch: {
        terms_UI: function () {
            this.$emit('filters_changed','q', this.terms_UI);
        }
    },
    methods: {
        compose_terms () {
            var that = this;
            $.each(this.from_UI, function( index, term ) {
                console.log(term);
                that.terms_UI.push({ 'ID': term ,'text': term });
            });
        },
        addTerm (newTerm) {
            const term = {
                ID: newTerm,
                text: newTerm,
            }
            this.options.push(term)
            this.terms_UI.push(term)
        }
    }
}
</script>

<style>
    .cercador_vermell .btn, header .container .in form .form-group .buttonG.btn {
        z-index: 9999999;
    }
</style>