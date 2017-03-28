@extends('layout')

@section('header-append')
    <title>{{ trans('messages.sinapsi') }} - {{ trans('messages.home') }}</title>
@stop

@section('content')
    <div>
        <section class="border-start bgGrey">
            <article>
                <div class="container pos_relative">
                    <div class="row">
                        <div class="capcelera_principal">
                            <div class="col-sm-12 col-md-8 hidden-xs">
                                <div id="bContainer_enllac">
                                    <div>
                                        @if (!empty($home['logo']))
                                            <img alt="sinapsi_logo" src="{{ asset($home['logo']) }}">
                                        @else
                                            <div class="row">
                                                <div class="col-xs-12 col-sm-6">
                                                    <h1 class="sns-home-title">{{ trans('messages.sinapsi') }}<span
                                                                class="sns-domain">.xtec.cat</span></h1>
                                                </div>
                                                <div class="col-xs-12 col-sm-6">
                                                    <p style="margin:0;margin-top:6px">
                                                </div>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                                <div id="bContainer_66">
                                    <sns-search :filters_ui="f_ui" :filters_all="f_ui">
                                    </sns-search>
                                </div>
                            </div>

                            <div id="bContainer_33">
                                <div class="col-sm-12 col-md-4 hidden-xs">
                                    {!! $home['description'] !!}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </article>
        </section>
        <br>

        <div class="container">
            <div class="row">

                <div :class="{'col-xs-12':true,'col-sm-8':fulltabs==false }">
                    @if (Session::has('message'))
                        <div class="alert alert-danger">{{ Session::get('message') }}</div>
                    @endif
                    <sns-posts-container :ft="fulltabs" v-on:toogle_ft="toogle_fulltabs"></sns-posts-container>
                </div>

                <div :class="{'col-xs-12':true,'col-sm-4':fulltabs==false }">

                    @foreach ($blocks as $block)
                        <sns-block :info="{{ $block }}"></sns-block>
                    @endforeach

                    @if ( Auth::check() && Gate::allows('manage-settings') )
                        <a href="{{url('settings')}}">{{ trans('messages.edit') }}</a>
                    @endif

                </div>

            </div>
        </div>
    </div>

@stop

@section('footer-append')

    <script src="{{asset('js/jquery.timeago.js')}}"></script>

    <script>

        shared.page.type = 'home';
        shared.page.info = {"id": "", "name": ""};

        var bus = new Vue();

        var vm = new Vue({
            el: "#root",
            data: {
                fulltabs: false,
                blocks: {!! $blocks !!},
                pagetype: shared.page.type,
                info: shared.page.info,
                f_ui: {!! json_encode($filters_from_UI) !!},
                f_all: this.f_ui
            },
            methods: {
                toogle_fulltabs: function () {
                    this.fulltabs = (this.fulltabs == false) ? true : false;
                },
            },

        });

    </script>

@stop