@extends('layout')

@section('header-append')
    <title>{{ trans('messages.edit_sinapsis_and_descriptors') }}</title>
@stop

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-md-8">

                <br><br>
                <h2>{{ trans('messages.sinapsi_and_descriptors') }}</h2>

                {!! Form::open(['edit','method'=>'POST','files'=>true]) !!}

                @include('partials.errors')

                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#config-basic">{{ trans('messages.general_settings') }}</a></li>
                    <li><a data-toggle="tab" href="#config-tags">{{ trans('messages.descriptors') }}</a></li>
                    <li><a data-toggle="tab" href="#config-users">{{ trans('messages.users') }}</a></li>
                </ul>

                <div class="tab-content">
                    <br>
                    <div id="config-basic" class="tab-pane fade in active">

                        <div class="llistat_collapse">
                            <div class="panel-group llistat_collapse_cont">

                                <div class="panel panel-default">

                                    {{-- DESCRIPTION --}}
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora" href="#description">{{ trans('messages.description') }}</a>
                                        </h2>
                                    </div>

                                    <div id="description" class="panel-collapse collapse" style="height: 0px;">
                                        {!! Form::textarea('description', $description, ['class' => 'form-control tinymce']) !!}
                                    </div>

                                    {{-- BLOCS --}}
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora" href="#blocs">{{ trans('messages.blocks') }}</a>
                                        </h2>
                                    </div>
                                    <div class="row">

                                        <div class="col-xs-12 col-sm-6">
                                            <block-builder></block-builder>
                                        </div>

                                        <div class="col-xs-12 col-sm-6">
                                            <p>
                                                <i>{{ trans('messages.preview_blocks') }}</i>
                                            </p>
                                            <sns-blocks :pagetype="pagetype" :info="info"></sns-blocks>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="config-tags" class="tab-pane fade in">

                        <div class="llistat_collapse">
                            <div class="panel-group llistat_collapse_cont">

                                <div class="panel panel-default">

                                    {{-- TAGS --}}

                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora"
                                               href="#addAlias">{{ trans('messages.add_alias') }}</a>
                                        </h2>
                                        <div id="addAlias" class="panel-collapse collapse" style="height: 0px;">
                                            <br>
                                            <div class="form-group">
                                                <label for="slug">{{ trans('messages.descriptor_to_replace') }}</label>
                                                <input type="text" class="form-control" v-model="slug"
                                                       :placeholder="[ trans('messages.it_can_be_a_regular_expression') ]">
                                            </div>
                                            <div class="form-group">
                                                <label for="slug_alias">{{ trans('messages.alias_descriptor') }}</label>
                                                <input type="text" class="form-control" v-model="slug_alias">
                                            </div>
                                            <div class="form-group">
                                                <label for="name_alias">{{ trans('messages.alias_name') }}</label>
                                                <input type="text" class="form-control" v-model="name_alias">
                                            </div>

                                            <button type="submit" class="btn btn-primary" @@click.prevent="addAlias()">
                                                Afegir
                                            </button>
                                            <br><br>
                                            <div v-if="message" class="alert alert-@{{message.type}}"
                                                 role="alert">@{{message.text}}</div>

                                        </div>
                                    </div>

                                    <div class="panel-heading">

                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora"
                                               href="#alias">{{ trans('messages.alias_list') }}</a>
                                        </h2>

                                        <div id="alias" class="panel-collapse collapse" style="height: 0px;">

                                            <br><br>
                                            <table class="table" id="tbl_alias">
                                                <thead>
                                                <th>{{ trans('messages.descriptor') }}</th>
                                                <th>{{ trans('messages.alias_descriptor') }}</th>
                                                <th>{{ trans('messages.alias_name') }}</th>
                                                <th></th>
                                                </thead>

                                                @foreach ( $aliases as $alias )
                                                    <tr>
                                                        <td>{{ $alias['slug'] }}</td>
                                                        <td>{{ $alias['slug_alias'] }}</td>
                                                        <td>{{ $alias['name_alias'] }}</td>
                                                        <td><a href="#"
                                                               @@click.prevent="destroyAlias({{ $alias['id'] }})">{{ trans('messages.remove') }}</a>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            </table>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div id="config-users" class="tab-pane fade in">

                        <div class="llistat_collapse">
                            <div class="panel-group llistat_collapse_cont">

                                <div class="panel panel-default">

                                    {{-- ADMINISTRATORS --}}
                                    <div class="panel-heading">
                                        <h2 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse"
                                               data-parent="#acordio_distribuidora"
                                               href="#administrators">{{ trans('messages.administrator') }}</a>
                                        </h2>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <p class="pull-right">
                        <button type="submit" class="btn btn-primary sns-btn-save">
                            {{ trans('messages.save') }}
                        </button>
                    </p>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop

