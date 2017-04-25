@extends('layout')

@section('header-append')
    <title>{{ trans('messages.editing') }} {{ $user->name}}</title>
@stop

@section('content')

    <div id="root" class="container">
        <br>
        <div class="well">

            {!! Form::open( ['method'=>'POST', 'route' => array('user.update', $user->id) , 'files'=>true ]) !!}

            <div class="media">

                <div class="media-left media-top">
                    <img class="thumbnail avatar" src="{{ $user->avatar }}" :alt="[ trans('messages.photo') ]">
                    {!! Form::file('avatar') !!}
                </div>

                <div class="media-body">

                    <h4 class="media-heading">
                        <div class="form-group">
                            {!! Form::text('name',$user->name, ['class'=>'form-control']) !!}
                        </div>
                    </h4>

                    <div class="form-group">
                        <user-entity :options="entities" :e="entity"></user-entity>
                    </div>

                    <div class="form-group">
                        {{ Form::text('email', $user->email, ['id'=>'email','class' => 'form-control','readonly', 'placeholder' => trans('messages.email')])}}
                    </div>

                    <div class="form-group">
                        {{ Form::textarea('description', $user->description, ['id'=>'description','rows'=>4, 'class' => 'form-control tinymce','placeholder' => trans('messages.user_hobbies') ])}}
                    </div>

                    <div class="form-group">
                        {{ Form::text('wp_dst', $user->wp_dst, ['id'=>'wp_dst','class' => 'form-control', 'placeholder' => trans('messages.sites_destination')])}}
                    </div>

                    @if (Auth()->user()->isAdmin())
                        <div class="form-group">
                                {{ Form::select('role', array('subscriptor' => 'Subscriptor', 'admin' => 'Administrador'), $user->role, ['class' => 'form-control']) }}
                        </div>
                        <div class="form-group">
                                <user-sinapsi :options="sinapsis" :s="sinapsi"></user-sinapsi>
                        </div>
                    @endif    

                </div>
            </div>

            <button type="submit" class="btn btn-primary">
                {{ trans('messages.update') }}
            </button>

            {!! Form::close() !!}

        </div>

    </div>

@stop

@section('footer-append')

    <script src="{{asset('js/app.js')}}"></script>

    <script>

        var vm = new Vue({
            el: "#root",
            data: {
                entity: {ID: "{{$user->entity_id}}", text: "{!! $user->entity_name !!} ({!! $user->entity_location !!}) "},
                entities: {!!  json_encode($entities) !!},
                sinapsi: {ID: "{{$sinapsi->id}}", text: "{!! $sinapsi->name !!} "},
                sinapsis: {!!  json_encode($sinapsis) !!}
            }
        });

    </script>

@stop
