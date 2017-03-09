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
                                        <h1 class="title-subpage">Centres educatius</h1>
                                        <p>Escoles, Instituts, Serveis Educatius, Serveis Territorials i CREDAs</p>
                                    </div>
                                </div>
                                <br>
                            </div>
                        </div>
                        <div class="capcelera_basica col-sm-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <br>

        <table class="table" id="tbl_schools">
            <thead>
            <th></th>
            <th>Centre educatiu</th>
            <th>Localitat</th>
            <th>Servei educatiu</th>
            <th>Servei territorial</th>
            <th>Tipus</th>
            <th>Articles</th>
            </thead>

            @foreach ( $entities as $entity )
                <tr>
                    <td><img width="50px" max-height="50px" src="{{ $entity->e1_logo }}"></a></td>
                    <td><a href="s/{{ $entity->e1_codename }}">{{ $entity->e1_name }}</a></td>
                    <td>{{ $entity->e1_location }}</td>
                    <td><a href="se/{{ $entity->e2_codeid }}">{{ $entity->e2_name }}</td>
                    <td><a href="st/{{ $entity->e3_id }}">{{ $entity->e3_name }}</td>
                    <td>{{ $entity->e1_type }}</td>
                    <td>-</td>
                </tr>
            @endforeach
        </table>

    </div>

@stop

@section('footer-append')
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jq-2.2.3/dt-1.10.12/datatables.min.js"></script>

    <script type="text/javascript">
        $(document).ready(function () {

            var vm = new Vue({
                el: "#root",
                data: {
                    pagetype: 'school',
                }
            });

            $('#tbl_schools').DataTable({
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

	
