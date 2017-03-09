s<template>
    <div class="dropdown">
        <p><strong>Descriptors:</strong><span style="font-style:italic">{{tags_DB.join(", ")}}</span></p>
        <multiselect v-model="tags_UI"
             placeholder="Filtra per un o més descriptors"
             deselect-label="Treu de la selecció"
             label="text"
             track-by="ID"
            :options="options"
            :multiple="true"
            :taggable="true"
            :close-on-select="false"
            deselectlabel="Tria per deseleccionar"
        >
    </multiselect>

</div>
</template>

<script>

import Multiselect from 'vue-multiselect'


export default {

    props:['from_UI', 'from_DB'],
    components: {
        Multiselect
    },
    data () {
        return {
            tags_UI: [],
            tags_DB: [],
            options:[],
            errors:[],
        }
    },
    watch: {
        tags_UI: function () {
            this.$emit('filters_changed','t',this.tags_UI);
        }
    },
    mounted: function(){
         this.get_tags();
    },
    methods: {
      get_tags: function(){
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: location.protocol + "//" + location.host + '/api/v1/tags',
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    this.options = response;
                    var tag_name ="";
                    var that = this;

                    //from ui
                    $.each(this.from_UI, function( index, tag ) {
                        tag_name = $.grep(that.options, function(e){ return e.ID == tag.ID; });
                        that.tags_UI.push({ 'ID': tag.ID ,'text': tag_name[0].text });
                    });

                    //from db
                    if (this.from_DB) {
                        $.each(this.from_DB.split(","), function (index, tag) {
                            tag_name = $.grep(that.options, function (e) {
                                return e.ID == tag;
                            });
                            that.tags_DB.push(tag_name[0].text);
                        });
                    }
                    
                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });
        },
    },
}
</script>
