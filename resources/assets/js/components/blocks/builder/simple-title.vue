<template>

    <div>
        <hr>
        <div :class="sns-block-container">
            <div class="graficDestacat_estil3">
                <h2>{{ new_block.title }}</h2>
            </div>
        </div>
        <hr>
        <div class="form-group">
            <label for="title">{{ trans('messages.title') }}</label>
            <input name="title"  type="text" class="form-control" v-model="new_block.title" :placeholder="[ trans('messages.title') ]">
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
                'type':'simple-title',
                'content': this.info.content,
                'color': this.info.color,
                'url': this.info.url,
                'options': this.info.options
            }
        }
    },

    watch: {
        'new_block.title': function(){
            bus.$emit("new_block_updated", this.new_block);
        }
    }

}

</script>