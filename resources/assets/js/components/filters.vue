<template>

	<div class="form-group">
            <label class="col-xs-12 pad_left_0" for="name">Filtres:</label>
            <input name="querystring" type="text" class="form-control" v-model="querystring">
    </div>

</template>

<script>

	export default {
	  props:['qs'],
	  data () {
		return {
		 	querystring:this.qs
	    }
	  }
	}

</script>