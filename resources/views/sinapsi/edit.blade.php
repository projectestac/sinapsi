@extends('layout')

@section('header-append')
    <title>Editant {{ $sinapsi->name }}</title>
@stop

@section('content')

    <div id="root" class="container">
        <div class="row">
            <div class="col-md-8">
                <br><br>
                <h2> Editant Sinapsi {{ $sinapsi->name }}</h2>

                {!! Form::open(['url'=>$sinapsi->slug.'/edit','method'=>'POST','files'=>true]) !!}

                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#config-basic">Dades bàsiques</a></li>
                    <li><a data-toggle="tab" href="#config-filters">Filtres</a></li>
                    <li><a data-toggle="tab" href="#config-blocks">Blocs a la barra lateral</a></li>
                    <li><a data-toggle="tab" href="#config-users">Usuaris</a></li>
                </ul>

                <div class="tab-content">
                    <br>
                    <div id="config-basic" class="tab-pane fade in active">

                        <div class="row">
                            <div class="media-left media-top col-md-3">
                                <img class="thumbnail avatar" src="{{ $sinapsi->logo }}" alt="logo"
                                     onclick="document.getElementById('sns_logo').click();">
                                <input type="file" id="sns_logo" name="sns_logo" style="display: none;"/>
                                <a href="#">Esborra logo</a>
                            </div>

                            <div class="col-md-9">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="name">Nom</label>
                                    <input name="name" type="text" class="form-control" v-model="name">
                                </div>

                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="slug">Adreça web</label>
                                    <input name="slug" type="text" class="form-control" v-model="slug">
                                    <p>{{url('/')}}/@{{ slug }}<p>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            {!! Form::label('sinapsi', 'Sinapsi Mare:') !!}
                            <sinapsis-list :options="sinapsis" :s="parent_id"></sinapsis-list>
                        </div>

                        <div class="form-group">
                            {!! Form::label('type', 'Tipus de sinapsi') !!}
                            <br>
                            {!! Form::radio('type', 'auto' , ( $sinapsi->type  == 'auto') ) !!} Automàtica (segons
                            filtres)
                            {!! Form::radio('type', 'manual' , ( $sinapsi->type  == 'manual') ) !!} Manual (selecció
                            d'articles un per un)
                        </div>

                        <div class="form-group">
                            {!! Form::label('type', 'Visualització dels articles per defecte') !!}
                            <br>
                            {!! Form::radio('postview', 'sns-medium-card' ,  ( $sinapsi->postview  == 'sns-medium-card') ) !!}
                            <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>&nbsp; Òptim &nbsp;
                            {!! Form::radio('postview', 'sns-list' ,    ( $sinapsi->postview  == 'sns-list') ) !!} <span
                                    class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>&nbsp; Llista
                            &nbsp;
                            {!! Form::radio('postview', 'sns-gallery' , ( $sinapsi->postview  == 'sns-gallery') ) !!}
                            <span class="glyphicon glyphicon-picture" aria-hidden="true"></span>&nbsp; Galeria &nbsp;
                        </div>


                        <div class="form-group">
                            {!! Form::label('description', 'Descripció') !!}
                            {!! Form::textarea('description', $sinapsi->description, ['class' => 'form-control tinymce']) !!}
                        </div>

                        <div class="alert alert-danger" role="alert">
                            <a href="{{ url($sinapsi->slug) }}/destroy">Elimina sinapsi</a>
                        </div>

                    </div>

                    <div id="config-filters" class="tab-pane fade in">
                        <sns-filters :qs="querystring"></sns-filters>
                    </div>

                    <div id="config-blocks" class="tab-pane fade in">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <block-builder></block-builder>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <sns-blocks-list pagetype="sinapsi" info="{{$sinapsi->id}}"
                                                 edit="true"></sns-blocks-list>
                            </div>
                        </div>
                    </div>

                    <div id="config-users" class="tab-pane fade in">
                        <h3>Administradors</h3>
                        <p><i>Poden renombrar la sinapsi, modificar la descripció i gestionar els blocs de la barra
                                lateral</i></p>
                        select admins


                        <h3>Editors</h3>
                        <p><i>Poden incloure i treure articles a la sinapsi (si la sinapsi és de tipus manual)</i></p>
                        select editors
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

@stop

@section('footer-append')

    <script src="{{ asset('js/Sortable.js') }}"></script>

    <script>

        var bus = new Vue();

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: 'sinapsi',
                info: {{$sinapsi->id}},
                slug: "{{$sinapsi->slug}}",
                name: "{{$sinapsi->name}}",
                querystring: "{{$sinapsi->querystring}}",
                parent_id: {id: '{{$sinapsi->parent_id}}', name: '{{$sinapsi->parent_name}}'},
                sinapsis: {!! json_encode($sinapsis) !!}
            }
        });

        Sortable.create(document.getElementById('blockList'), {
            onUpdate: function (evt) {
                bus.$emit('update_order', evt);
            }
        });

    </script>

@stop
