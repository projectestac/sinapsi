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

        <label for="color">Color</label>

        <select class="form-control" v-model='new_block.color'>
            <option value="bgRed">Vermell</option>
            <option value="vermell">Taronja</option>
            <option value="taronja">Taronja 2</option>
            <option value="blau">Blau</option>
            <option value="blau2">Blau 2</option>
            <option value="blau_s">Blau 3</option>
            <option value="verd">Verd</option>
            <option value="verd2">Verd 2</option>
            <option value="verd3">Verd 3</option>
            <option value="groc">Groc</option>
            <option value="celeste">Celeste</option>
            <option value="negre">Negre</option>
            <option value="gris">Gris</option>
            <option value="sns-gris">Gris 2</option>
        </select>

        <div class="form-group">
            <label for="url">Adreça web (URL)</label>
            <input name="url"  type="text" class="form-control" v-model="new_block.url">
        </div>

    </div>

    <div class="form-group">
        <label for="title">Títol</label>
        <input name="title"  type="text" class="form-control" v-model="new_block.title" placeholder="Sense títol">
    </div>

    <div class="form-group">
        <label for="content">Contingut</label>
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