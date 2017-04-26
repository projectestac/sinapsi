<ul class="nav navbar-nav navbar-right sns-account">
    <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="sns-account">
            <img class="avatar" src="{{ Auth::user()->avatar }}">
            {{ Auth::user()->name }}
            <div class="caret"></div>
        </a>
        <div class="dropdown-menu">
            <div class="shadowBox">
                <div class="shadow"></div><div class="centrat">
                    <a title="Tancar" class="pull_right tancar hidden-xs"><img src="{{asset('img/NG_boto_tancar.png')}}" alt="Tancar">
                    </a>
                    <ul class="col-sm-4 col-md-3 col_left">
                        <li class="dropdown dropdown-submenu">
                            <a target="_self" class="dropdown-toggle" href="{{ url('/user') }}/{{ Auth::user()->id }}" title="{{ trans('messages.profile') }}">{{ trans('messages.profile') }}
                            </a>
                        </li>
                        @if (Auth::user()->isAdmin())
                            <li class="dropdown dropdown-submenu">
                            <a target="_self" class="dropdown-toggle" href="{{ url('/settings') }}" title="{{ trans('messages.administration') }}">{{ trans('messages.administration') }}
                            </a>
                        </li>    
                        @endif
                        <li class="dropdown dropdown-submenu">
                            <a target="_self" class="dropdown-toggle" href="{{ url('/logout') }}" title="{{ trans('messages.log_out') }}">
                            {{ trans('messages.log_out') }}</a>
                        </li>    

                    </ul>
                </div>
            </div>
        </div>
    </li>
</ul>
