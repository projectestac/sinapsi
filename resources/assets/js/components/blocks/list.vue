<template>
    <div id="blockList"> <!-- necessary, it's not possible do a loop in the root mounted point :( -->
        <div v-for='block in blocks' :key="block.id">
            <sns_block :info="block" :edit="editable"></sns_block>
        </div>
        <input type="hidden" name="blocks" :value="get_blocks_json">
    </div>
</template>

<script>

    import sns_block from './block.vue';

    export default {
        props:['pagetype','info','edit'],
        data () {
          return {
            editable:this.edit,
            blocks: []
          }
        },
        components: {
            sns_block
        },
        created: function(){

            // Listen when block-builder emit an new_block event
            bus.$on('new_block', function(data_from_block_builder){
                this.blocks.unshift(data_from_block_builder);
                this.update_order(0,0); //Hack to refresh order index
            }.bind(this));

            // Listen when a block component emit a delete_block event
            bus.$on('delete_block', function(block){
                this.delete_block(block.id);
            }.bind(this));

            // Listen when a block component is reordered
            bus.$on('update_order', function(evt){
                this.update_order(evt.oldIndex, evt.newIndex);
            }.bind(this));

            // Listen a get_blocks event
            bus.$on('get_blocks', function(){
                this.get_blocks();
            }.bind(this));

        },
        mounted: function(){
            this.get_blocks();
        },
        computed: {
            get_blocks_json: function (){
                return JSON.stringify(this.blocks);
            }
        },

        methods: {
            get_blocks: function () {
                $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    url: location.protocol + "//" + location.host + '/api/v1/blocks',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        scope: this.pagetype,
                        scope_id: this.info
                    },
                    success: function (data) {
                        this.blocks = data;
                    }.bind(this),
                    error: function (jqXHR, textStatus, message) {
                        this.errors.push(message);
                    }.bind(this)
                });
            },

            update_order: function(oldIndex, newIndex) {
                this.blocks.splice(newIndex, 0, this.blocks.splice(oldIndex, 1)[0]);
                $.each(this.blocks, function( index, block ) {
                    block.order = index;
                });
            },

            delete_block: function(id){
                var that = this;
                $.each(this.blocks, function( index, block ) {
                    if (block.id == id){
                        that.blocks.splice(index,1);
                        return false; // Get out each
                    }
                });
            }

        },

}
</script>