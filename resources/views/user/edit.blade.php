@extends('layout')

@section('header-append')
    <title>Editant {{ $user->name}}</title>
@stop

@section('content')

    <div id="root" class="container">
        <br>
        <div class="well">

            {!! Form::open( ['method'=>'POST', 'route' => array('user.update', $user->id) , 'files'=>true ]) !!}

            <div class="media">

                <div class="media-left media-top">
                    <img class="thumbnail avatar" src="{{ $user->avatar }}" alt="foto">
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
                        {{ Form::text('email', $user->email, ['id'=>'email','class' => 'form-control','readonly', 'placeholder' => 'Correu electrònic'])}}
                    </div>

                    <div class="form-group">
                        {{ Form::textarea('description', $user->description, ['id'=>'description','rows'=>4, 'class' => 'form-control tinymce','placeholder' => 'Explica\'ns alguna cosa de tu (aficions, projectes...)'])}}
                    </div>

                    <div class="form-group">
                        {{ Form::text('wp_dst', $user->wp_dst, ['id'=>'wp_dst','class' => 'form-control', 'placeholder' => 'Nodes, XTECBlocs o web WordPress de destí'])}}
                    </div>

                    <user-sinapsi :options="sinapsis" :s="sinapsi"></user-sinapsi>

                </div>
            </div>

            <button type="submit" class="btn btn-primary">
                Actualitza
            </button>

            {!! Form::close() !!}

        </div>

    </div>

@endsection

@section('footer-append')

    <script src="{{asset('js/app.js')}}"></script>

    <script>

        var vm = new Vue({
            el: "#root",
            data: {
                entity: {ID: '{{$user->entity_id}}', text: '{{$user->entity_name}} ({{$user->entity_location}}) '},
                entities: {!!  json_encode($entities) !!},
                sinapsi: {ID: '{{$sinapsi->id}}', text: '{{$sinapsi->name}} '},
                sinapsis: {!!  json_encode($sinapsis) !!}
            }
        });

    </script>

@stop
