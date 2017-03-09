@extends('layout')

@section('header-append')
    <title>Editant {{ $post->id }}</title>
@endsection

@section('content')

    <div id="root" class="container">

        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h3>Editant post</h3>

                {!! Form::open( ['method'=>'POST', 'files'=>true ]) !!}

                <a href="{{ url($post->source_url) }}">
                    {{ $post->source_name }}
                </a>

                <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                {{ $post->source_location }}

                <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
                {{ $post->pub_date }}

                <br><br>

                {!! Form::hidden('id',$post->id) !!}

                <div class="form-group">
                    {!! Form::label('title', 'Títol' ) !!}:
                    {!! Form::text('title',$post->title, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('description','Descripció breu:') !!}
                    {!! Form::textarea ('description', $post->description, ['class'=>'form-control tinymce','rows'=>'3']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('content', 'Contingut:') !!}
                    {!! Form::textarea ('content',$post->content, ['class'=>'form-control tinymce']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('fullcontent', 'A la llista de notícies mostra:') !!}<br>
                    {!! Form::radio('fullcontent', 0, !$post->fullcontent);!!} Només la descripció
                    {!! Form::radio('fullcontent', 1 ,$post->fullcontent);!!} Tot el contingut
                </div>

                <div class="form-group">
                    {!! Form::label('thumb', 'Imatge (opcional)') !!}
                    <br>
                    <img width=300px src="{{ url($post->thumb) }}">
                    <br><br>
                    {!! Form::file('thumb') !!}
                </div>

                <div class="form-group">
                    {!! Form::label('tags', 'Descriptors') !!}
                    <tags-list :options="all_tags" :selected="selected_tags"></tags-list>
                </div>

                <div class="form-group">
                    {!! Form::label('parent_id', 'Article pare' ) !!}:
                    {!! Form::text('parent_id',$post->parent_id, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('order', 'Ordre' ) !!}:
                    {!! Form::text('order',$post->order, ['class'=>'form-control']) !!}
                </div>

                <button type="submit" class="btn btn-primary">
                    Actualitza notícia
                </button>

                <a href="{{ url('post').'/'.$post->id }}" class="btn btn-default">
                    Visualitza notícia
                </a>

                {!! Form::close() !!}
            </div>
        </div>

    </div>
@endsection

@section('footer-append')

    <script src="{{ asset('js/Sortable.js') }}"></script>

    <script>

        var bus = new Vue();

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: 'post',
                info: "{{ $post->id }}",
                slug: "",
                name: "",
                querystring: "",
                all_tags: {!!  json_encode($all_tags) !!},
                selected_tags: {!!  json_encode($selected_tags) !!}
            }
        });

        /*Sortable.create(document.getElementById('blockList'),{
         onUpdate: function(evt) {
         bus.$emit('update_order',evt);
         }
         });*/

    </script>


@endsection