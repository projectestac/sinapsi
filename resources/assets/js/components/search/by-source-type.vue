<template>
    <div class="dropdown">

        <p><strong>Tipus de font:</strong> {{ sources_type_DB }}</p>
        <multiselect v-model="sources_type_UI"
             placeholder="Filtra per un o més tipus de font"
             deselect-label="Treu de la selecció"
             label="text"
             track-by="ID"
            :options="options"
            :multiple="true"
            :taggable="true"
            :close-on-select="false"
        >
    </multiselect>
    </div>
</template>

<script>

import Multiselect from 'vue-multiselect'

export default {
    props:['from_UI','from_DB'],
    components: {
        Multiselect
    },
    data () {
        return {
            sources_type_UI: this.from_UI ? this.from_UI : "",
            sources_type_DB: this.from_DB ? this.from_DB : "",
            options: [
                {'ID':'Escola','text':'Escola'},
                {'ID':'Institut','text':'Institut'},
                {'ID':'IE','text':'Institut Escola'},
                {'ID':'SEZ','text':'Serveis Educatius'},
                {'ID':'Blog','text':'Blog personal o de projecte'},
                {'ID':'ZER','text':'ZER'},
                {'ID':'CFA','text':'Adults'},
                {'ID':'CdA','text':'Camps d\'aprenentatge'},
                {'ID':'CREDA','text':'CREDA'},
            ]
        }
    },
    watch: {
        sources_type_UI: function () {
            this.$emit('filters_changed','y',this.sources_type_UI);
        }
    },
}
</script>
