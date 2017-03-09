<template>
	<div>
        <a :name="name" style="visibility: hidden"></a>
        <a class="sns-source" :href="href">
            {{ post.source_name }} <span v-if="post.source_location">({{ post.source_location }})</span>
        </a>

        <span class="sns-date pull-right">
           <span :title="post.pub_date">{{ post.pub_date | timeago }}</span>
        </span>
    </div>
</template>

<script>

	export default {
	  props:['p'],
	  data () {
	    return {
	      name: 'post-' + this.p.id,
	      href: location.protocol + "//" + location.host + "/" + this.p.source_url,
		  post: this.p
	    }
  	  }
    }
</script>
