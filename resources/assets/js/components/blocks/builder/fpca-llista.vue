<template>
    <div>
        
        <div :class="sns-block-container">
            <div class="shadowBox fons_destacat_cont generalitat">
                <div class="shadow hidden-xs"></div>
                <div class="panel panel-default box">
                    <div class="panel-heading fons_blanc">
                        <h2 class="panel-title fb_no-separador titol-pd-btm">{{ new_block.title }}</h2>
                    </div>
                    <div class="panel-body fons_gris" v-html="new_block.content">
                    </div>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="title">{{ trans('messages.title') }}</label>
            <input name="title"  type="text" class="form-control" v-model="new_block.title" :placeholder="[ trans('messages.without_title') ]">
        </div>
    
        <div class="form-group">
            <label for="content">{{ trans('messages.content') }}</label>
            <textarea id="content" name="content" class="form-control" v-model="new_block.content"></textarea>
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
                'type':'fpca-llista',
                'content': this.info.content,
                'color': this.info.color,
                'url': this.info.url,
                'options': this.info.options,
                'class': "basic_color xar-socials " + this.info.color
            }
        }
    },

    watch: {

        'new_block.title': function (){
            bus.$emit('new_block_updated', this.new_block);
        },
        'new_block.content': function () {
            bus.$emit('new_block_updated', this.new_block);
        },

    }

}

</script>

