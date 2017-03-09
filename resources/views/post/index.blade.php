@extends('layout')

@section('header-append')
    <title> {{ $post->title }}  </title>
@stop

@section('content')

    <div id="root">

        <div class="container">

            <div class="row sns-post" style="margin-top:2em">

                <div class="col-md-8">
                    <post-head :p="post"></post-head>
                    <h2>
                        <a>{{ $post->title }}</a>
                    </h2>
                    <div v-html="post.content" class="cos_bloc basic_text pd-15"></div>
                </div>

                <div class="col-md-4">
                    <post-tags :p="post"></post-tags>
                    <post-foot :p="post"></post-foot>
                </div>

            </div>

        </div>

    </div>

@stop

@section('footer-append')

    <script src="{{asset('js/jquery.timeago.js')}}"></script>

    <script>

        shared.page.type = "post";

        var bus = new Vue();
        var vm = new Vue({
            el: "#root",
            data: {
                post: {!! $post !!},
                pagetype: shared.page.type
            },
            methods: {
                toogle_fulltabs: function () {
                    this.fulltabs = (this.fulltabs == false) ? true : false;
                },
            },
        });
    </script>

@stop