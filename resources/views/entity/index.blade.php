@extends('layout')

@section('header-append')
    <title>{{ $entity->name }}</title>
@endsection

@section('content')

    <div id="root" class="row">
        <div class="border-start bgGrey">
            <div id="impacteContainer">
                <div class="fpca_subcapcalera bgGrey">
                    <div class="container">
                        <div class="row">
                            <div class="capcelera_basica col-sm-8">
                                <div class="capcelera_basica_cont">
                                    <div class="row">
                                        <br>
                                        <div v-if="pagetype=='school'" class="col-sm-2">
                                            <img class="sns-entity-logo" src="{{ $entity->getLogo() }}">
                                        </div>
                                        <div :class="{'col-sm-10':pagetype=='school', 'col-sm-12': pagetype=='project'}">
                                            <h1 class="title-subpage">{{ $entity->name }} </h1>
                                            <sns-search :filters_ui="f_ui" :filters_all="f_ui"></sns-search>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="capcelera_basica col-sm-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="container">

            <div :class="{'col-xs-12':true,'col-sm-8':fulltabs==false }">
                <sns-posts-container></sns-posts-container>
            </div>

            <div :class="{'col-xs-12':true,'col-sm-4': fulltabs==false }">

                <div id="center_2_2R">

                    <div class="fpca_llista_fonsDestacat  pd-15 pd-30">
                        <div class="shadowBox fons_destacat_cont generalitat">

                            <div class="shadow hidden-xs"></div>

                            <div class="panel panel-default box">

                                <div class="panel-heading fons_blanc">
                                    <h2 class="panel-title fb_no-separador titol-pd-btm">
                                        {{ trans('messages.data') }} {{strtolower($entity->type)}}</h2>
                                </div>

                                <div class="panel-body fons_gris">
                                    <ul class="llistat_enllacos_filet_cont list-group">

                                        <li v-if="pagetype=='school'" class="list-group-item llista-col-1">Ubicat a
                                            <strong>{{ $entity->municipi }}</strong>
                                        <li v-if="pagetype=='project'" class="list-group-item llista-col-1">Centre:
                                            <strong>{{ $entity->parent_name }} </strong> ({{ $entity->parent_location }}
                                            )
                                        <li v-if="pagetype=='school'" class="list-group-item llista-col-1">
                                            {{ trans('messages.mail') }} {{ $entity->email }}
                                        <li class="list-group-item llista-col-1">Adreça web: 
                                        <a target="_blank" href="{{ $entity->web }}">{{ $entity->web }}</a>
                                        
                                        <li v-if="pagetype=='project'" class="list-group-item llista-col-1">{!! $entity->info !!}
                                    </ul>
                                </div>
                            </div>
                        </div>
                         
                         <iframe width="350px" height="380px"
                                 frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                                 src="http://www.instamaps.cat/geocatweb/visor.html?appname=Localització del centre&text={{ $entity->name }}&link={{ $entity->web }}&fons=ortoMap#15/{{ $entity->geo_y }}/{{ $entity->geo_x }}">
                         </iframe>

                    </div>
                </div>
            </div>
        </div>
    </div>
@stop

@section('footer-append')

    <script src="{{asset('js/jquery.timeago.js')}}"></script>

    <script>

        shared.page.type = "{{ $entity->getMainClass() }}";
        shared.page.info = {"id": "{{ $entity->getKeyField() }}", "name": "{{ $entity->name }}"};

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: shared.page.type,
                info: shared.page.info.id,
                fulltabs: false,
                expanded: false,
                orderby: 'n',
                f_ui: {!! json_encode($filters_from_UI) !!},
                f_all: this.f_ui
            }
        });
    </script>
@stop