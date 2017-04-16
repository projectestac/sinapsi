<template>
    <div>
        <p><i>{{ trans('messages.add_a_new_block') }}</i></p>


        <label for="Tipus">{{ trans('messages.type_block') }}</label>
        <div class="form-group">
            <select class="form-control" v-model='new_block.type'>
                <option value="basic-color">{{ trans('messages.basic_color_block') }}</option>
                <option value="raw-html">{{ trans('messages.block_pure_html') }}</option>
                <option value="fpca-llista">{{ trans('messages.list_block') }}</option>
                <option value="simple-title">{{ trans('messages.title') }}</option>
                <option value="twitter-timeline">{{ trans('messages.twitter') }}</option>
                <option value="featured-photo">{{ trans('messages.featured_photo') }}</option>
            </select>
        </div>

        <component :is="'builder-' + new_block.type" :info="new_block"></component>

        <p>
            <button type="submit" class="btn btn-primary"
                    :disabled = "new_block.type=='basic-color' && new_block.color == 'new'" @click.prevent="create_block">
            {{ trans('messages.add_a_new_block') }}
            </button>
    </p>

</div>

</template>

<script>

var messages = _.get(window.trans, 'messages');

import BuilderBasicColor from './builder/basic-color.vue';
import BuilderRawHtml from './builder/raw-html.vue';
import BuilderTwitterTimeline from './builder/twitter-timeline.vue';
import BuilderSimpleTitle from './builder/simple-title.vue';
import BuilderFpcaLlista from './builder/fpca-llista.vue';
import BuilderFeaturedPhoto from './builder/featured-photo.vue';

export default {

    components: {
        BuilderBasicColor,
        BuilderRawHtml,
        BuilderTwitterTimeline,
        BuilderSimpleTitle,
        BuilderFpcaLlista,
        BuilderFeaturedPhoto
    },

    data: function () {
        return {
            new_block: {
                'title': messages['new_block'],
                'content': messages['set_the_new_block_added'],
                'type': 'basic-color',
                'color': 'new',
                'url': 'http://',
                'options': '{"color":"new","url":"http://"}'
            }
        }
    },

    created: function(){
        bus.$on('new_block_updated', function(new_block){
            this.new_block = new_block;
        }.bind(this));
    },

    methods: {

        create_block: function () {
            
            var new_block = {
                id: Date.now(), /* Hack: Necessary key for block loop*/ 
                title: this.new_block.title,
                content: this.new_block.content,
                type: this.new_block.type,
                options: this.new_block.options,
                scope: this.scope,
                scope_id: this.scope_id,
                order: 0
            }
            
            // Send new block event (component "blocks" gets)
            bus.$emit('new_block', new_block);

            // Reset new_block
            this.new_block = {
                'title': messages['new_block'],
                'content': messages['set_the_new_block_added'],
                'type': 'basic-color',
                'color': 'new',
                'url': 'http://',
                'options': '{"color":"new","url":"http://"}'
            }

        },

    }

}

</script>

<style>

    .basic_color.xar-socials.new {
    background-color:white;
    border:3px dotted black;
    }

    .basic_color.xar-socials.new h3 {
    color:#333333;
    }
    .basic_color.xar-socials.new p {
    color:#555555;
    }

    .sortable{
    cursor:move;
    }
    
    .sns-block-trash-white {
    color:white;
    position:absolute;
    top:5px;
    right: 5px;
    cursor: pointer;
    z-index: 9999;
    }

    .sns-block-trash {
    color:grey;
    position:absolute;
    top:5px;
    right: 5px;
    cursor: pointer;
    z-index: 9999;
    }


</style>