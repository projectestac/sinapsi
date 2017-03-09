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
                <span class="sr-only">Nom del centre fetched</span>
            </div>
        </div>


        <div id="content">

            {{--
            Post: <input class="form-control" type="text" v-model.sync="url">
            <input type="button" class="btn btn-primary" value="Get RSS" @@click="get_post(url)">
            <br>

            Posts: <textarea class="form-control" type="text" v-model.sync="urls"></textarea>
            <input type="button" class="btn btn-primary" value="Get RSS" @@click="get_posts(urls)">
            <br>
            --}}


            Inici: <input class="form-control" type="text" v-model.sync="start">
            Final: <input class="form-control" type="text" v-model.sync="end">

            <input type="button" class="btn btn-primary" value="Get RSS" @@click="get_rss(start,end)">

            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Centre</th>
                    <th>Article</th>
                </tr>
                </thead>

                <tr v-for="log in logs">
                    <td :style="'background-color:'+log.post['bgcolor']"><a
                                :href="log.entity['url']">@{{log.entity['nom']}}</a></td>
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
                logs: [],
                start: 1,
                end: 10,
                completed: 0,
                percentil: 0
            },
            computed: {
                total: function () {
                    return this.end - this.start + 1;
                }
            },
            methods: {
                get_rss: function (start, end) {
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