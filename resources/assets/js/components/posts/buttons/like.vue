 
<template>
	
		 <a v-if='post.liked' class="btn btn-default sns-btn-post-options" :title="post.score" @click="unlike($event)">
		    <span class="glyphicon glyphicon glyphicon-heart"></span>
		    <span v-if='post.num_likes'>{{ post.num_likes }}</span>
		 </a>
		 
		 <a v-else class="btn btn-default sns-btn-post-options" :title="post.score" @click="like($event)">
		    <span class="glyphicon glyphicon glyphicon-heart sns-grey"></span>
		    <span v-if='post.num_likes'>{{ post.num_likes }}</span>
		 </a>
	
 </template>

<script>

	export default {
	  props:[ 'p' ],
	  data () {
		return {
	      post:this.p,
	      errors:this.errors
	    }
	  },
	  methods:{
	  	 send: function(action, event){

			 this.errors = [];
			 var btn = event.currentTarget.childNodes[0];
			 $(btn).addClass('gly-spin');

			$.ajax({
				url: location.protocol + "//" + location.host + '/api/v1/post/' + this.post.id + '/'+action,
				method: 'GET',
				dataType: 'json',
				success: function (data) {
					if (data.success) {
							this.p.liked = data.post.liked;
							this.p.num_likes = data.post.num_likes;
					}
					$(btn).removeClass('gly-spin');
				}.bind(this),
				error: function (jqXHR, textStatus, message) {
					switch (message) {
						case 'Unauthorized':
							this.errors.push("Has d'entrar per poder fer aquesta acció");
							break;
						case 'Internal Server Error':
							this.errors.push("S'ha produit un error processant la vostra petició. Torna a prova en una estona");
							break;
						default:
							this.errors.push("El servidor no respón, torna a provar en una estona");
					}
					$(btn).removeClass('gly-spin');
				}.bind(this)
			});
	  	 },
	  	 like: function(event){
 			this.send('like',event);
    	 },
	  	 unlike: function(){
  	 		this.send('unlike',event);
	  	 }

	  }
	}

</script>
