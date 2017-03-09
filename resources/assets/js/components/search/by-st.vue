<template>
    <div class="dropdown">
        <p><strong>Serveis Territorials:</strong> <span v-html="sstt_DB.join()"></span></p>
        <multiselect v-model="sstt_UI"
             placeholder="Filtra per un o més Serveis Territorials"
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
            sstt_UI: [],
            sstt_DB: [],
            options: [
                {'ID':1,'text':'Girona'},
                {'ID':2,'text':'Baix Llobregat'},
                {'ID':3,'text':'Tarragona'},
                {'ID':4,'text':'Consorci d\'educació de Barcelona'},
                {'ID':5,'text':'Lleida'},
                {'ID':6,'text':'Terres de l\'Ebre'},
                {'ID':7,'text':'Barcelona Comarques'},
                {'ID':8,'text':'Maresme/Vallès Oriental'},
                {'ID':9,'text':'Vallès Occidental'},
                {'ID':10,'text':'Catalunya central'},
            ]
        }
    },
    mounted: function(){

        var st_name ="";
        var that = this;

        //from ui
        $.each(this.from_UI, function( index, st ) {
            st_name = $.grep(that.options, function(e){ return e.ID == st.ID; });
            that.sstt_UI.push({ 'ID': st.ID ,'text': st_name[0].text });
        });

        if (this.from_DB) {
            $.each(this.from_DB.split(","), function (index, tag) {
                st_name = $.grep(that.options, function (e) {
                    return e.ID == tag;
                });
                that.sstt_DB.push(st_name[0].text);
            });
        }

    },
    watch: {
        sstt_UI: function () {
            this.$emit('filters_changed','st',this.sstt_UI);
        }
    }
}
</script>
