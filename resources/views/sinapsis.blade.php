@extends('layout')

@section('header-append')
    <link rel="stylesheet" type="text/css"
          href="https://cdn.datatables.net/v/bs/jq-2.2.3/dt-1.10.12/datatables.min.css"/>
    <link href="{{asset('css/bootstrap-treeview.min.css')}}" rel="stylesheet">
    <title>Sinapsis</title>
@stop

@section('content')

    <div id="root">

        <div class="border-start bgGrey">
            <div id="impacteContainer">
                <div class="fpca_subcapcalera bgGrey">
                    <div class="container">
                        <div class="row">
                            <div class="capcelera_basica col-sm-8">
                                <div class="capcelera_basica_cont">

                                    <h1 class="title-subpage">Sinapsis</h1>
                                    <input type="input" class="form-control" id="input-search" placeholder="Cerca..."
                                           value="" style="border-radius:0">
                                    <br>
                                    <br>
                                </div>
                            </div>
                            <div class="capcelera_basica col-sm-4">
                                {!!  $sns_tags_info['description']  !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <br>
                    <div id="center_2_1R">
                        <div class="fpca_llista_pestanyes">
                            <div class="pestanyes shadowBox-sm pd-15 pd-30">
                                <div class="pestanyes_top hidden-xs box">
                                    <div>

                                        <div class="btn-group sns-postview">

                                            <button type="button" @@click="show_tree=true">
                                            <span class="glyphicon glyphicon glyphicon-indent-left"
                                                  aria-hidden="true"></span>
                                            </button>

                                            <button type="button" @@click="show_tree=false">
                                            <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                                            </button>

                                        </div>

                                        <ul id="tabs">
                                            <li class="tab active">
                                                <a href="#t_sinapsis" id='t_sinapsis-tab' aria-controls="sinapsis"
                                                   role="tab" data-toggle="tab" aria-expanded="true">
                                                    <div class="titol-tab">
                                                        <span>Sinapsis</span>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="tab">
                                                <a href="#t_tags" id='t_tags-tab' aria-controls="tags" role="tab"
                                                   data-toggle="tab" aria-expanded="true">
                                                    <div class="titol-tab">
                                                        <span>Descriptors</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="panel-group pestanyes_bot box-sm tab-content">

                                    <div id="t_sinapsis" role="tabpanel" class="tab-pane active"
                                         aria-labelledby="sinapsis-tab">

                                        <div v-show="show_tree" id="sinapsi-tree" class="treeview">
                                        <!--<div class="query-animation" v-if="query_animation" :query_animation="query_animation">
                                                <p>Consultant...&nbsp;&nbsp;<img src="{{ asset('img/FW_carga_overlay.gif')}}" alt="Obtenint resultats..."></p>
                                            </div>-->
                                        </div>

                                        <div v-show="!show_tree" id="sinapsi-list">
                                            <table class="table" id="tbl_sinapsis">
                                                <thead>
                                                <th>Nom</th>
                                                <th>Descripció</th>
                                                <th>Tipus</th>
                                                </thead>
                                                @foreach ( $sinapsis as $sinapsi )
                                                    <tr>
                                                        <td><a href="{{ $sinapsi->slug }}"><span
                                                                        class="label sns-label-sinapsi">{{ $sinapsi->name }}</span></a>
                                                        </td>
                                                        <td>{!! strip_tags($sinapsi->description) !!}</td>
                                                        <td>{{ $sinapsi->type }}</td>
                                                    </tr>
                                                @endforeach
                                            </table>
                                        </div>
                                    </div>

                                    <div id="t_tags" role="tabpanel" class="tab-pane" aria-labelledby="tags-tab">

                                        <table class="table" id="tbl_tags">
                                            <thead>
                                            <th>Nom</th>
                                            <th>Descripció</th>
                                            <th>Etiqueta</th>
                                            <th>Articles</th>
                                            </thead>

                                            @foreach ( $tags as $tag )
                                                <tr>
                                                    <td><a href="/tag/{{ $tag->slug }}">{{ $tag->name }}</a></td>
                                                    <td>{{ $tag->description }}</td>
                                                    <td>{{ $tag->slug }}</td>
                                                    <td>{{ $tag->count_posts }}</td>
                                                </tr>
                                            @endforeach

                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">

                    <br>

                    @foreach ($blocks as $block)
                        <sns-block :info="{{ $block }}"></sns-block>
                    @endforeach

                    <br>
                    @if ( Auth::check() and Gate::allows('sinapsi-add') )
                        <p class="text-right"><a href="{{ url('sinapsi/create') }}">Afegeix sinapsi</a></p>
                        <p class="text-right"><a href="{{ url('sinapsi-tree') }}">Actualitza arbre de sinapsis</a></p>
                        <p class="text-right"><a href="{{ url('sinapsis-settings') }}">Edita</a></p>
                    @endif

                </div> {{-- row --}}

            </div>

        </div>

    </div>
    </div>

@stop


@section('footer-append')

    <script src="{{asset('js/app.js')}}"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jq-2.2.3/dt-1.10.12/datatables.min.js"></script>
    <script src="{{asset('js/bootstrap-treeview.min.js')}}"></script>


    <script type="text/javascript">

        var bus = new Vue();

        var vm_sinapsi = new Vue({
            el: "#root",
            data: {
                pagetype: 'sinapsi',
                info: "0",
                show_tree: 'true',
                blocks:{!! $blocks !!}
            }
        });

        $(document).ready(function () {

            var tagsTable = $('#tbl_tags').DataTable({
                "pageLength": 25,
                "dom": '<"top"i>rt<"bottom"p><"clear">',
                "language": {
                    "zeroRecords": "No hi ha resultats",
                    "info": "Mostrant _START_-_END_ de _TOTAL_",
                    "infoEmpty": "No hi ha registres",
                    "infoFiltered": "(filtrat de _MAX_ registres)",
                    "thousands": "",
                    "paginate": {
                        "first": "Primer",
                        "last": "Últim",
                        "next": "Següent",
                        "previous": "Anterior"
                    },
                }
            });

            var sinapsisTable = $('#tbl_sinapsis').DataTable({
                "pageLength": 25,
                "dom": '<"top"i>rt<"bottom"p><"clear">',
                "language": {
                    "zeroRecords": "No hi ha resultats",
                    "info": "Mostrant _START_-_END_ de _TOTAL_",
                    "infoEmpty": "No hi ha registres",
                    "infoFiltered": "(filtrat de _MAX_ registres)",
                    "thousands": ".",
                    "paginate": {
                        "first": "Primer",
                        "last": "Últim",
                        "next": "Següent",
                        "previous": "Anterior"
                    },
                }
            });

            var $tree = $('#sinapsi-tree').treeview({
                data:  {!! $sns_tree !!},
                enableLinks: true,
                showBorder: false,
                showTags: true,
            });

            var search = function (e) {
                var pattern = $('#input-search').val();
                var options = {
                    ignoreCase: true,
                    exactMatch: false,
                    revealResults: true
                };
                var results = $tree.treeview('search', [pattern, options]);
                tagsTable.search(pattern).draw();
                sinapsisTable.search(pattern).draw();

            }

            $('#input-search').on('keyup', search);

        });

    </script>

@endsection


	
