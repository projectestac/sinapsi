<template>
	
<div class="inline">
	<button id="btn_get_comments" type="submit" class="btn btn-default sns-btn-post-options"
			data-toggle="collapse"
			:href="'#comments-'+ post.id" @click='getComments($event)'>
		<span id="comments-icon" :class="{'glyphicon':true,
					   'glyphicon-comment': true,
					   'void': post.num_comments == 0
					 }">
		</span>
		<span v-if='post.num_comments'>{{ post.num_comments }}</span>
		<span v-else>Comenta</span>
	</button>

	<div class="collapse" :id="'comments-' + post.id">
		<ul class="sns-list-comments">
			<li class="sns-comment" v-for='comment in comments' :key="comment.id">
              <sns-comment :c="comment"></sns-comment>
			</li>
		</ul>
		
		<form v-if="user_logged" method="POST">
			<textarea v-model="new_comment.text" class="form-control" placeholder="Afegeix un comentari..." rows=2></textarea>
			<button type="submit" class="btn btn-primary" :post="post" @click.prevent='doComment(new_comment, $event)'>
				Envia
			</button>
		</form>
		<div v-else>
			<a href="#" :onclick="'popupwindow(\'' + baseurl + '/auth\',\'Validant...\',600,600)'">Entra</a> per afegir un comentari
		</div>
	</div>
</div>	

<!--<ul v-if="errors.length" class="text-danger">
		<li v-for="error in errors">@{{ error }}</li>
</ul>-->

</template>

<script>


import snsComment from "../views/partials/comment.vue";

export default {
  
  props:[ 'p' ],
  components: { snsComment }, 
  data () {
	return {
      post:this.p,
      errors:this.errors,
      baseurl: shared.baseUrl,
      comments:[],
      new_comment:{text:""},
      user_logged : shared.user.logged
    }
  },
  created: function() {
		// Listen when a comment component emit a delete_comment event
		bus.$on('delete_comment', function (comment) {
			this.delete_comment(comment.id);
		}.bind(this));
	},
    
  methods: {

	  getComments: function(event){
             this.errors = [];
             var btn = event.currentTarget.childNodes[0];
             $(btn).addClass('gly-spin');

            $.ajax({
                url: shared.baseUrl + '/api/v1/post/' + this.post.id + '/comments',
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                    if (data.success) {
                            this.comments = data.comments;
                            this.p.num_comments = data.comments.length;
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
  	 doComment: function(event){

            this.errors = [];

            $( "#comments-icon" ).addClass('gly-spin');

            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl +'/api/v1/post/'+this.post.id+'/comment',
                method: 'POST',
                dataType: 'json',
                data: {
                    text: this.new_comment.text,
                    post_id: this.p.id
                },
                success: function (data) {
                    this.comments.push(data.comment);
                    this.p.num_comments =  this.comments.length;
					          $( "#comments-icon" ).removeClass('gly-spin');
                }.bind(this),

                error: function (jqXHR, textStatus, message) {
                    switch (message){
                        case 'Unauthorized':
                            this.errors.push("Has d'entrar per poder fer aquesta acció");
                            break;
                        case 'Internal Server Error':
                            this.errors.push("S'ha produit un error processant la vostra petició. Torna a prova en una estona");
                            break;
                        default:
                            this.errors.push("El servidor no respón, torna a provar en una estona");
                    }
      					    $("#comments-icon").removeClass('gly-spin');
                }.bind(this),

            });

            this.new_comment = {text:""};
        },


      delete_comment: function(id){
          var that = this;
          $.each(this.comments, function( index, comment ) {
              if (comment.id == id){
                  that.comments.splice(index,1);
                  that.p.num_comments =  that.comments.length;
                  return false; // Get out each
              }
          });
      }

  	}

}



</script>