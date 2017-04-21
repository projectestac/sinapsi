<template>

    <div class="row">

        <div class="col-md-3 hidden-xs">
            <label for="orderby">{{ trans('messages.educational_services') }}:</label>
        </div>

        <div class="col-md-9">
            <div class="dropdown">
                <multiselect v-model="ssee_UI"
                    :placeholder="trans('messages.filter_by_one_or_more_educational_services')"
                    :deselect-label="trans('messages.remove_to_selection')"
                     label="text"
                     track-by="ID"
                    :max-height="150"
                    :options="options"
                    :multiple="true"
                    :taggable="true"
                    :close-on-select="false"
                >
                </multiselect>
            </div>
        </div>

    </div>

</template>

<script>

import Multiselect from 'vue-multiselect'

export default {
    
    props:['from_UI','from_DB'],
    components: {
        Multiselect
    },
    data () {
        return {
            ssee_UI: [],
            ssee_DB: [],
            options: ssee,
            errors:[],
        }
    },
    watch: {
        ssee_UI: function () {
            bus.$emit('filters_changed','se',this.ssee_UI);
        }
    },
    mounted: function(){
       var se_name ="";
       var that = this;
       $.each(this.from_UI, function( index, se ) {
           se_name = $.grep(that.options, function(e){ return e.ID == se.ID; });
           that.ssee_UI.push({ 'ID': se.ID ,'text': se_name[0].text });
       });
        if (this.from_DB) {
            $.each(this.from_DB.split(","), function (index, se) {
                se_name = $.grep(that.options, function (e) {
                    return e.ID == se;
                });
                that.ssee_DB.push(se_name[0].text);
            });
        }
    },
    methods: {
        get_se: function(){
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: shared.baseUrl + '/api/v1/ssee',
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    this.options = response;
                }.bind(this),
                error: function (jqXHR, textStatus, message) {
                    this.errors.push(message);
                }.bind(this)
            });

        }
    }
}



