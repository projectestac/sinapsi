<template>

    <div class="dropdown">

        <multiselect v-model="sinapsi"
                     placeholder="Tria una sinapsi"
                     label="name"
                     track-by="id"
                    :options="opt"
                    :allow-empty="true">
        </multiselect>

        <input type="hidden" name="parent_id" :value="sinapsi?sinapsi.id:''">

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
                opt: this.options,
                errors:[]
            }
        }
    }
</script>