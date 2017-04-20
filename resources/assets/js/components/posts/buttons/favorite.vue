
<template>

    <div class="btn-group">

        <a v-if='post.favorited' :title="[ trans('messages.remove_from_favorites') ]" class="btn btn-default sns-btn-post-options" @click="unfavorite($event)">
            <span class="glyphicon glyphicon glyphicon-bookmark"></span>
            <span v-if='post.num_favorites'> {{ post.num_favorites }} </span>
        </a>
        <a v-else :title="[ trans('messages.add_to_favorites') ]" class="btn btn-default sns-btn-post-options" @click="favorite($event)">
            <span class="glyphicon glyphicon glyphicon-bookmark sns-grey"></span>
            <span v-if='post.num_favorites'> {{ post.num_favorites }} </span>
        </a>

    </div>

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
							this.p.favorited = data.post.favorited;
							this.p.num_favorites = data.post.num_favorites;
					}
					$(btn).removeClass('gly-spin');
				}.bind(this),
				error: function (jqXHR, textStatus, message) {
					alert("message");
					$(btn).removeClass('gly-spin');
				}.bind(this)
			});
	  	 },
	  	 favorite: function(event){
			 if (!shared.user.logged) {
				 alert("Has d'entrar per poder fer aquesta acció")
			 } else {
				 this.send('favorite', event);
			 }
    	 },
	  	 unfavorite: function(event){
			if (!shared.user.logged){
                alert("Has d'entrar per poder fer aquesta acció")
			} else {
				this.send('unfavorite', event);
			}
	  	 }
	  }
	}

</script>
