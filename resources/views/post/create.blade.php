@extends('layout')

@section('header-append')
    <title>{{ trans('messages.sinapsi') }} - {{ trans('messages.new_post') }}</title>
@endsection

@section('content')

    <div id="root" class="container">
        <div class="row">


            <h3>{{ trans('messages.new_post') }}</h3>

            {!! Form::open( ['route' => 'posts.store', 'method'=>'POST', 'files'=>true ]) !!}
            <div class="col-md-8">
                <div class="form-group">
                    {!! Form::label('title', trans('messages.title') ) !!}:
                    {!! Form::text('title',null, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('description', trans('messages.short_description' )) !!}
                    {!! Form::textarea ('description', null, ['class'=>'form-control','rows'=>'3']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('content', trans('messages.content_1') ) !!}
                    {!! Form::textarea ('content',null, ['class'=>'form-control tinymce']) !!}
                </div>

            </div>

            <div class="col-md-4">

                <br><br><br>

                <div class="form-group">
                    {!! Form::label('fullcontent', trans('messages.at_new_list_show') ) !!}<br>
                    {!! Form::radio('fullcontent', 0, true);!!} {{ trans('messages.only_description') }}
                    {!! Form::radio('fullcontent', 1 ,false);!!} {{ trans('messages.all_content') }}
                </div>

                <div class="form-group">
                    {!! Form::label('thumb', trans('messages.optional_image') ) !!}
                    {!! Form::file('thumb') !!}
                </div>
                <div class="form-group">
                    {!! Form::label('tags', trans('messages.descriptors') ) !!}
                    <tags-list :options="tags"></tags-list>
                </div>
                <div class="form-group">
                    {!! Form::label('parent_id', trans('messages.parent_post') ) !!}:
                    {!! Form::text('parent_id',null, ['class'=>'form-control']) !!}
                </div>

                <div class="form-group">
                    {!! Form::label('order', trans('messages.relative_order') ) !!}:
                    {!! Form::text('order',null, ['class'=>'form-control']) !!}
                </div>

                <br><br>
                <button type="submit" class="btn btn-primary">
                    {{ trans('messages.publish') }}
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