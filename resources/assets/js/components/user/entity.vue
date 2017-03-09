<template>
    
    <div class="dropdown">

        <multiselect v-model="entity"
                     placeholder="(Opcional) Tria un centre educatiu"
                     label="text"
                     track-by="ID"
                    :options="opt"
                    :allow-empty="true"
        >
        </multiselect>
        <input type="hidden" name="entity_id" :value="entity.ID">

    </div>


</template>

<script>

import Multiselect from 'vue-multiselect';

export default {

    props:['e','options'],

    components: {
        Multiselect
    },

    data () {
        return {
            entity:this.e ,
            opt:this.options,
            errors:[],
        }
    },

}
</script>

<style>
    .multiselect__tag {
        color: #666;
        background: #eee;
    }
</style>