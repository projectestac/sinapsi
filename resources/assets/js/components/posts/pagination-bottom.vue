<template>

    <div class="column paginacio">

        <ul class="pagination hidden-xs ">

            <li>
                <a v-if="prev" href="#" class="anterior" @click="get_prev">anterior</a>
                <a v-else class="desactivat">anterior</a>
            </li>

            <li v-for="link in links" track-by="$index">
                <a  :class="{ 'actiu2': current_page == link, disabled: isNaN(link)}"
                    href="#" :title="link" :data-page="link" @click="get_posts">
                    {{ link }}
                </a>
            </li>

            <li>
                <a v-if="next" href="#" class="seguent"  @click="get_next">següent</a>
                <a v-else class="desactivat">següent</a>
            </li>

        </ul>

    </div>

</template>

<script>
export default
{
    data () {
        return {
            /*show: false,*/
            last_page:0,
            current_page:1,
            limit: 4,
            base_url:location.protocol + "//" + location.host,
            }
    },
    mounted: function() {

        bus.$on('pagination_available', function(pagination){
            this.last_page = pagination.last_page;
            this.current_page = pagination.current_page;
        }.bind(this));

        bus.$on('filters_applied', function(filters){
            this.filters = filters;
        }.bind(this));
    },
    computed: {
        pages: function () {
            var pages = [];
            for (var i = 1; i <= this.last_page; i++) {
                pages.push(i);
            }
            return pages;
        },
        links: function () {
            var first = [1, '...'],
                last = ['...', this.last_page],
                range = [];

            if (this.current_page <= this.limit) {
                range = this.range(1, this.limit + 1);
                return (this.current_page + range.length) <= this.last_page ? range.concat(last) : range;

            } else if (this.current_page > (this.last_page - this.limit)) {
                range = this.range(this.last_page - (this.limit), this.last_page);
                return (this.current_page - range.length) >= 1 ? first.concat(range) : range;

            } else {
                range = this.range(this.current_page - Math.ceil(this.limit / 2), this.current_page + Math.ceil(this.limit / 2));
                return first.concat(range).concat(last);
            }
        },
        next: function () {
            var next = this.current_page + 1;
            return next <= this.last_page ? next : false;
        },
        prev: function () {
            return this.current_page - 1;
        },
        /*show: function () {
            return this.next || this.prev;
        }*/
    },
    methods: {

        get_posts: function(event){
            var page = event.target.getAttribute('data-page');
            bus.$emit('get_posts',"page="+page);
        },
        get_next: function(page){
            bus.$emit("get_posts",'page='+ (+this.current_page+1));
        },
        get_prev: function(page){
            bus.$emit("get_posts",'page='+ (+this.current_page-1));
        },

        range: function (start, end) {
            var pages = [];
            for (var i = start - 1; i < end; i++) {
                if (this.pages[i]) {
                    pages.push(this.pages[i]);
                }
            }
            return pages;
        }
    }
}

</script>