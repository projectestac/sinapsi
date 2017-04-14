<div class='scrolltop'>
    <div class='scroll'></div>
</div>

<div class="fons_footer">
    <footer class="container center-block shadowBox2">
        <div class="shadow2"></div>
        <div class="row footer_tab_ord">
            <div id="fAvisLegal">
                <div>
                    <div class="footer_tab_top">
                        <div class="col-sm-4 col-md-3">
                            <div>
                                <div class="fpca_peu_faldoLlista">
                                    <div class="hidden-xs">
                                        <ul class="list-group llistat_peu col-md-12">
                                            <li class="list-group-item"><p class="title_list">{{ trans('messages.portals') }}</p></li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.educational_department') ]" href="http://ensenyament.gencat.cat/ca/inici/"
                                                   target="_blank">{{ trans('messages.educational_department') }}</a>
                                            </li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.xtec') ]" href="http://xtec.gencat.cat/" target="_blank">{{ trans('messages.xtec') }}</a>
                                            </li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.edu365') ]" href="http://www.edu365.cat/"
                                                   target="_blank">{{ trans('messages.edu365') }}</a>
                                            </li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.edu3') ]" href="http://www.edu3.cat/" target="_blank">{{ trans('messages.edu3') }}</a>
                                            </li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.arc') ]" href="http://apliense.xtec.cat/arc/"
                                                   target="_blank">{{ trans('messages.arc') }}</a>
                                            </li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.alexandria') ]" href="http://alexandria.xtec.cat/"
                                                   target="_blank">{{ trans('messages.alexandria') }}</a>
                                            </li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.edumet') ]" href="http://edumet.cat/" target="_blank">{{ trans('messages.edumet') }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-xs-7 col-sm-4 col-md-3 col-md-offset-1">
                            <div>

                                <div class="fpca_peu_faldoLlista">

                                    <div class="hidden-xs">
                                        <ul class="list-group llistat_peu col-md-12">
                                            <li class="list-group-item"><p class="title_list">{{ trans('messages.web_services') }}</p></li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.agora_moodle') ]" href="http://agora.xtec.cat" target="_blank">{{ trans('messages.agora_moodle') }}</a>
                                            </li>
                                            <li class="list-group-item bullet">
                                                <a :title="{{ trans('messages.nodes') }}" href="http://agora.xtec.cat/nodes" target="_blank">{{ trans('messages.nodes') }}</a>
                                            </li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.xtecblocs') ]" href="http://blocs.xtec.cat/" target="_blank">{{ trans('messages.xtecblocs') }}</a>
                                            </li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.linkat') ]" href="http://linkat.xtec.cat/"
                                                   target="_blank">{{ trans('messages.linkat') }}</a>
                                            </li>
                                            <li class="list-group-item bullet">
                                                <a :title="[ trans('messages.jclic') ]" href="http://clic.xtec.cat/" target="_blank">{{ trans('messages.jclic') }}</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>


                        <div class="connecta col-xs-12 col-md-4 col-sm-4 col-md-offset-1">
                            <div>

                                <div class="fpca_peu_faldoLlista">

                                    <div class="hidden-xs">
                                        <ul class="list-group llistat_peu col-md-12">

                                            <li class="list-group-item"><p class="title_list">{{ trans('messages.help') }}</p></li>

                                            <li class="list-group-item bullet">
                                                <a title="Item 1" href="#" target="_self">{{ trans('messages.about_sinapsi') }}</a>
                                            </li>

                                        </ul>
                                    </div>

                                    <div class="panel-group visible-xs accordionFoot"
                                         id="accordionFoot_06f2b6a3-f70a-11e3-b8a5-000c291c88e0">
                                        <div class="panel panel-default">
                                            <div class="panel-heading">

									<span class="panel-title nou-peu">
										<a data-toggle="collapse"
                                           data-parent="#accordionFoot_06f2b6a3-f70a-11e3-b8a5-000c291c88e0"
                                           class="collapsed acc-peu"
                                           href="#collapseFoot_06f2b6a3-f70a-11e3-b8a5-000c291c88e0">{{ trans('messages.help') }}</a>
							 		 </span>

                                            </div>
                                            <div id="collapseFoot_06f2b6a3-f70a-11e3-b8a5-000c291c88e0"
                                                 class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <ul>
                                                        <li><a :title="[ trans('messages.web_map') ]" href="/ca/menu-ajuda/ajuda/mapaweb/"
                                                               target="_self">{{ trans('messages.web_map') }}</a></li>
                                                        <li><a :title="[ trans('messages.web_a_z') ]" href="/ca/menu-ajuda/ajuda/websaz/"
                                                               target="_self">{{ trans('messages.web_a_z') }}</a></li>
                                                        <li><a :title="[ trans('messages.accessibility') ]"
                                                               href="/ca/menu-ajuda/ajuda/accessibilitat/"
                                                               target="_self">{{ trans('messages.accessibility') }}</a></li>
                                                        <li><a :title="[ trans('messages.about_gencat') ]"
                                                               href="/ca/menu-ajuda/ajuda/sobre_gencat/" target="_self">{{ trans('messages.about_gencat') }}</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="formatter_body fpca_peu_faldoGiny">


                                </div>
                                <div class="fpca_peu_faldoSocial formatter_body">

                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="footer_tab_bot col-sm-12">
                        <div class="avis_legal">
                            <div class="hidden-xs">
                                <div class="col-sm-2 col-md-2 col-lg-2" id="peuImatge">
                                    <a accesskey="5" target="_self" title="www.gencat.cat" href="http://www.gencat.cat">
                                        <img src="{{ asset('img/logo_generalitat_gris.png')}}" width="101" height="27"
                                             alt="www.gencat.cat" class="adaptImage"></a>
                                </div>
                                <div class="col-sm-9 col-md-9 col-lg-9" id="peuAvis">
                                    <p><a :title="[ trans('messages.legal_notice') ]" href="/ca/menu-ajuda/ajuda/avis_legal/" target="_self">{{ trans('messages.legal_notice') }}</a>: 
                                        {{ trans('messages.footer_1') }}</p></div>
                            </div>
                            <div class="visible-xs avis_legal">
                                <p><a :title="[ trans('messages.legal_notice') ]" href="/ca/menu-ajuda/ajuda/avis_legal/" target="_self">{{ trans('messages.legal_notice') }}</a>: {{ trans('messages.footer_2') }}
                                </p>
                            </div>
                            <div class="col-sm-1 col-md-1 col-lg-1" id="peuImatge">
                                <a target="_blank" href="https://github.com/projectestac/sinapsi"><img
                                            src="{{url('img')}}/giticon.png" width="30px" height="30px"
                                            class="adaptImage"></a>
                            </div>
                            <div class="fi_peu visible-xs">
                                <a title="www.gencat.cat" target="_self" href="http://www.gencat.cat">
                                    <img src="{{ asset('img/logo_generalitat_gris.png')}}" width="101" height="27"
                                         alt="www.gencat.cat" class="checkImage"></a>
                                <p><a class="torna_amunt pull-right" href="javascript:tornarAmunt();"
                                      :title="[ trans('messages.back_to_top') ]">{{ trans('messages.back_to_top') }}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
<script src="{{asset('js/app.js')}}"></script>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<script>
    /* Scrolling back to top */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $(function () {
        $(".scroll").click(function () {
            $("html,body").animate(
                    {scrollTop: $(".thetop").offset().top}, "1000");
            return false
        })
    })

    function popupwindow(url, title, w, h) {
        var left = (screen.width / 2) - (w / 2);
        var top = (screen.height / 2) - (h / 2);
        return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    }

</script>

