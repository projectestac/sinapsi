@include('header')

<div id="sns-root-embed" class="container">
    <div class="row">
        <div class="row">
            <div v-show="search_box" class="col-xs-12 col-sm-12">
                <sns-search :filters_ui="f_ui" :filters_db="f_db"></sns-search>
            </div>
        </div>
        <br>
        <div id="embed-posts-container">
            <sns-posts-container :pv="postview"></sns-posts-container>
        </div>
    </div>
</div>

<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('js/jquery.timeago.js')}}"></script>

<script>

    shared.page.type = '{{$pagetype}}';
    shared.page.info = {"id": "{{$info}}", "name": ""};

    var bus = new Vue();

    var vm = new Vue({
        el: "#sns-root-embed",
        data: {
            postview: '{{$pv}}',
            search_box: '{{ $search_box }}',
            f_ui: {!! json_encode($filters_from_UI) !!},
            f_db: {!! json_encode($filters_from_DB) !!}
        }
    });

    $(document).ready(function () {
        $("#embed-posts-container").css("height", "{{$height}}pt");
        $("#embed-posts-container").css("overflow-y", "scroll");
    });

</script>