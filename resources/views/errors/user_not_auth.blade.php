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
                                    {{ trans('messages.reserved_area') }} <strong> {{ trans('messages.xtec_cat') }} </strong>
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
                                            <p></p>
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

                        </div>

                    </div>

                </div></div>
        </div>
    </article>
</section>

@endsection