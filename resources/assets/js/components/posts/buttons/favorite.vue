
<template>

    <a v-if='post.favorited' class="btn btn-default sns-btn-post-options" @click="unfavorite($event)">
        <span class="glyphicon glyphicon glyphicon-star"></span>
        <span v-if='post.num_favorites'> {{ post.num_favorites }} </span>
    </a>
    <a v-else class="btn btn-default sns-btn-post-options" @click="favorite($event)">
        <span class="glyphicon glyphicon glyphicon-star sns-grey"></span>
        <span v-if='post.num_favorites'> {{ post.num_favorites }} </span>
    </a>

</template>

<script>

	export default {
	  props:[ 'p' ],
	  data () {
		return {
	      post:this.p
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
							this.p.favorited = data.post.favorited;
							this.p.num_favorites = data.post.num_favorites;
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
	  	 favorite: function(event){
 			this.send('favorite',event);
    	 },
	  	 unfavorite: function(event){
  	 		this.send('unfavorite',event);
	  	 }
	  }
	}

</script>
