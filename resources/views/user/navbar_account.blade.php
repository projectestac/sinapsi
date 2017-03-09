<ul class="nav navbar-nav navbar-right sns-account">
    <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="sns-account">
            <img class="avatar" src="{{ Auth::user()->avatar }}">
            {{ Auth::user()->name }}
        </a>
        <ul class="dropdown-menu" aria-labelledby="sns-account">
            <br>
            <li><a href="{{ url('/user') }}/{{ Auth::user()->id }}">Perfil</a></li>
            @if (Auth::user()->isAdmin())
                <li><a href="{{ url('/settings') }}">Administració</a></li>
            @endif
            <li><a href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Tancar sessió</a></li>
            <br>
        </ul>
    </li>
</ul>
