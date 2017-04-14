<template>

        <div class="row">
            <div class="col-md-3 hidden-xs">
                <label for="orderby">{{ trans('messages.order') }}:</label>
            </div>
            <div class="col-md-9">
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
