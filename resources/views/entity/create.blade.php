@extends('layout')

@section('header-append')
    <title>{{ trans('messages.creating_new_entity') }}</title>
@stop

@section('content')

    <div id="root" class="container">
        <div class="row">
            <div class="col-md-8">
                <br><br>
                <h2>{{ trans('messages.creating_new_entity') }}</h2>

                {!! Form::open(['url'=>'/entity/create','method'=>'POST','files'=>true]) !!}

                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#config-basic">{{ trans('messages.basic_data') }}</a></li>
                    <li><a data-toggle="tab" href="#config-more-data">{{ trans('messages.more_data') }}</a></li>
                    <li><a data-toggle="tab" href="#config-blocks">{{ trans('messages.blocks') }}</a></li>
                    <li><a data-toggle="tab" href="#config-users">{{ trans('messages.users') }}</a></li>
                </ul>

                <div class="tab-content">
                    <br>
                    <div id="config-basic" class="tab-pane fade in active">
                        <div class="row">
                            <div class="media-left media-top col-md-2">
                                <img id="sinapsi_img" class="thumbnail avatar" src="" :alt="[ trans('messages.logo_1') ]"
                                     onclick="document.getElementById('sns_logo').click();">
                                <input type="file" id="sns_logo" name="sns_logo" style="display: none;"/>
                                <a id="sinapsi_img_rmv" href="#" style="display:none">{{ trans('messages.remove_logo') }}</a>
                            </div>
                            <div class="col-md-7">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="name">{{ trans('messages.name') }}</label>
                                    <input name="name" type="text" class="form-control" maxlength="250" required>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="codeir">{{ trans('messages.codeid') }}</label>
                                    <input name="codeid" type="text" class="form-control" maxlength="8">
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="entity_type">{{ trans('messages.entity_type') }}</label>
                                    <select class="form-control" name="entity_type">
                                        <option value=""></option>
                                        <option value="LLI">{{ trans('messages.nursery') }}</option>
                                        <option value="PRI">{{ trans('messages.primary') }}</option>
                                        <option value="SEC">{{ trans('messages.secondary') }}</option>
                                        <option value="IE">{{ trans('messages.institute_school') }}</option>
                                        <option value="Adults">{{ trans('messages.adults') }}</option>
                                        <option value="ZER">{{ trans('messages.zer') }}</option>
                                        <option value="EOI">{{ trans('messages.eoi') }}</option>
                                        <option value="MUSDANCE">{{ trans('messages.dance_and_music') }}</option>
                                        <option value="EE">{{ trans('messages.special_education') }}</option>
                                        <option value="ESTR">{{ trans('messages.foreign') }}</option>
                                        <option value="CdA">{{ trans('messages.cda') }}</option>
                                        <option value="SEZ">{{ trans('messages.sez') }}</option>
                                        <option value="CLIC">{{ trans('messages.click') }}</option>
                                        <option value="CREDA">{{ trans('messages.creda') }}</option>
                                        <option value="ST">{{ trans('messages.st') }}</option>
                                        <option value="Projecte">{{ trans('messages.project') }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="nivells">{{ trans('messages.levels') }}</label>
                                    <input name="nivells" type="text" class="form-control" maxlength="60">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="activation">{{ trans('messages.activation') }}</label>
                                    <select class="form-control" name="activation">
                                        <option value="0">{{ trans('messages.disabled') }}</option>
                                        <option value="1" selected>{{ trans('messages.enabled') }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="slug">{{ trans('messages.slug') }}</label>
                                    <input name="slug" type="text" class="form-control" maxlength="50">
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="email">{{ trans('messages.email') }}</label>
                                    <input name="email" type="email" class="form-control" maxlength="50">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 col-md-offset-2">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="web_address">{{ trans('messages.web_address') }}</label>
                                    <input name="web_address" type="text" class="form-control" maxlength="50">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 col-md-offset-2">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="address">{{ trans('messages.address') }}</label>
                                    <input name="address" type="text" class="form-control" maxlength="500">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 col-md-offset-4">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="cp">{{ trans('messages.postal_code') }}</label>
                                    <input name="cp" type="text" class="form-control" maxlength="5">
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="city">{{ trans('messages.city') }}</label>
                                    <select class="form-control" name="city">
                                        <option value=""></option>
                                        @foreach ($cities as $city)
                                        <option value="{{$city->ID}}">{{ $city->text }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8 col-md-offset-4">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="delegacio">{{ trans('messages.delegation') }}</label>
                                    <select class="form-control" name="delegacio">
                                        <option value=""></option>
                                        @foreach ($delegations as $delegation)
                                        <option value="{{$delegation->delegacio}}">{{ $delegation->delegacio }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8 col-md-offset-4">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="comarca">{{ trans('messages.county') }}</label>
                                    <select class="form-control" name="comarca">
                                        <option value=""></option>
                                        @foreach ($counties as $county)
                                        <option value="{{$county->comarca}}">{{ $county->comarca }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5 col-md-offset-2">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="phone">{{ trans('messages.phone') }}</label>
                                    <input name="phone" type="text" class="form-control" maxlength="50">
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="fax">{{ trans('messages.fax') }}</label>
                                    <input name="fax" type="text" class="form-control" maxlength="50">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="config-more-data" class="tab-pane fade in">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="naturalesa">{{ trans('messages.naturalesa') }}</label>
                                    <select class="form-control" name="naturalesa">
                                        <option value=""></option>
                                        @foreach ($centerTypes as $centerType)
                                        <option value="{{$centerType->naturalesa}}">{{ $centerType->naturalesa }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="titularitat">{{ trans('messages.titularity') }}</label>
                                    <select class="form-control" name="titularitat">
                                        <option value=""></option>
                                        @foreach ($titularities as $titularity)
                                        <option value="{{$titularity->titularitat}}">{{ $titularity->titularitat }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="agora_services">{{ trans('messages.agora_services') }}</label>
                                    <input name="agora_services" type="text" class="form-control" maxlength="100">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="agora_managers">{{ trans('messages.agora_managers') }}</label>
                                    <input name="agora_managers" type="text" class="form-control" maxlength="250">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="parentid">{{ trans('messages.entity_parent') }}</label>
                                    <select class="form-control" name="parentid">
                                        <option value=""></option>
                                        @foreach ($entitiesParent as $entityParent)
                                        <option value="{{$entityParent->ID}}">{{ $entityParent->text }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="info">{{ trans('messages.more_information') }}</label>
                                    <textarea name="info" type="text" class="form-control" rows="4" cols="50"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h3>{{ trans('messages.socials_networks') }}</h3>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="twitter">{{ trans('messages.twitter') }}</label>
                                    <input name="twitter" type="text" class="form-control" maxlength="30">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="facebook">{{ trans('messages.facebook') }}</label>
                                    <input name="facebook" type="text" class="form-control" maxlength="30">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="instagram">{{ trans('messages.instagram') }}</label>
                                    <input name="instagram" type="text" class="form-control" maxlength="30">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h3>{{ trans('messages.localization') }}</h3>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="geo_x">{{ trans('messages.geo_x') }}</label>
                                    <input name="geo_x" type="text" class="form-control" maxlength="20">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="geo_y">{{ trans('messages.geo_y') }}</label>
                                    <input name="geo_y" type="text" class="form-control" maxlength="20">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h3>{{ trans('messages.channels') }}</h3>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="col-xs-12 pad_left_0" for="rss_channels">{{ trans('messages.channels') }}</label>
                                    <textarea name="rss_channels" type="text" class="form-control" rows="4" cols="50"></textarea>
                                </div>
                            </div>
                        </div>
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
                        {{ trans('messages.select_admins') }}


                        <h3>{{ trans('messages.publishers') }}</h3>
                        <p><i>{{ trans('messages.manage_posts') }}</i></p>
                        {{ trans('messages.select_publishers') }}

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

        var bus = new Vue();

        var vm = new Vue({
            el: "#root",
            data: {
                pagetype: 'entity',
                info: 0,
                querystring: "",
                entities: {!!  json_encode($entities) !!}
            }
        });

        Sortable.create(document.getElementById('blockList'), {
            onUpdate: function (evt) {
                bus.$emit('update_order', evt);
            }
        });

        $( document ).ready( function() {

            var input = document.querySelector("input[id=sns_logo]"),
            img = document.querySelector("img[id=sinapsi_img]");

            input.addEventListener("change", function(){
                var file = this.files[0],
                    reader = new FileReader();

                reader.addEventListener("load", function(e){
                    if (img.style.opacity == 0){
                        img.src = e.target.result;
                        img.style.opacity = 1;
                        $('#sinapsi_img_rmv').css('display','block');
                    }
                    else{
                        img.style.opacity = 0;
                        setTimeout(function(){
                            img.src = e.target.result;
                            img.style.opacity = 1;
                            $('#sinapsi_img_rmv').css('display','block');
                        }, 2250);
                    }
                }, false);

                reader.readAsDataURL(file);
            }, false);

            $('#sinapsi_img_rmv').on('click',function(e){
                img.src = "";
                input.value = "";
                console.log(input.value);
                $('#sinapsi_img_rmv').css('display','none');
            })

        });

    </script>

@stop
