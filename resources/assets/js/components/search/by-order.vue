<template>
    <div class="dropdown">
        <p><strong>Ordre:</strong></p>
        <div class="dropdown">
            <multiselect v-model="orderby"
                deselect-label="Treu de la selecció"
                track-by="ID"
                label="text"
                placeholder="Ordenat per"
                :options="options"
                :searchable="false"
                :allow-empty="false">
            </multiselect>
        </div>
    </div>
</template>


<script>

import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      orderby: { ID: 'n', text: 'Nous primer' },
      options: [
        { ID: 'n', text: 'Nous primer' },
        { ID: 'o', text: 'Antics primer' },
      ]
    }
  },
  watch: {
      orderby: function ()
      {
        this.$emit('filters_changed','o',this.orderby.ID);
      }
  },
}

</script>
