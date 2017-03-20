<template>
<div>
    <hr>
        <div  class="{'sns-block-container':true,'sortable':edit}">
            <div :class="new_block.class">
                <a class="tit" :href="new_block.url" :title="new_block.title"><h3>{{ new_block.title }}</h3></a>
                <p></p>
                <p>{{ new_block.content }}</p>
                <p></p>
            </div>
        </div>
    <hr>

    <div class="form-group">

        <label for="color">{{ trans('messages.colour') }}</label>

        <select class="form-control" v-model='new_block.color'>
            <option value="bgRed">{{ trans('messages.red') }}</option>
            <option value="vermell">{{ trans('messages.orange') }}</option>
            <option value="taronja">{{ trans('messages.orange_2') }}</option>
            <option value="blau">{{ trans('messages.blue') }}</option>
            <option value="blau2">{{ trans('messages.blue_2') }}</option>
            <option value="blau_s">{{ trans('messages.blue_3') }}</option>
            <option value="verd">{{ trans('messages.green') }}</option>
            <option value="verd2">{{ trans('messages.green_2') }}</option>
            <option value="verd3">{{ trans('messages.green_3') }}</option>
            <option value="groc">{{ trans('messages.yellow') }}</option>
            <option value="celeste">{{ trans('messages.light_blue') }}</option>
            <option value="negre">{{ trans('messages.black') }}</option>
            <option value="gris">{{ trans('messages.grey') }}</option>
            <option value="sns-gris">{{ trans('messages.grey_2') }}</option>
        </select>

        <div class="form-group">
            <label for="url">{{ trans('messages.web_address') }}</label>
            <input name="url"  type="text" class="form-control" v-model="new_block.url">
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

    props:['info','edit'],

    data: function () {
        return {
            new_block: {
                'title': this.info.title,
                'type':'basic-color',
                'content': this.info.content,
                'color': this.info.color,
                'url': this.info.url,
                'options': this.info.options,
                'class': "basic_color xar-socials " + this.info.color
            }
        }
    },

    computed: {
        get_options: function () {
            return '{"color":"' + this.new_block.color + '","url":"' + this.new_block.url + '"}';
        },
    },

    watch: {

        'new_block.color': function(){
            this.new_block.options = this.get_options;
            this.new_block.class = "basic_color xar-socials " + this.new_block.color;
            bus.$emit('new_block_updated', this.new_block);
        },
        'new_block.url': function () {
            this.new_block.options = this.get_options;
            bus.$emit('new_block_updated', this.new_block);
        },
        'new_block.title': function (){
            bus.$emit('new_block_updated', this.new_block);
        },
        'new_block.content': function () {
            bus.$emit('new_block_updated', this.new_block);
        },

    }

}

</script>