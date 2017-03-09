<template>
	<div>
		<component :is="block.type" :info="block" :edit="editable"></component>
	</div>
</template>

<script>

	import BasicColor from './types/basic-color.vue';
    import RawHtml from './types/raw-html.vue';
	import SimpleTitle from './types/simple-title.vue';
	import TwitterTimeline from './types/twitter-timeline.vue';
    import FpcaLlista from './types/fpca-llista.vue';

	export default {
	  props:[ 'info','edit' ],
	  components: {
		BasicColor,
		RawHtml,
        SimpleTitle,
		TwitterTimeline,
        FpcaLlista,
      },
	  data () {
		return {
		  editable: this.edit,	
	      block:this.info
	    }
	  }
	}

</script>
