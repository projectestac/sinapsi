<template>

    <ul class="pagination sns-pagination-mini hidden-xs">
        <span v-if="total_posts!=0" class="sns-total-results" v-html="msg_results"></span>

        <div v-if="total_posts==0" class="sns-total-results-void">
            No s'han trobat resultats.<br><br>
            Pots fer servir l'operador * per ampliar la cerca:<br>
            <ul>
                <li>alumne : trobarà només els articles amb la paraula "alumne"
                <li>alumn* : trobarà articles amb "alumne", "alumna", "alumnat", "alumnes", etc.
            </ul>
        </div>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                total_posts: "(calculant...)"
            }
        },
        computed:{
            msg_results: function(){
                if (this.total_posts == 1 ){
                    return "S'ha trobat <strong>1</strong> resultat";
                }
                return "S'han trobat <strong>" + this.total_posts +"</strong> resultats";
            }
        },
        mounted: function(){

            bus.$on('pagination_available', function(pagination){
                this.total_posts = pagination.total_posts;
            }.bind(this));

            bus.$on('searching', function(){
                this.total_posts = "(calculant...)";
            }.bind(this));

        },
    }
</script>