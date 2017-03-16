<template>

    <div class="dropdown">
        <multiselect v-model="entity"
                     placeholder="(Opcional) Tria un centre educatiu"
                     label="text"
                     track-by="ID"
                    :options="options"
                    :allow-empty="true"
    >
    </multiselect>
    <input type="hidden" name="school_id" :value="entity.ID">

</div>
</template>

<script>

import Multiselect from 'vue-multiselect'

export default {
    props:['school'],
    components: {
        Multiselect
    },
    data () {
        return {
            entity: {},
            options:[],
            errors:[],
        }
    },

    created: function(){
        this.get_schools();
        /*bus.$on('select_schools', function(schools){
            this.schools = [ {'ID':120, 'text':this.options[0].text}, {'ID':121, 'text':this.options[1].text} ];
        }.bind(this));*/
    },

    methods: {
        get_schools: function(){
            var that = this;
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: location.protocol + "//" + location.host + '/api/v1/schools',
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    this.options = response;
                    $.each(this.options, function( index, option ) {
                        if (option.ID == that.school){
                            that.entity={'ID': option.ID ,'text': option.text };
                            return false; // Get out each
                        }
                    });



                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });

        }
    }
}
</script>
