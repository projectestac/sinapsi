<!DOCTYPE html>

<html lang="en">

<head>
    @include('header')
    @yield('header-append')
</head>

<body>
	<div id="root">
	    <div class='thetop'></div>
	    @include ('navbar')
	    @yield('content')
	</div>
    @include('footer')
    @yield('footer-append')

</body>

</html>
