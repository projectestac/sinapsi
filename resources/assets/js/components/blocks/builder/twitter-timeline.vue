<template>

    <div>

        <hr>
        <div :class="{'sns-block-container':true,'sortable':edit}">
            <a class="twitter-timeline" :href="'https://twitter.com/' + new_block.title" height="550">{{ trans('messages.tweets_to') }} {{ new_block.title }}</a>
        </div>
        <hr>

        <div class="form-group">
            <label for="twitter">{{ trans('messages.profile_twitter') }}</label>
            <input name="twitter"  type="text" class="form-control" v-model="new_block.title" :placeholder="[ trans('messages.profile_hashtag') ]">
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
                'type':'twitter-timeline',
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