@extends('layout')

@section('header-append')
    <title>{{ $sinapsi->name }}</title>
@endsection

@section('content')

    <div>
        <div class="border-start bgGrey">
            <div id="impacteContainer">
                <div class="fpca_subcapcalera bgGrey">
                    <div class="container">
                        <div class="row">
                            <div class="capcelera_basica col-sm-8">
                                <div class="capcelera_basica_cont">
                                    <div class="row" style="position:relative">
                                        @if ($sinapsi->logo)
                                            <div class="col-sm-2">
                                                <a href="{{ url($sinapsi->slug) }}">
                                                    <img class="sns-sinapsi-logo" src="{{ $sinapsi->logo }}">
                                                </a>
                                            </div>
                                            <div class="col-sm-10">
                                                @include('sinapsi/breadcrumbs')
                                                <a class="sns-sinapsi-title" href="{{ url($sinapsi->slug) }}">
                                                    <h1>{{ $sinapsi->name }}
                                                        @if (!empty($sinapsi['tag']))
                                                            <span class="sns-sinapsi-title-tag">{{$sinapsi['tag']->name}}</span>
                                                        @endif
                                                    </h1>
                                                </a>

                                                <sns-search :filters_ui="f_ui" :filters_db="f_db">
                                                </sns-search>

                                            </div>
                                        @else
                                            <div class="col-sm-12">
                                                @include('sinapsi/breadcrumbs')
                                                <a class="sns-sinapsi-title" href="{{ url($sinapsi->slug) }}">
                                                    <h1>{{ $sinapsi->name }}
                                                        @if (!empty($sinapsi['tag']) )
                                                            <span class="sns-sinapsi-title-tag">{{$sinapsi['tag']->name}}</span>
                                                        @endif
                                                    </h1>
                                                </a>

                                                <sns-search :filters_ui="f_ui" :filters_db="f_db"></sns-search>

                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <div class="capcelera_basica col-sm-4">
                                <div class="sns-description">

                                    @if ( !empty($sinapsi['tag']) and !empty($sinapsi['tag']->description))
                                        {!! $sinapsi['tag']->description !!}
                                    @else
                                        {!! $sinapsi->description !!}
                                    @endif

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br>

        <div class="container">
            <div class="row">
                <div :class="{'col-xs-12':true,'col-sm-8': fulltabs==false }">
                    @if (Session::has('message'))
                        <div class="alert alert-danger">{{ Session::get('message') }}</div>
                    @endif
                    <sns-posts-container :ft="fulltabs" v-on:toogle_ft="toogle_fulltabs"></sns-posts-container>
                </div>
                <div :class="{'col-xs-12':true,'col-sm-4': fulltabs==false }">

                    <div id="center_2_2R">

                        <sns-blocks-sinapsis></sns-blocks-sinapsis>

                        @foreach ($blocks as $block)
                            <sns-block :info="{{ $block }}"></sns-block>
                        @endforeach

                        @can('sinapsi-manage',$sinapsi->id)
                            <a href="{{url($sinapsi->slug).'/edit'}}">{{ trans('messages.edit') }}</a>
                        @endcan
                    </div>

                </div>
            </div>
        </div>

    </div> {{-- Not delete --}}
@endsection


@section('footer-append')

    <script src="{{asset('js/jquery.timeago.js')}}"></script>

    <script>

        shared.page.type = 'sinapsi';
        shared.page.info = {"id": "{{ $sinapsi->id }}", "name": "{{ $sinapsi->name }}"};

        var bus = new Vue();


        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: shared.page.type,
                info: shared.page.info.id,
                fulltabs: false,
                blocks: "{{ $blocks }}",
                f_ui: {!! json_encode($filters_from_UI) !!},
                f_db: {!! json_encode($filters_from_DB) !!}
            },

            methods: {
                toogle_fulltabs: function () {
                    this.fulltabs = (this.fulltabs == false) ? true : false;
                },
            },
        });

    </script>

@stop
