@extends('layout')

@section('header-append')
    <title>Sinapsi - Nou article</title>
@endsection

@section('content')

    <div id="root" class="container">
        <div class="row">


            <h3>Nou article</h3>

            {!! Form::open( ['route' => 'posts.store', 'method'=>'POST', 'files'=>true ]) !!}
            <div class="col-md-8">
                <div class="form-group">
                    {!! Form::label('title', 'Títol' ) !!}:
                    {!! Form::text('title',null, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('description','Descripció breu:') !!}
                    {!! Form::textarea ('description', null, ['class'=>'form-control','rows'=>'3']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('content', 'Contingut:') !!}
                    {!! Form::textarea ('content',null, ['class'=>'form-control tinymce']) !!}
                </div>

            </div>

            <div class="col-md-4">

                <br><br><br>

                <div class="form-group">
                    {!! Form::label('fullcontent', 'A la llista de notícies mostra:') !!}<br>
                    {!! Form::radio('fullcontent', 0, true);!!} Només la descripció
                    {!! Form::radio('fullcontent', 1 ,false);!!} Tot el contingut
                </div>

                <div class="form-group">
                    {!! Form::label('thumb', 'Imatge (opcional)') !!}
                    {!! Form::file('thumb') !!}
                </div>
                <div class="form-group">
                    {!! Form::label('tags', 'Descriptors') !!}
                    <tags-list :options="tags"></tags-list>
                </div>
                <div class="form-group">
                    {!! Form::label('parent_id', 'Article pare' ) !!}:
                    {!! Form::text('parent_id',null, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('order', 'Ordre relatiu' ) !!}:
                    {!! Form::text('order',null, ['class'=>'form-control']) !!}
                </div>

                <br><br>
                <button type="submit" class="btn btn-primary">
                    Publica
                </button>

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
                info: "new",
                slug: "",
                name: "",
                querystring: "",
                tags: {!!  json_encode($tags) !!}
            }
        });

        /*Sortable.create(document.getElementById('blockList'),{
         onUpdate: function(evt) {
         bus.$emit('update_order',evt);
         }
         });*/

    </script>


@endsection