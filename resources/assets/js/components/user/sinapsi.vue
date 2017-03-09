<template>

<div class="dropdown">

    <multiselect v-model="sinapsi"
                placeholder="Tria una sinapsi"
                label="text"
                track-by="ID"
                :options="opt"
                :allow-empty="true"
    >
    </multiselect>
    <input type="hidden" name="sinapsi_dst" :value="sinapsi?sinapsi.ID:''">

</div>

</template>

<script>

import Multiselect from 'vue-multiselect'

export default {
    props:['options','s'],
    components: {
        Multiselect
    },
    data () {
        return {
            sinapsi: this.s,
            opt:this.options,
            errors:[]
        }
    }
}
</script>
