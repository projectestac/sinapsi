<div id="main_nav" class="contenidor unfixed">
    <header class="fons_header navbar navbar-default z-index-menu negre">

        <div id="hTContainer">

            <div class="fpca_capcalera container">

                <div class="row menuNav negre capcaleraFixed">
                    <div class="col-md-3 col-xs-2 column visible-xs coloca">
                        <button type="button" onclick="amunt();" title="Menú"
                                class="navbar-toggle pull-left collapsed"
                                data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="col-md-3 col-xs-8 col-offset-2 column visible-xs">
                        <a href="/ca/" class="mvlogo" title=" SINAPSI - Escoles i instituts compartint el que fan">
                            SINAPSI - Escoles i instituts compartint el que fan
                        </a>
                    </div>
                    <div class="col-md-3 col-xs-2 column visible-xs coloca1">
                        <button onclick="amunt();" type="button" title="Cerca" class="ico_cerca" data-toggle="collapse"
                                data-target=".dos"></button>
                    </div>
                </div>
                <div class="visible-xs pt_capcalera">&nbsp;</div>

                <div class="collapse dos">
                    search
                </div>

                <nav class="navbar-collapse navbar-ex1-collapse collapse" id="topRight">

                    <div class="row">
                        <div class="col-md-6 col-sm-4 column">
                            <a class="img-responsive logo" title="Generalitat de Catalunya"
                               href="https://web.gencat.cat/">gencat.cat</a>
                            <button class="menu_tancar visible-xs collapsed" data-target=".navbar-collapse"
                                    data-toggle="collapse" title="Tanca"></button>
                        </div>
                    </div>

                    <ul class="nav navbar-nav">

                        <li :class="{'active':pagetype=='home'}">
                            <a target="_self" href="{{ url('/')}}" title="Menú&nbsp;Inici">
                                Inici</a>
                        </li>

                        <li :class="{'active':pagetype=='sinapsi'}">
                            <a target="_self" href="{{ url('sinapsis')}}" title="Menú&nbsp;Sinapsis">
                                Sinapsis
                                <div class="caret"></div>
                            </a>
                        </li>

                        <li :class="{'active':pagetype=='school'}">
                            <a target="_self" href="{{ url('centres')}}" title="Menú&nbsp;Centres">
                                Centres
                                <div class="caret"></div>
                            </a>
                        </li>

                        <li :class="{'active':pagetype=='project'}">
                            <a target="_self" href="{{ url('projectes')}}" title="Menú&nbsp;Projectes">
                                Projectes
                                <div class="caret"></div>
                            </a>
                        </li>

                        <li :class="{'active':pagetype=='user'}">
                            <a target="_self" href="{{ url('docents')}}" title="Menú&nbsp;Docents">
                                Docents
                                <div class="caret"></div>
                            </a>
                        </li>

                        @if (!Auth::guest() and Gate::allows('post-create'))
                            <li class="">
                                <a target="_self" href="{{ url('post/create')}}" title="Afegeix contingut">
                                    +
                                    <div class="caret"></div>
                                </a>
                            </li>
                        @endif
                    </ul>

                    @if (Auth::guest())
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="#" onclick="popupwindow('{{ url('/auth') }}','Validant...',600,500)">
                                    Entra
                                </a>
                            </li>
                        </ul>
                    @else
                        @include('user/navbar_account')
                    @endif

                </nav>

            </div>

        </div>

    </header>
</div>

