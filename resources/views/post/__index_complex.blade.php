@extends('layout')

@section('content')

    <div class="container">

        <div class="row">
            <br><br>
            
            <div class="col-xs-12 col-sm-4">

                <sns-blocks :pagetype="pagetype" :info="info"></sns-blocks>

                <div id="post-tree" class="treeview">
                    <div class="query-animation" v-if="query_animation" transition="fade">
                        <p>Obtenint article...&nbsp;&nbsp;<img src="{{ asset('img/FW_carga_overlay.gif')}}" alt="Obtenint articles relacionats..."></p>
                    </div>
                </div>

            </div>

            <div class="col-xs-12 col-sm-8">
            
                <div class="query-animation" v-if="query_post">
                    <p>Consultant...&nbsp;&nbsp;<img src="{{ asset('img/FW_carga_overlay.gif')}}" alt="Obtenint article..."></p>
                </div>

                <sns-post :post="post"></sns-post>
            
            </div>


	    </div>

    </div>

@stop

@section('footer-append')

    @include('post/partials/metahead')
    @include('partials/posts_tpl')
    @include('post/partials/metafoot')
    <script src="{{asset('js/sinapsi/posts.js')}}"></script>
    @include('partials/blocks_tpl')
    <script src="{{asset('js/sinapsi/blocks.js')}}"></script>
    <script src="{{ asset('js/jquery.timeago.js') }}" ></script>
    <script src="{{asset('js/bootstrap-treeview.min.js')}}"></script>

    <script>

    var $tree = $('#post-tree').treeview({
        data:  {!! $sns_tree !!},
        levels: 2,
        enableLinks: false,
        showBorder: false,
        showTags: false,
        nodeIcon: 'glyphicon glyphicon-triangle-right',
        selectedColor: '#BD0000',
        selectedBackColor: 'transparent',
        onNodeSelected: function(event, data) {
            vm.info = data.id;
            console.log(vm.info);
            vm.get_post(data.id);
            vm.get_blocks();
            window.history.pushState(data, data.text, data.href);
        }
    });

    </script>

     <script>

        var vm = new Vue({
            el: "body",
            data: {
                pagetype:'post',
                info: {{ $id }},
                post: {!! $post !!},
                blocks: [],
                user:false
            },
            components:{
                'sns-post': Post,
                'sns-blocks': Blocks
            },
            ready: function(){
                this.get_blocks();
            },
            methods:{
                get_post: function($id){
                    bus.$emit('get_post',$id);
                },
                get_blocks: function(){
                    bus.$emit('get_blocks');
                }
            }
        });

    </script>


@stop