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
                                        <h1 class="title-subpage">{{ trans('messages.projects_1') }}</h1>
                                        <a href="/project/create">{{ trans('messages.new_project') }}</a>
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
            <th></th>
            <th>{{ trans('messages.project') }}</th>
            <th>{{ trans('messages.entity') }}</th>
            <th>{{ trans('messages.city') }}</th>
            <th>{{ trans('messages.description') }}</th>
            <th>{{ trans('messages.actions') }}</th>
            </thead>
        </table>
    </div>

@stop


@section('footer-append')

    <script type="text/javascript" src="{{asset('js/datatables.min.js')}}"></script>

    <script type="text/javascript">

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: 'project',
            }
        });

        $(document).ready(function () {

            if(!shared.user.logged || shared.user.data.role != 'admin'){
                notVisible = [ 5,6 ];
            }else{
                notVisible = [ 6 ];
            }

            var messages = _.get(window.trans, 'messages');
            
            $('#tbl_projects').DataTable({
                "pageLength": 25,
                "dom": '<"top"if>rt<"bottom"p><"clear">',
                "processing": true,
                "serverSide": true,
                "searchDelay": 500,
                "ajax": shared.baseUrl + "/api/v1/projects/table",
                "columns": [
                    {data: 0, name: 'image'},
                    {data: 1, name: 'name'},
                    {data: 2, name: 'municipi'},
                    {data: 3, name: 'info'},
                    {data: 4, name: 'id'},
                    {data: 5, name: 'active'},
                ],
                "columnDefs": [
                    {
                        "render": function ( data, type, row ) {
                            if( data ){
                                return '<img src="'+data+'" class="imageTable"/>';
                            }else{
                                return '<img src="/img/logo-escola.png" class="imageTable"/>';
                            }
                        },
                        "targets": 0
                    },
                    {
                        "render": function ( data, type, row ) {
                            console.log(row);
                            if( row[6] == 1 ){
                                return '<center><a href="/project/'+ data +'/edit" class="glyphicon glyphicon-pencil"></a> <a href="/project/'+ data +'/destroy" class="glyphicon glyphicon-off"></a></center>';
                            }else{
                                return '<center><a href="/project/'+ data +'/edit" class="glyphicon glyphicon-pencil"></a> <a href="/project/'+ data +'/destroy" class="glyphicon glyphicon-off" style="color:#dddddd"></a></center>';
                            }
                        },
                        "targets": 5
                    },
                    { "visible": false,  "targets": notVisible }
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
                        "last": messages['last'],
                        "next": messages['next'],
                        "previous": messages['previous']
                    },
                }
            });
        });

    </script>

@stop

	
