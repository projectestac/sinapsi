@extends('layout')

@section('content')


    <div id="root" class="container">

        <br>
        @{{ completed }} de @{{ total }}
        <div class="progress">
            <div class="progress-bar progress-bar-danger" role="progressbar"
                 :aria-valuenow="completed"
                 :aria-valuemin="start"
                 :aria-valuemax="end" :style="'width:'+ percentil + '%'">
                <span class="sr-only">{{ trans('messages.name_of_center') }}</span>
            </div>
        </div>
        <div class="well">
            <h3>{{ trans('messages.to_address_items') }}</h3>
            <textarea class="form-control" type="text" v-model.sync="urls"></textarea>
            <br>
            <input type="button" class="btn btn-primary" value="Obté articles" @@click="get_posts(urls)">
        </div>

        <div class="well">
            <h3>{{ trans('messages.for_range_of_channels') }}</h3>

            <form class="form-inline">
                <div class="form-group">
                    <label for="inici">{{ trans('messages.start') }}</label>
                    <input class="form-control" type="text" v-model.sync="start">
                </div>
                <div class="form-group">
                    <label for="final">{{ trans('messages.end') }}</label>
                    <input class="form-control" type="text" v-model.sync="end">
                </div>
            </form>
            <br>
            <input type="button" class="btn btn-primary" value="Obté articles" @@click="get_posts_by_channels(start,end)">
        </div>

        <h3>{{ trans('messages.extraction_results') }}</h3>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th>{{ trans('messages.center') }}</th>
                <th>{{ trans('messages.post') }}</th>
            </tr>
            </thead>

            <tr v-for="log in logs" :class="{'new_post':log.post['new'],'separator':log.entity['nom']==''}">
                <td><a :href="log.entity['url']">@{{log.entity['nom']}}</a></td>
                <td><a :href="log.post['link']">@{{log.post['title']}}</a></td>
            </tr>

        </table>
        </div>

    </div>

@stop


@section('footer-append')

    <script>

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype:"admin",
                urls:"",
                logs: [],
                start: {{ $start }},
                end: {{ $end }},
                completed: 0,
                percentil: 0
            },
            computed: {
                total: function () {
                    return this.end - this.start + 1;
                }
            },
            methods: {
                get_posts_by_channels: function (start, end) {
                    vm.logs = [];
                    vm.percentil = 0;
                    vm.completed = 0;
                    for (var num = start; num <= end; num++) {
                        $.ajax({
                            type: 'get',
                            url: shared.baseUrl + "/getrss/" + num,
                            datatype: 'jsonp',
                            success: function (response) {
                                $.each(response, function (index, value) {
                                    vm.logs.push(value);
                                });
                                vm.completed = vm.completed + 1;
                                vm.percentil = (vm.completed / (vm.end - vm.start)) * 100;
                            }
                        });
                    }
                    vm.percentil = 0;
                },

                get_post: function (url) {
                    vm.logs = [];

                    $.ajax({
                        type: 'get',
                        url: shared.baseUrl + "/getrss/post?url=" + url,
                        datatype: 'jsonp',
                        success: function (response) {
                            $.each(response, function (index, value) {
                                vm.logs.push(value);
                            });
                        }
                    });

                },

                get_posts: function (urls) {
                    vm.logs = [];

                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        type: 'POST',
                        url: shared.baseUrl + "/getrss/list",
                        datatype: 'jsonp',
                        data: {
                            list: urls
                        },
                        success: function (response) {
                            $.each(response, function (index, value) {
                                vm.logs.push(value);
                            });
                        }
                    });

                },
            }
        });

    </script>


@stop