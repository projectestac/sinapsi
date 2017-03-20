<div id="main_nav" class="contenidor unfixed">
    <header class="fons_header navbar navbar-default z-index-menu negre">

        <div id="hTContainer">

            <div class="fpca_capcalera container">

                <div class="row menuNav negre capcaleraFixed">
                    <div class="col-md-3 col-xs-2 column visible-xs coloca">
                        <button type="button" onclick="amunt();" title="Menú"
                                class="navbar-toggle pull-left collapsed"
                                data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">{{ trans('messages.toggle_navigation') }}</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="col-md-3 col-xs-8 col-offset-2 column visible-xs">
                        <a href="/ca/" class="mvlogo" :title="[ trans('messages.sinapsi_1') ] - [ trans('messages.schools_and_colleges_in_catalonia') ] [ trans('messages.sharing_what_they_do') ]">
                            {{ trans('messages.sinapsi_1') }} - {{ trans('messages.schools_and_colleges_in_catalonia') }} {{ trans('messages.sharing_what_they_do') }}
                        </a>
                    </div>
                    <div class="col-md-3 col-xs-2 column visible-xs coloca1">
                        <button onclick="amunt();" type="button" :title="[ trans('messages.search') ]" class="ico_cerca" data-toggle="collapse"
                                data-target=".dos"></button>
                    </div>
                </div>
                <div class="visible-xs pt_capcalera">&nbsp;</div>

                <div class="collapse dos">
                    {{ trans('messages.search') }}
                </div>

                <nav class="navbar-collapse navbar-ex1-collapse collapse" id="topRight">

                    <div class="row">
                        <div class="col-md-6 col-sm-4 column">
                            <a class="img-responsive logo" :title="[ trans('messages.government_catalonia') ]"
                               href="https://web.gencat.cat/">{{ trans('messages.gencat_cat') }}</a>
                            <button class="menu_tancar visible-xs collapsed" data-target=".navbar-collapse"
                                    data-toggle="collapse" :title="[ trans('messages.close') ]"></button>
                        </div>
                    </div>

                    <ul class="nav navbar-nav">

                        <li :class="{'active':pagetype=='home'}">
                            <a target="_self" href="{{ url('/')}}" :title="[ trans('messages.menu_home') ]">
                                {{ trans('messages.home_1') }}</a>
                        </li>

                        <li :class="{'active':pagetype=='sinapsi'}">
                            <a target="_self" href="{{ url('sinapsis')}}" :title="[ trans('messages.menu_sinapsi') ]">
                                {{ trans('messages.sinapsi_2') }}
                                <div class="caret"></div>
                            </a>
                        </li>

                        <li :class="{'active':pagetype=='school'}">
                            <a target="_self" href="{{ url('centres')}}" :title="[ trans('messages.menu_center') ]">
                                {{ trans('messages.centers') }}
                                <div class="caret"></div>
                            </a>
                        </li>

                        <li :class="{'active':pagetype=='project'}">
                            <a target="_self" href="{{ url('projectes')}}" :title="[ trans('messages.menu_projects') ]">
                                {{ trans('messages.projects_1') }}
                                <div class="caret"></div>
                            </a>
                        </li>

                        <li :class="{'active':pagetype=='user'}">
                            <a target="_self" href="{{ url('docents')}}" :title="[ trans('messages.menu_teachers') ]">
                                {{ trans('messages.teachers') }}
                                <div class="caret"></div>
                            </a>
                        </li>

                        @if (!Auth::guest() and Gate::allows('post-create'))
                            <li class="">
                                <a target="_self" href="{{ url('post/create')}}" :title="[ trans('messages.add_content') ]">
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
                                    {{ trans('messages.log_in') }}
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

