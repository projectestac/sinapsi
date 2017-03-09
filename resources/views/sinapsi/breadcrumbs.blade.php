<ol class="breadcrumb filariana sns-breadcrumbs hidden-xs">
    @foreach ($sinapsi['breadcrumbs'] as $parent)
        <li><a href="{{url($parent['url'])}}">{{$parent['sinapsi']}}</a></li>
    @endforeach
</ol>