@section('footer-append')

    <script src="{{ asset('js/Sortable.js') }}"></script>

    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jq-2.2.3/dt-1.10.12/datatables.min.js"></script>

    <script>

        var messages = _.get(window.trans, 'messages');

        var mixin = {};
       
        var vm = new Vue({
            el: "body",
            data: {
                pagetype: 'sns-tags',
                info: '0',
                aliases: '',
                slug: '',
                slug_alias: '',
                name_alias: '',
                message: ''
            },
            ready: function () {
                bus.$emit('get_blocks');
                this.getAlias();
            },
            components: {
                'sns-blocks': Blocks,
                'block-builder': BlockBuilder
            },
            methods: {
                getAlias: function () {
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: location.protocol + "//" + location.host + '/get-alias',
                        method: 'POST',
                        dataType: 'json',
                        success: function (data) {
                            this.aliases = data;
                        }.bind(this),
                        error: function (jqXHR, textStatus, message) {
                            //this.errors.push(message);
                        }.bind(this)
                    });
                },
                addAlias: function () {
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: location.protocol + "//" + location.host + '/add-alias',
                        method: 'POST',
                        dataType: 'json',
                        data: {
                            slug: this.slug,
                            slug_alias: this.slug_alias,
                            name_alias: this.name_alias
                        },
                        success: function (data) {
                            this.message = {'type': 'success', 'text': messages['added_new_alias']};
                            //Add into datatable
                            $('#tbl_alias').dataTable().fnAddData([
                                this.slug, this.slug_alias, this.name_alias, messages['refresh_to_delete']
                            ]);
                            this.slug = "";
                            this.slug_alias = "";
                            this.name_alias = "";
                        }.bind(this),

                        error: function (jqXHR, textStatus, message) {
                            this.message = {'type': 'danger', 'text': messages['an_error_ocurred'] + ' ' + message};
                        }.bind(this)
                    });
                },
                destroyAlias: function (id) {
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        url: 'http://' + window.location.hostname + '/destroy-alias',
                        method: 'POST',
                        dataType: 'json',
                        data: {
                            id: id
                        },
                        success: function (data) {
                            alert("Esborrat correctament!");
                            // TODO: delete from datatable
                            //$('#tbl_alias').dataTable().fnDeleteRow();
                        }.bind(this),

                        error: function (jqXHR, textStatus, message) {
                            this.message = {'type': 'danger', 'text': messages['an_error_ocurred'] + ' ' + message};
                        }.bind(this)
                    });
                }
            }

        });

        Sortable.create(document.getElementById('blockList'), {
            onUpdate: function (evt) {
                bus.$emit('update_order', evt);
            }
        });

        $(document).ready(function () {

            var tbl_alias = $('#tbl_alias').DataTable({
                "pageLength": 25,
                "dom": '<"top"f>rt<"bottom"ip><"clear">',
                "language": {
                    "search": messages['search'],
                    "zeroRecords": messages['no_results'],
                    "thousands": ".",
                    "info": messages['showing'] + " _START_-_END_ " + messages['by'] + " _TOTAL_",
                    "infoEmpty": messages['no_records'],
                    "infoFiltered": "(filtrat de _MAX_ registres)",
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