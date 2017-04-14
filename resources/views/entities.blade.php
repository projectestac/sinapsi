@extends('layout')

@section('header-append')
    <link href="{{asset('css/datatables.min.css')}}" rel="stylesheet">
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
                                        <h1 class="title-subpage">{{ trans('messages.schools') }}</h1>
                                        <p>{{ trans('messages.types_schools') }}</p>
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
            <th>{{ trans('messages.schools') }}</th>
            <th>{{ trans('messages.cities') }}</th>
            <th>{{ trans('messages.slug') }}</th>
            <th>{{ trans('messages.phone') }}</th>
            </thead>
        </table>

    </div>

@stop

@section('footer-append')
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jq-2.2.3/dt-1.10.12/datatables.min.js"></script>

    <script type="text/javascript">
        $(document).ready(function () {

            var messages = _.get(window.trans, 'messages');

            var vm = new Vue({
                el: "#root",
                data: {
                    pagetype: 'school',
                }
            });

            $('#tbl_schools').DataTable({
                "pageLength": 25,
                "dom": '<"top"if>rt<"bottom"p><"clear">',
                "processing": true,
                "serverSide": true,
                "searchDelay": 500,
                "ajax": shared.baseUrl + "/api/v1/schools/table",
                "columns": [
                    {data: 0, name: 'image'},
                    {data: 1, name: 'name'},
                    {data: 2, name: 'municipi'},
                    {data: 3, name: 'slug'},
                    {data: 4, name: 'phone'}
                ],
                "columnDefs": [
                    {
                        "render": function ( data, type, row ) {
                            if (row[3]) {
                                return '<a href=' + shared.baseUrl + '/s/' + row[3] + '>' + data + '</a>';
                            } else {
                                return data;
                            }
                        },
                        "targets": 1
                    },
                    { "visible": false,  "targets": [ 3 ] }
                ],
                "language": {
                    "search": messages['search'],
                    "zeroRecords": messages['no_results'],
                    "processing": messages['processing_1'],
                    "thousands": ".",
                    "info": messages['showing'] + " _START_-_END_ " + messages['by'] + " _TOTAL_",
                    "infoEmpty": messages['no_records'],
                    "infoFiltered": messages['filter_register'] + " _MAX_ " + messages['registers'],
                    "paginate": {
                        "first": messages['first'],
                        "last":  messages['last'],
                        "next": messages['next'],
                        "previous": messages['previous']
                    },
                }
            });

        });
    </script>

@stop

	
