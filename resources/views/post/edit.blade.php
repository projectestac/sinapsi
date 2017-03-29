@extends('layout')

@section('header-append')
    <title>{{ trans('messages.editing') }} {{ $post->id }}</title>
@endsection

@section('content')

    <div id="root" class="container">

        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h3>{{ trans('messages.editing_post') }}</h3>

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
                    {!! Form::label('title', trans('messages.title') ) !!}:
                    {!! Form::text('title',$post->title, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('description', trans('messages.short_description') ) !!}
                    {!! Form::textarea ('description', $post->description, ['class'=>'form-control tinymce','rows'=>'3']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('content', trans('messages.content_1') ) !!}
                    {!! Form::textarea ('content',$post->content, ['class'=>'form-control tinymce']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('fullcontent', trans('messages.at_new_list_show') ) !!}<br>
                    {!! Form::radio('fullcontent', 0, !$post->fullcontent);!!} {{ trans('messages.only_description') }}
                    {!! Form::radio('fullcontent', 1 ,$post->fullcontent);!!} {{ trans('messages.all_content') }}
                </div>

                <div class="form-group">
                    {!! Form::label('thumb', trans('messages.optional_image') ) !!}
                    <br>
                    <img width=300px src="{{ url($post->thumb) }}">
                    <br><br>
                    {!! Form::file('thumb') !!}
                </div>

                <div class="form-group">
                    {!! Form::label('tags', trans('messages.descriptors') ) !!}
                    <tags-list :options="all_tags" :selected="selected_tags"></tags-list>
                </div>

                <div class="form-group">
                    {!! Form::label('parent_id', trans('messages.parent_post') ) !!}:
                    {!! Form::text('parent_id',$post->parent_id, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('order', trans('messages.order_1') ) !!}:
                    {!! Form::text('order',$post->order, ['class'=>'form-control']) !!}
                </div>

                <button type="submit" class="btn btn-primary">
                    {{ trans('messages.update_post') }}
                </button>

                <a href="{{ url('post').'/'.$post->id }}" class="btn btn-default">
                    {{ trans('messages.display_post') }}
                </a>

                {!! Form::close() !!}
            </div>
        </div>

    </div>
@endsection

@section('footer-append')

    <script src="{{ asset('js/Sortable.js') }}"></script>

    <script>

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