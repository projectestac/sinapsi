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
            <th>{{ trans('messages.project') }}</th>
            <th>{{ trans('messages.center') }}</th>
            <th>{{ trans('messages.city') }}</th>
            <th>{{ trans('messages.more_information') }}</th>
            <th>{{ trans('messages.posts') }}</th>
            <th>{{ trans('messages.latest') }}</th>
            </thead>
            @foreach ( $projects as $project )
                <tr>
                    <td><a href="{{ url('p')."/".$project->slug }}">{{ $project->name }}</a></td>
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

    <script type="text/javascript" src="{{asset('js/datatables.min.js')}}"></script>

    <script type="text/javascript">

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: 'project',
            }
        });

        $(document).ready(function () {

            var messages = _.get(window.trans, 'messages');
            
            $('#tbl_projects').DataTable({
                "pageLength": 25,
                "dom": '<"top"if>rt<"bottom"p><"clear">',
                "language": {
                    "search": messages['search'],
                    "zeroRecords": messages['no_results'],
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

	
