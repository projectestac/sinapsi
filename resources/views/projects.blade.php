@extends('layout')

@section('header-append')
    <link rel="stylesheet" type="text/css"
          href="https://cdn.datatables.net/v/bs/jq-2.2.3/dt-1.10.12/datatables.min.css"/>
@stop

@section('content')

    <div class="border-start bgGrey">
        <div id="impacteContainer">
            <div class="fpca_subcapcalera bgGrey">
                <div class="container">
                    <div class="row">
                        <div class="capcelera_basica col-sm-8">
                            <div class="capcelera_basica_cont">
                                <div class="row">
                                    <div class="col-sm-8">
                                        <h1 class="title-subpage">Projectes</h1>
                                    </div>
                                </div>
                            </div>
                            <br>
                        </div>
                        <div class="capcelera_basica col-sm-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <br>
        <table class="table" id="tbl_projects">
            <thead>
            <th>Projecte</th>
            <th>Centre</th>
            <th>Localitat</th>
            <th>Més informació</th>
            <th>Articles</th>
            <th>Darrer</th>
            </thead>
            @foreach ( $projects as $project )
                <tr>
                    <td><a href="{{ url('p')."/".$project->id }}">{{ $project->name }}</a></td>
                    <td>{{ $project->parent_name }}</td>
                    <td>{{ $project->parent_location }}</td>
                    <td>{!!$project->codename!!}</td>
                    <td>{{ $project->num_posts }}</td>
                    <td>{{ $project->last_post }}</td>

                </tr>
            @endforeach
        </table>
    </div>

@stop


@section('footer-append')
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jq-2.2.3/dt-1.10.12/datatables.min.js"></script>

    <script type="text/javascript">

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: 'project',
            }
        });

        $(document).ready(function () {
            $('#tbl_projects').DataTable({
                "pageLength": 25,
                "dom": '<"top"if>rt<"bottom"p><"clear">',
                "language": {
                    "search": "Cercar:",
                    "zeroRecords": "No hi ha resultats",
                    "thousands": ".",
                    "info": "Mostrant _START_-_END_ de _TOTAL_",
                    "infoEmpty": "No hi ha registres",
                    "infoFiltered": "(filtrat de _MAX_ registres)",
                    "paginate": {
                        "first": "Primer",
                        "last": "Últim",
                        "next": "Següent",
                        "previous": "Anterior"
                    },
                }
            });
        });

    </script>

@stop

	
