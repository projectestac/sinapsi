
@extends('layout')

@section('header-append')
    <title>Editant Sinapsis i descriptors</title>
@stop

@section('content')

    <div id="root" class="container">
        <div class="row">
            <div class="col-md-8">

                <br><br>
                <h2>Sinapsis i descriptors</h2>

                {!! Form::open(['edit','method'=>'POST','files'=>true]) !!}

                @include('partials.errors')

                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#config-basic">Configuració general</a></li>
                    <li><a data-toggle="tab" href="#config-tags">Descriptors</a></li>
                    <li><a data-toggle="tab" href="#config-users">Usuaris</a></li>
                </ul>

                <div class="tab-content">
                    <br>
                    <div id="config-basic" class="tab-pane fade in active">

                        <div class="llistat_collapse">
                            <div class="panel-group llistat_collapse_cont">

                                <div class="panel panel-default">

                                    {{-- DESCRIPTION --}}
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#acordio_distribuidora" href="#description">Descripció</a>
                                        </h2>
                                    </div>

                                    <div id="description" class="panel-collapse collapse" style="height: 0px;">
                                        {!! Form::textarea('description', $description, ['class' => 'form-control tinymce']) !!}
                                    </div>

                                    {{-- BLOCS --}}
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#acordio_distribuidora" href="#blocs">Blocs</a>
                                        </h2>
                                    </div>
                                    <div class="row">

                                        <div class="col-xs-12 col-sm-6">
                                            <block-builder></block-builder>
                                        </div>

                                        <div class="col-xs-12 col-sm-6">
                                            <p>
                                                <i>Previsualitació dels blocs</i>
                                            </p>
                                            <sns-blocks-list :pagetype="pagetype" :info="info"></sns-blocks-list>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="config-tags" class="tab-pane fade in">

                        <div class="llistat_collapse">
                            <div class="panel-group llistat_collapse_cont">

                                <div class="panel panel-default">

                                    {{-- TAGS --}}

                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora"
                                               href="#addAlias">Afegir alias</a>
                                        </h2>
                                        <div id="addAlias" class="panel-collapse collapse" style="height: 0px;">
                                            <br>
                                            <div class="form-group">
                                                <label for="slug">Descriptor a substituir</label>
                                                <input type="text" class="form-control" v-model="slug"
                                                       placeholder="Pot ser una expressió regular">
                                            </div>
                                            <div class="form-group">
                                                <label for="slug_alias">Descriptor alias</label>
                                                <input type="text" class="form-control" v-model="slug_alias">
                                            </div>
                                            <div class="form-group">
                                                <label for="name_alias">Nom alias</label>
                                                <input type="text" class="form-control" v-model="name_alias">
                                            </div>

                                            <button type="submit" class="btn btn-primary" @@click.prevent="addAlias()">Afegir</button>
                                            <br><br>
                                            <div v-if="message" class="alert alert-@{{message.type}}" role="alert">@{{message.text}}</div>

                                        </div>
                                    </div>

                                    <div class="panel-heading">

                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora"
                                               href="#alias">Llista d'alias</a>
                                        </h2>

                                        <div id="alias" class="panel-collapse collapse" style="height: 0px;">

                                            <br><br>
                                            <table class="table" id="tbl_alias">
                                                <thead>
                                                <th>Descriptor</th>
                                                <th>Descriptor alias</th>
                                                <th>Nom alias</th>
                                                <th></th>
                                                </thead>

                                                @foreach ( $aliases as $alias )
                                                    <tr>
                                                        <td>{{ $alias['slug'] }}</td>
                                                        <td>{{ $alias['slug_alias'] }}</td>
                                                        <td>{{ $alias['name_alias'] }}</td>
                                                        <td><a href="#" @@click.prevent="destroyAlias({{ $alias['id'] }})">Esborrar</a></td>
                                                    </tr>
                                                @endforeach
                                            </table>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div id="config-users" class="tab-pane fade in">

                        <div class="llistat_collapse">
                            <div class="panel-group llistat_collapse_cont">

                                <div class="panel panel-default">

                                    {{-- ADMINISTRATORS --}}
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora"
                                               href="#administrators">Administradors</a>
                                        </h2>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <p class="pull-right">
                        <button type="submit" class="btn btn-primary sns-btn-save">
                            Desa
                        </button>
                    </p>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop

@section('footer-append')


    <script src="{{ asset('js/app.js') }}" ></script>
    <script src="{{ asset('js/Sortable.js') }}" ></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jq-2.2.3/dt-1.10.12/datatables.min.js"></script>

    <script>

        var mixin = {};
        var bus = new Vue();

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype:'sns-tags',
                info:'0',
                aliases:'',
                slug:'',
                slug_alias:'',
                name_alias:'',
                message:''
            },
            mounted: function(){
                this.getAlias();
            },
            methods:{
                getAlias: function(){
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: location.protocol + "//" + location.host +'/get-alias',
                        method: 'POST',
                        dataType: 'json',
                        success: function (data) {
                            this.aliases = data;
                        }.bind(this),
                        error: function (jqXHR, textStatus, message) {
                            //this.errors.push(message);
                        }.bind(this)
                    });
                },
                addAlias: function(){
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: location.protocol + "//" + location.host + '/add-alias',
                        method: 'POST',
                        dataType: 'json',
                        data: {
                            slug: this.slug,
                            slug_alias: this.slug_alias,
                            name_alias: this.name_alias
                        },
                        success: function (data) {
                            this.message = {'type':'success', 'text':"S'ha afegit el nou alias"};
                            //Add into datatable
                            $('#tbl_alias').dataTable().fnAddData( [
                                this.slug, this.slug_alias, this.name_alias,'Refresca per esborrar'
                            ]);
                            this.slug = "";
                            this.slug_alias = "";
                            this.name_alias = "";
                        }.bind(this),

                        error: function (jqXHR, textStatus, message) {
                            this.message = {'type':'danger', 'text':"S'ha produit un error: "+message};
                        }.bind(this)
                    });
                },
                destroyAlias: function(id){
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: 'http://'+window.location.hostname+'/destroy-alias',
                        method: 'POST',
                        dataType: 'json',
                        data: {
                            id: id
                        },
                        success: function (data) {
                            alert("Esborrat correctament!");
                            // TODO: delete from datatable
                            //$('#tbl_alias').dataTable().fnDeleteRow();
                        }.bind(this),

                        error: function (jqXHR, textStatus, message) {
                            this.message = {'type':'danger', 'text':"S'ha produit un error: "+message};
                        }.bind(this)
                    });
                }
            }

        });

        Sortable.create(document.getElementById('blockList'),{
            onUpdate: function(evt) {
                bus.$emit('update_order',evt);
            }
        });

        $(document).ready(function(){

            var tbl_alias = $('#tbl_alias').DataTable({
                "pageLength": 25,
                "dom": '<"top"f>rt<"bottom"ip><"clear">',
                "language": {
                    "search":         "Cercar:",
                    "zeroRecords": "No hi ha resultats",
                    "thousands": ".",
                    "info": "Mostrant _START_-_END_ de _TOTAL_",
                    "infoEmpty": "No hi ha registres",
                    "infoFiltered": "(filtrat de _MAX_ registres)",
                    "paginate": {
                        "first":      "Primer",
                        "last":       "Últim",
                        "next":       "Següent",
                        "previous":   "Anterior"
                    },
                }
            });

        });

    </script>

@stop