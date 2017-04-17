@extends('layout')

@section('header-append')
    <title>{{ trans('messages.edit_home') }}</title>
@stop

@section('content')

    <div class="container" id="root">
        <div class="row">
            <div class="col-md-9">

                <br><br>
                <h2>{{ trans('messages.general_settings') }}</h2>

                {!! Form::open(['edit','method'=>'POST','files'=>true]) !!}

                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#config-basic">{{ trans('messages.homepage') }}</a></li>
                    <li><a data-toggle="tab" href="#config-users">{{ trans('messages.users') }}</a></li>
                </ul>

                <div class="tab-content">
                    <br>
                    <div id="config-basic" class="tab-pane fade in active">

                        <div class="llistat_collapse">
                            <div class="panel-group llistat_collapse_cont">

                                <div class="panel panel-default">

                                    {{-- LOGO --}}
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora" href="#logo">{{ trans('messages.logo') }}</a>
                                        </h2>
                                    </div>

                                    <div id="logo" class="panel-collapse collapse" style="height: 0px;">

                                        @if (!empty($home['logo']))
                                            <img alt="sinapsi_logo" src="{{ asset($home['logo']) }}">
                                            <a href="#">{{ trans('messages.remove_image') }}</a>
                                            <br>

                                        @else
                                            <div class="row">
                                                <div class="col-xs-12 col-sm-6">
                                                    <h1 class="sns-home-title">{{ trans('messages.sinapsi') }}<span
                                                                class="sns-domain">.xtec.cat</span></h1>
                                                </div>
                                                <div class="col-xs-12 col-sm-6">
                                                    <p style="margin:0;margin-top:6px"><strong>{{ trans('messages.schools_and_colleges_in_catalonia') }}</strong><br>
                                                        {{ trans('messages.sharing_what_they_do') }}</p>
                                                </div>
                                            </div>
                                        @endif
                                        <br>
                                        {!! Form::file('logo') !!}
                                        <br>
                                        <br>
                                    </div>

                                    {{-- DESCRIPTION --}}
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora" href="#description">{{ trans('messages.description') }}</a>
                                        </h2>
                                    </div>

                                    <div id="description" class="panel-collapse collapse" style="height: 0px;">
                                        {!! Form::textarea('description', $home['description'], ['class' => 'form-control tinymce']) !!}
                                    </div>

                                    {{-- BLOCS --}}
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora" href="#blocs">{{ trans('messages.blocks') }}</a>
                                        </h2>
                                    </div>
                                    <div class="row">

                                        <div class="col-xs-12 col-sm-6">
                                            <block-builder></block-builder>
                                        </div>

                                        <div class="col-xs-12 col-sm-6">
                                            <p>
                                                <i>{{ trans('messages.preview_blocks') }}</i>
                                            </p>
                                            <sns-blocks-list :pagetype="pagetype" :info="info"
                                                             edit="true"></sns-blocks-list>
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
                                               href="#administrators">{{ trans('messages.administrators') }}
                                            </a>
                                        </h2>
                                    </div>

                                    <div id="administrators" class="panel-collapse collapse" style="height: 0px;">
                                        select2admins
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <p class="pull-right">
                        <button type="submit" class="btn btn-primary sns-btn-save">
                            {{ trans('messages.save') }}
                        </button>
                    </p>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop

@section('footer-append')

    <script src="{{ asset('js/Sortable.js') }}"></script>

    <script>

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: 'home',
                info: '0'
            },
            mounted: function () {
                bus.$emit('get_blocks');
            }
        });

        Sortable.create(document.getElementById('blockList'), {
            onUpdate: function (evt) {
                bus.$emit('update_order', evt);
            }
        });

    </script>

@stop