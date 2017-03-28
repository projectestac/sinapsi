@extends('layout')

@section('header-append')
    <title>{{ trans('messages.sinapsi') }} - {{ trans('messages.error') }}</title>
@stop

@section('content')
    <div class="border-start bgGrey">
        <div id="impacteContainer">
            <div class="fpca_subcapcalera bgGrey">
                <div class="container">
                    <div class="row">
                        <div class="capcelera_basica col-sm-12">
                            <div class="capcelera_basica_cont">
                                <br>
                                <h1 class="titulo-capcalera">
                                    {{ trans('messages.internal_error_server') }}
                                </h1>
                                <br> <br> <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <section class="padding-xs padding-sm padding-md colorSectionEven">
        <article class="container fullcontainer-xs">
            <div class="row">
                <div>
                    <div id="center_1R">

                        <div class="fpca_article pd-15">

                            <div>
                                <div>
                                    <div class="row">

                                        <div class="col-sm-8 basic_text">

                                            <div class="pd-15x">
                                                <p>{{ trans('messages.resource_not_found') }}</p>
                                            </div>

                                        </div>

                                        <div class="col-sm-4  center-block ">

                                            <div class="basic_text_descarregar">

                                                <a class="tit" title="Entra a sinapsi" href="{{url('auth')}}">
                                                    {{ trans('messages.enter_to_sinapsi') }}

                                                </a>

                                                <p>{{ trans('messages.if_you_have_any_question') }}</p>


                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div class="llistat_collapse">
                                <div class="panel-group llistat_collapse_cont" id="acordio_distribuidora">

                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h2 class="panel-title">
                                                <a class="collapsed" data-toggle="collapse"
                                                   data-parent="#acordio_distribuidora" href="#bloc1">{{ trans('messages.who_is') }}</a>
                                            </h2>
                                        </div>
                                        <div id="bloc1" class="panel-collapse collapse">

                                            <div class="col-xs-12">

                                                <div class="cos_bloc basic_text_peq pd-15">

                                                    <ul>
                                                        <li>{{ trans('messages.government_users') }}</li>
                                                        <li>{{ trans('messages.government_providers') }}</li>
                                                    </ul>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h2 class="panel-title">
                                                <a class="collapsed" data-toggle="collapse"
                                                   data-parent="#acordio_distribuidora" href="#bloc2">{{ trans('messages.why_has_been') }}</a>
                                            </h2>
                                        </div>
                                        <div id="bloc2" class="panel-collapse collapse">

                                            <div class="col-xs-12">

                                                <div class="cos_bloc basic_text_peq pd-15">

                                                    <ul>
                                                        <li>{{ trans('messages.message_government_1') }}</li>
                                                        <li>{{ trans('messages.message_government_2') }}</li>
                                                        <li>{{ trans('messages.message_government_3') }}</li>
                                                        <li>{{ trans('messages.message_government_4') }}</li>
                                                        <li></li>
                                                    </ul>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h2 class="panel-title">
                                                <a class="collapsed" data-toggle="collapse"
                                                   data-parent="#acordio_distribuidora" href="#bloc3">{{ trans('messages.what_does') }}</a>
                                            </h2>
                                        </div>
                                        <div id="bloc3" class="panel-collapse collapse">

                                            <div class="col-xs-12">

                                                <div class="cos_bloc basic_text_peq pd-15">

                                                    <p>{{ trans('messages.message_government_6') }}</p>
                                                    <ul>
                                                        <li>{{ trans('messages.message_government_7') }}</li>
                                                        <li>{{ trans('messages.message_government_8') }}</li>
                                                        <li>{{ trans('messages.message_government_9') }}</li>
                                                        <li>{{ trans('messages.message_government_10') }}</li>
                                                        <li>{{ trans('messages.message_government_11') }}</li>
                                                    </ul>

                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                                <!-- end llistat_collapse_cont -->
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </article>
    </section>

@endsection