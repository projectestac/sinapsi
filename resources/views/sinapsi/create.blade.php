@extends('layout')

@section('header-append')
    <title>{{ trans('messages.creating_new_sinapsi') }}</title>
@stop

@section('content')

    <div id="root" class="container">
        <div class="row">
            <div class="col-md-8">
                <br><br>
                <h2>{{ trans('messages.creating_new_sinapsi') }}</h2>

                {!! Form::open(['url'=>'/sinapsi/create','method'=>'POST','files'=>true]) !!}

                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#config-basic">{{ trans('messages.basic_data') }}</a></li>
                    <li><a data-toggle="tab" href="#config-filters">{{ trans('messages.filters_1') }}</a></li>
                    <li><a data-toggle="tab" href="#config-blocks">{{ trans('messages.sidebar_blocks') }}</a></li>
                    <li><a data-toggle="tab" href="#config-users">{{ trans('messages.users') }}</a></li>
                </ul>

                <div class="tab-content">
                    <br>
                    <div id="config-basic" class="tab-pane fade in active">

                        <div class="row">
                            <div class="media-left media-top col-md-3">
                                <img class="thumbnail avatar" src="" :alt="[ trans('messages.logo_1') ]"
                                     onclick="document.getElementById('sns_logo').click();">
                                <input type="file" id="sns_logo" name="sns_logo" style="display: none;"/>
                                <a href="#">{{ trans('messages.remove_logo') }}</a>
                            </div>

                            <div class="col-md-9">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="name">{{ trans('messages.name') }}</label>
                                    <input name="name" type="text" class="form-control" v-model="name">
                                </div>

                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="slug">{{ trans('messages.web_address') }}</label>
                                    <input name="slug" type="text" class="form-control" v-model="slug">
                                    <p>{{url('/')}}/@{{ slug }}<p>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            {!! Form::label('sinapsi', trans('messages.parent_sinapsi')) !!}
                            <sinapsis-list :options="sinapsis"></sinapsis-list>
                        </div>

                        <div class="form-group">
                            {!! Form::label('type', trans('messages.sinapsi_types') ) !!}
                            <br>
                            {!! Form::radio('type', 'auto' , true) !!} {{ trans('messages.automatic') }}
                            {!! Form::radio('type', 'manual' , false) !!} {{ trans('messages.manual') }}
                        </div>

                        <div class="form-group">
                            {!! Form::label('type', trans('messages.default_view_articles') ) !!}
                            <br>
                            {!! Form::radio('postview', 'medium-card' ,  true ) !!} <span
                                    class="glyphicon glyphicon-th-list" aria-hidden="true"></span>&nbsp; {{ trans('messages.optimal') }} &nbsp;
                            {{-- Form::radio('postview', 'full-card' ,  false )!!}  <span class="glyphicon glyphicon-resize-vertical" aria-hidden="true"></span>{{ trans('messages.complete') }} &nbsp; --}}
                            {!! Form::radio('postview', 'gallery' , false ) !!} <span
                                    class="glyphicon glyphicon-picture" aria-hidden="true"></span>&nbsp; {{ trans('messages.gallery') }} &nbsp;
                            {!! Form::radio('postview', 'list' ,  false   ) !!} <span
                                    class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>&nbsp; {{ trans('messages.list') }}
                            &nbsp;
                        </div>


                        <div class="form-group">
                            {!! Form::label('description', trans('messages.description')) !!}
                            {!! Form::textarea('description', '', ['class' => 'form-control tinymce']) !!}
                        </div>

                    </div>

                    <div id="config-filters" class="tab-pane fade in">
                        <sns-filters :qs="querystring"></sns-filters>
                    </div>

                    <div id="config-blocks" class="tab-pane fade in">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <block-builder></block-builder>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <sns-blocks-list pagetype="sinapsi" info="0"></sns-blocks-list>
                            </div>
                        </div>
                    </div>

                    <div id="config-users" class="tab-pane fade in">
                        <h3>{{ trans('messages.administrators') }}</h3>
                        <p><i>{{ trans('messages.rename_sinapsi') }}</i></p>
                        <sns-users type="managers" :selected="[]"></sns-users>

                        <h3>{{ trans('messages.publishers') }}</h3>
                        <p><i>{{ trans('messages.manage_posts') }}</i></p>
                        <sns-users type="editors" :selected="[]"></sns-users>

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

@stop

@section('footer-append')

    <script src="{{ asset('js/Sortable.js') }}"></script>

    <script>

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: 'sinapsi',
                info: 0,
                slug: "",
                name: "",
                querystring: "",
                sinapsis: {!!  json_encode($sinapsis) !!}
            }
        });

        Sortable.create(document.getElementById('blockList'), {
            onUpdate: function (evt) {
                bus.$emit('update_order', evt);
            }
        });

    </script>

@stop
