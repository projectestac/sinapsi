@extends('layout')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">

                <h2>Editant TAG</h2>

                {!! Form::open(['method'=>'POST']) !!}

                @include('errors/errors')

                <div class="form-group">

                    {!! Form::label('name', 'Nom') !!}

                    {!! Form::hidden('id', $tag->id)!!}

                    {!! Form::text('name', $tag->name, [
                            'class' => 'form-control'
                        ])
                    !!}

                    {!! Form::label('description', 'Descripció') !!}

                    {!!
                        Form::textarea('description', $tag->description, [
                            'class' => 'form-control tinymce'
                        ])
                    !!}

                    {!! Form::label('slug', 'Descriptor') !!}

                    {!!
                        Form::text('slug', $tag->slug, [
                            'class' => 'form-control',
                            'disabled'=>'disabled'
                        ])
                    !!}

                </div>

                <p>
                    <button type="submit" class="btn btn-primary">
                        Desa
                    </button>
                </p>

                {!! Form::close() !!}

            </div>
        </div>
    </div>
@stop
