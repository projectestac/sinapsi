<template>
<div>
    <div :class="sns-block-container">
        <div class="fpca_llista_graficDestacat">
            <div class="graficDestacat_generic">
                <div class="grafic_destacat shadowBox" style="width:100%">
                    <div class="grafic_destacat_cont box">
                        <a :href="new_block.url" :title="new_block.title">
                            <img class="img-responsive" :src="new_block.content" :alt="new_block.title">
                                <div>
                                    <h3 class="imatge_text">{{ new_block.title }}</h3>
                                    <span class="data">
                                    </span>
                                </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="form-group">
        <label for="title">{{ trans('messages.title') }}</label>
        <input name="title"  type="text" class="form-control" v-model="new_block.title" :placeholder="[ trans('messages.title') ]">
    </div>
    <div class="form-group">
        <label for="url">{{ trans('messages.web_address') }}</label>
        <input name="url"  type="text" class="form-control" v-model="new_block.url">
    </div>
    <div class="form-group">
        <label for="content">{{ trans('messages.src_image') }}</label>
        <input name="content"  type="text" class="form-control" v-model="new_block.content">
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
                'type':'featured-photo',
                'content': 'Defineix la url de la imatge',
                'url': this.info.url,
                'options': this.info.options
            }
        }
    },

    computed: {
        get_options: function () {
            return '{"url":"' + this.new_block.url + '"}';
        },
    },

    watch: {
        'new_block.title': function (){
            bus.$emit('new_block_updated', this.new_block);
        },
        'new_block.url': function () {
            this.new_block.options = this.get_options;
            bus.$emit('new_block_updated', this.new_block);
        },
        'new_block.content': function () {
            bus.$emit('new_block_updated', this.new_block);
        },
    }
}

</script>