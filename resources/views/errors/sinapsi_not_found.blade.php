@extends('layout')

@section('header-append')
    <title>Sinapsi - Error</title>
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
                                    No s'ha trobat una sinapsi amb aquesta adreça
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
                                    <div class="row" style="margin:0">

                                        <div class="col-sm-8 basic_text">
                                            <div class="pd-15x">
                                                <p>Comprova que l'adreça és correcte o cerca la sinapsi a la pestanya <a href="sinapsis">Sinapsis</a></p>
                                            </div>
                                        </div>

                                        <div class="col-sm-4  center-block ">

                                            <div class="basic_color xar-socials negre">
                                                <a class="tit" href="https://docs.google.com/a/xtec.cat/forms/d/1X07wcicSX4dfz_5Z1eyt3nN2TyQYVTW2vkWDIN92R78/" title="Proposa una sinapsi"><h3>Proposa una sinapsi</h3></a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </article>
    </section>

@endsection