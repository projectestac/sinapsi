@extends('layout')

@section('content')

    <div class="container well sns-error">
        <h3>{{  $err_message }}</h3>
        <p>{{ trans('messages.not_access') }} <strong>{{ trans('messages.mail_gencat') }}</strong></p>
    </div>

@stop