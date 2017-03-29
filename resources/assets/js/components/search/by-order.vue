<template>
    <div class="dropdown">
        <p><strong>{{ trans('messages.order') }}</strong></p>
        <div class="dropdown">
            <multiselect v-model="orderby"
                :deselect-label="trans('messages.remove_to_selection')"
                track-by="ID"
                label="text"
                :placeholder="trans('messages.order_by')"
                :options="options"
                :searchable="false"
                :allow-empty="false">
            </multiselect>
        </div>
    </div>
</template>


<script>

import Multiselect from 'vue-multiselect'

var messages = _.get(window.trans, 'messages');

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      orderby: { ID: 'n', text: messages['newest_first'] },
      options: [
        { ID: 'n', text: messages['newest_first'] },
        { ID: 'o', text: messages['oldest_first'] },
      ]
    }
  },
  watch: {
      orderby: function ()
      {
        bus.$emit('filters_changed','o',this.orderby.ID);
      }
  },
}

</script>
