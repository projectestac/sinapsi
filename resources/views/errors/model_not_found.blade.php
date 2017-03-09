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
                                    No s'ha trobat el model
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
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum tristique sapien, a vestibulum libero fermentum sit amet. Phasellus at dapibus urna. Vestibulum sit amet euismod quam, gravida suscipit lorem. Proin velit mauris, suscipit a purus quis, aliquet fringilla libero. Nulla auctor eros sit amet lectus elementum, sed aliquet nulla tempor. Etiam vulputate at erat sed placerat. Proin dignissim mauris ac pharetra tincidunt. Nullam egestas sapien id augue sodales consectetur. Pellentesque semper ut massa nec hendrerit. Donec augue nunc, tristique at ante vel, luctus efficitur purus. Pellentesque dignissim, ipsum sed sagittis vulputate, ante arcu volutpat lectus, quis tempus purus massa non diam. In hac habitasse platea dictumst.</p>
                                        </div>

                                    </div>

                                    <div class="col-sm-4  center-block ">

                                        <div class="basic_text_descarregar">

                                            <a class="tit" title="Entra a sinapsi" href="{{url('auth')}}">
                                                Entra a sinapsi

                                            </a>

                                            <p>Si teniu qualsevol dubte o incidència, envieu un correu electrònic a agora@xtec.cat</p>


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
                                            <a class="collapsed" data-toggle="collapse" data-parent="#acordio_distribuidora" href="#bloc1">A qui s'adreça</a>
                                        </h2>
                                    </div>
                                    <div id="bloc1" class="panel-collapse collapse">

                                        <div class="col-xs-12">

                                            <div class="cos_bloc basic_text_peq pd-15">

                                                <ul>
                                                    <li>A usuaris de la Generalitat de Catalunya: responsables dels webs a la Generalitat, redactors,&nbsp; <em>webmasters</em>, àrees de comunicació, gabinets tècnics, àrees TIC.&nbsp;</li>
                                                    <li>A proveïdors que desenvolupen webs de la Generalitat: conceptualitzadors, arquitectes de la informació, dissenyadors, experts en metodologies d’experiència d’usuari, desenvolupadors, maquetadors, i altres perfils que intervinguin en la definició i creació de la interfície d'un projecte web adreçat a la ciutadania.</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#acordio_distribuidora" href="#bloc2">Per què s'ha fet</a>
                                        </h2>
                                    </div>
                                    <div id="bloc2" class="panel-collapse collapse">

                                        <div class="col-xs-12">

                                            <div class="cos_bloc basic_text_peq pd-15">

                                                <ul>
                                                    <li>Construir correctament webs i aplicacions web de la Generalitat adreçats a la ciutadania amb l'estil gencat responsiu.</li>
                                                    <li>Focalitzar l'experiència d'usuari com a principi bàsic per a la creació de webs a la Generalitat.</li>
                                                    <li>Tenir un marc normatiu per seguir estàndards i procediments.</li>
                                                    <li>Oferir bones pràctiques en l'ús de les peces i pàgines.</li>
                                                    <li>Apoderar les persones responsables del web amb recursos i coneixements per a l'edició de continguts web.</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#acordio_distribuidora" href="#bloc3">Què conté</a>
                                        </h2>
                                    </div>
                                    <div id="bloc3" class="panel-collapse collapse">

                                        <div class="col-xs-12">

                                            <div class="cos_bloc basic_text_peq pd-15">

                                                <p>La Guia està formada per la documentació i eines següents:</p>
                                                <ul>
                                                    <li>Marc teòric i metodològic per emmarcar una iniciativa web a la Generalitat de Catalunya.</li>
                                                    <li>Plantilles PNG amb la base del disseny i les peces que formen el catàleg (disseny).</li>
                                                    <li>Inventari de models de plantilles/pàgines, components i ús que se n'ha de fer. Bones i males pràctiques (catàleg).</li>
                                                    <li>Recursos i bones pràctiques per a l’edició i gestió de continguts web (imatges i textos).</li>
                                                    <li>Suport als usuaris a través de la bústia webs@gencat.cat.</li>
                                                </ul>

                                            </div>
                                        </div>



                                    </div>
                                </div>

                            </div>
                            <!-- end llistat_collapse_cont -->
                        </div>

                    </div>

                </div></div>
        </div>
    </article>
</section>

@endsection