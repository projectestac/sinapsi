@extends('layout')

@section('header')
    <link href="{{asset('css/datatables.min.css')}}" rel="stylesheet">
@endsection

@section('content')

    @if ( Auth::check() )
        <div class="border-start bgGrey">
            <div id="impacteContainer">
                <div class="fpca_subcapcalera bgGrey">
                    <div class="container">
                        <div class="row">
                            <div class="capcelera_basica col-sm-8">
                                <div class="capcelera_basica_cont">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <h1 class="title-subpage">{{ trans('messages.teachers') }} </h1>
                                            <br>
                                        </div>
                                    </div>
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
            <table class="table" id="tbl_users">
                <thead>
                    <th></th>
                    <th>{{ trans('messages.name') }}</th>
                    <th>{{ trans('messages.work_placement') }}</th>
                    <th>{{ trans('messages.city') }}</th>
                    <th>{{ trans('messages.role') }}</th>
                </thead>
                @foreach ( $users as $user )
                    <tr>
                        <td><img class="avatar" src="{{ $user->avatar }}"></td>
                        <td><a href="{{ url('user') }}/{{ $user->id }}">{{ $user->name }}</a></td>
                        <td><a href="s/{{ $user->school_codename }}">{{ $user->school_name }}</a></td>
                        <td>{{ $user->school_location }}</td>
                        <td>{{ $user->role }}</td>
                    </tr>
                @endforeach
            </table>

        </div>

    @else
        @include('errors/user_not_auth')
    @endif

@endsection

@section('footer-append')

    <script type="text/javascript" src="{{asset('js/datatables.min.js')}}"></script>
    <script type="text/javascript">

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: 'user',
            }
        });

        $(document).ready(function () {

            var messages = _.get(window.trans, 'messages');

            if(!shared.user.logged || shared.user.data.role != 'admin' ){
                notVisible = [ 4 ];
            }

            $('#tbl_users').DataTable({
                "pageLength": 25,
                "dom": '<"top"if>rt<"bottom"p><"clear">',
                "columnDefs": [
                    {
                        "targets": notVisible,
                        "visible": false
                    },
                ],
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

@endsection