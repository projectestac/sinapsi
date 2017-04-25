@extends('layout')

@section('header-append')
    <title>{{ trans('messages.tag') }} {{ $tag->name }}</title>
@stop

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
                                        <div class="col-sm-12">
                                            <h1 class="title-subpage">{{ $tag->name }} </h1>
                                            <sns-search :pagetype="pagetype" :info="info"></sns-search>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="capcelera_basica col-sm-4">
                                {!! $tag->description !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>

        <div class="container">
            <div :class="{'col-xs-12':true,'col-sm-8':fulltabs==false }">
                @if (Session::has('message'))
                    <div class="alert alert-danger">{{ Session::get('message') }}</div>
                @endif
                <sns-posts-container :ft="fulltabs" v-on:toogle_ft="toogle_fulltabs"></sns-posts-container>

            </div>

            <div :class="{'col-xs-12':true,'col-sm-4': fulltabs==false }">
                <div id="center_2_2R">
                    <div class="fpca_llista_fonsDestacat  pd-15 pd-30">
                        <div class="shadowBox fons_destacat_cont generalitat">

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

@stop

@section('footer-append')

    <script src="{{ asset('js/jquery.timeago.js') }}"></script>

    <script>

        shared.page.type = 'tag';
        shared.page.info = {"id": "{{ $tag->id }}", "name": "{{ $tag->name }}"};

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: shared.page.type,
                info: shared.page.info.id,
                fulltabs: false
            },
            methods: {
                toogle_fulltabs: function () {
                    this.fulltabs = (this.fulltabs == false) ? true : false;
                },
            },
        });
    </script>
@stop