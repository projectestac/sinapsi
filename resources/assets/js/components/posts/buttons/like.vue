 
<template>
	
		 <a v-if='post.liked' title="Ja no m'agrada" class="btn btn-default sns-btn-post-options" @click="unlike($event)">
		    <span class="glyphicon glyphicon glyphicon-heart"></span>
		    <span v-if='post.num_likes'>{{ post.num_likes }}</span>
		 </a>
		 
		 <a v-else title="M'agrada" class="btn btn-default sns-btn-post-options" @click="like($event)">
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
	      errors:[]
	    }
	  },
	  methods:{

	  	 send: function(action, event){
			 this.errors = [];
			 var btn = event.currentTarget.childNodes[0];
			 $(btn).addClass('gly-spin');

			$.ajax({
				url: shared.baseUrl + '/api/v1/post/' + this.post.id + '/'+action,
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
                    alert(message);
					$(btn).removeClass('gly-spin');
				}.bind(this)
			});
	  	 },
	  	 like: function(event){
             if (!shared.user.logged) {
                 alert("Has d'entrar per poder fer aquesta acció");
             } else {
                 this.send('like', event);
             }
    	 },
	  	 unlike: function(){
             if (!shared.user.logged) {
                 alert("Has d'entrar per poder fer aquesta acció");
             } else {
                 this.send('unlike', event);
             }
	  	 }

	  }
	}

</script>