var ssee = 
[
{
ID: "08870209",
text: "Servei Educatiu Ciutat de Badalona"
},
{
ID: "08870210",
text: "Servei Educatiu Ciutat de l'Hospitalet de Llobregat"
},
{
ID: "08870211",
text: "Servei Educatiu Ciutat de Sant Adrià de Besòs"
},
{
ID: "08870106",
text: "Servei Educatiu Ciutat Vella"
},
{
ID: "08870208",
text: "Servei Educatiu d'Osona"
},
{
ID: "08870305",
text: "Servei Educatiu de Castelldefels"
},
{
ID: "43870702",
text: "Servei Educatiu de l'Alt Camp"
},
{
ID: "17870505",
text: "Servei Educatiu de l'Alt Empordà"
},
{
ID: "08870215",
text: "Servei Educatiu de l'Alt Maresme"
},
{
ID: "08870212",
text: "Servei Educatiu de l'Alt Penedès"
},
{
ID: "25870605",
text: "Servei Educatiu de l'Alt Urgell"
},
{
ID: "25870609",
text: "Servei Educatiu de l'Alta Ribagorça i la Val d'Ara"
},
{
ID: "08870301",
text: "Servei Educatiu de l'Anoia"
},
{
ID: "25870606",
text: "Servei Educatiu de l'Urgell"
},
{
ID: "17870506",
text: "Servei Educatiu de La Cerdanya"
},
{
ID: "43870701",
text: "Servei Educatiu de la Conca de Barberà"
},
{
ID: "17870507",
text: "Servei Educatiu de la Garrotxa"
},
{
ID: "25870601",
text: "Servei Educatiu de la Noguera"
},
{
ID: "25870607",
text: "Servei Educatiu de la Segarra"
},
{
ID: "17870503",
text: "Servei Educatiu de la Selva I"
},
{
ID: "17870502",
text: "Servei Educatiu de la Selva II"
},
{
ID: "43870804",
text: "Servei Educatiu de la Terra Alta"
},
{
ID: "25870602",
text: "Servei Educatiu de les Garrigues"
},
{
ID: "08870207",
text: "Servei Educatiu de Mataró"
},
{
ID: "43870707",
text: "Servei Educatiu de Reus-Baix Camp"
},
{
ID: "43870803",
text: "Servei Educatiu de Ribera d'Ebre"
},
{
ID: "08870201",
text: "Servei Educatiu del Bages"
},
{
ID: "43870801",
text: "Servei Educatiu del Baix Ebre"
},
{
ID: "17870504",
text: "Servei Educatiu del Baix Empordà"
},
{
ID: "08870307",
text: "Servei Educatiu del Baix Llobregat I"
},
{
ID: "08870304",
text: "Servei Educatiu del Baix Llobregat II"
},
{
ID: "08870308",
text: "Servei Educatiu del Baix Llobregat III"
},
{
ID: "08870303",
text: "Servei Educatiu del Baix Llobregat IV"
},
{
ID: "08870302",
text: "Servei Educatiu del Baix Llobregat V"
},
{
ID: "08870309",
text: "Servei Educatiu del Baix Llobregat VI"
},
{
ID: "08870310",
text: "Servei Educatiu del Baix Llobregat VII"
},
{
ID: "08870306",
text: "Servei Educatiu del Baix Llobregat VIII"
},
{
ID: "08870205",
text: "Servei Educatiu del Baix Maresme"
},
{
ID: "43870703",
text: "Servei Educatiu del Baix Penedès"
},
{
ID: "08870213",
text: "Servei Educatiu del Berguedà"
},
{
ID: "08870214",
text: "Servei Educatiu del Garraf"
},
{
ID: "17870501",
text: "Servei Educatiu del Gironés"
},
{
ID: "43870802",
text: "Servei Educatiu del Montsià"
},
{
ID: "25870603",
text: "Servei Educatiu del Pla d'Urgell"
},
{
ID: "17870508",
text: "Servei Educatiu del Pla de l'Estany"
},
{
ID: "43870704",
text: "Servei Educatiu del Priorat"
},
{
ID: "17870509",
text: "Servei Educatiu del Ripollès"
},
{
ID: "25870608",
text: "Servei Educatiu del Segrià"
},
{
ID: "25870604",
text: "Servei Educatiu del Solsonès"
},
{
ID: "43870705",
text: "Servei Educatiu del Tarragonès"
},
{
ID: "08870404",
text: "Servei Educatiu del Vallès Occidental I"
},
{
ID: "08870405",
text: "Servei Educatiu del Vallès Occidental II"
},
{
ID: "08870406",
text: "Servei Educatiu del Vallès Occidental III"
},
{
ID: "08870407",
text: "Servei Educatiu del Vallès Occidental IV"
},
{
ID: "08870402",
text: "Servei Educatiu del Vallès Occidental V"
},
{
ID: "08870403",
text: "Servei Educatiu del Vallès Occidental VI"
},
{
ID: "08870401",
text: "Servei Educatiu del Vallès Occidental VII"
},
{
ID: "08870408",
text: "Servei Educatiu del Vallès Occidental VIII"
},
{
ID: "08870202",
text: "Servei Educatiu del Vallès Oriental I"
},
{
ID: "08870203",
text: "Servei Educatiu del Vallès Oriental II"
},
{
ID: "08870204",
text: "Servei Educatiu del Vallès Oriental III"
},
{
ID: "08870216",
text: "Servei Educatiu del Vallès Oriental IV"
},
{
ID: "25870610",
text: "Servei Educatiu dels Pallars"
},
{
ID: "08870107",
text: "Servei Educatiu Eixample"
},
{
ID: "08870105",
text: "Servei Educatiu Gràcia"
},
{
ID: "08870101",
text: "Servei Educatiu Horta-Guinardó"
},
{
ID: "08870102",
text: "Servei Educatiu Les Corts"
},
{
ID: "08870109",
text: "Servei Educatiu Nou Barris"
},
{
ID: "08870110",
text: "Servei Educatiu Sant Andreu"
},
{
ID: "08870104",
text: "Servei Educatiu Sant Martí"
},
{
ID: "08870206",
text: "Servei Educatiu Santa Coloma de Gramenet"
},
{
ID: "08870103",
text: "Servei Educatiu Sants-Montjuïc"
},
{
ID: "08870108",
text: "Servei Educatiu Sarrià-Sant Gervasi"
}
];

</script>