<template>

    <div class="dropdown">

        <multiselect v-model="t"
                     :placeholder="[ trans('messages.choose_or_create_one_or_more_descriptors') ]"
                     label="text"
                     track-by="ID"
                    :multiple="true"
                    :taggable="true"
                    :close-on-select="false"
                    :options="opt"
                    :allow-empty="true"
                    @tag="addTag">

        </multiselect>

    <input type="hidden" name="t" :value="JSON.stringify(t)">

</div>

</template>

<script>

    import Multiselect from 'vue-multiselect'

    export default {
        props:['options','selected'],
        components: {
            Multiselect
        },
        data () {
            return {
                t: this.selected,
                opt: this.options,
                errors:[]
            }
        },
        methods: {
            addTag (newTag) {
                const tag = {
                    ID: newTag,
                    text: newTag,
                }
                this.options.push(tag)
                this.tags.push(tag)
            }
        }
    }

</script>