<template>

    <div>
        <hr>
            <div :class="{'sns-block-container':true,'sortable':edit}" v-html="new_block.content">
            </div>
        <hr>

        <div class="form-group">
            <label for="content">Contingut</label>
            <textarea id="content" name="content" class="form-control" v-model="new_block.content" ></textarea>
        </div>
    </div>
    
</template>

<script>

export default {

    props:['info'],
    data: function () {
        return {
            new_block: {
                'title': this.info.title,
                'type':'raw-html',
                'content': this.info.content,
                'color': this.info.color,
                'url': this.info.url,
                'options': this.info.options
            }
        }
    },

    watch: {
        'new_block.content': function(){
            bus.$emit("new_block_updated", this.new_block);
        }
    }

}

</script>