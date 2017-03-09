<template>
<div>
    <div class='sns-block-container' v-for='sinapsi in sinapsis' transition='fade'>
        <div class='basic_color xar-socials sns-gris'>
            <a class='tit' :href='sinapsi.slug' :title='sinapsi.name'><h3>{{sinapsi.name}}</h3></a>
            <p></p>
            <p>{{sinapsi.description}}</p>
            <p></p>
        </div>
    </div>
</div>
</template>


<script>

export default {

    data: function () {
        return {
            sinapsis: []
        }
    },

    mounted: function(){
        bus.$on('filters_applied', function(filters){
            this.get_sinapsis(filters);
        }.bind(this));
    },
    
    methods: {
        get_sinapsis: function (filters) {
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: location.protocol + "//" + location.host + '/q/sinapsis' + this.filters,
                method: 'POST',
                dataType: 'json',
                success: function (data) {
                    this.sinapsis = data;
                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });

        }
    }

}

</script>
                