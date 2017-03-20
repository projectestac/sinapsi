<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="csrf-token" content="{{ csrf_token() }}">

<link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
      integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<link rel="stylesheet" href="{{asset('css/master.min.css')}}">

{{-- Fonts --}}
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto+Slab:300,700' rel='stylesheet'
      type='text/css'>
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

{{-- Styles --}}
<link href="{{ asset('css/fpca_subcapcalera.css') }}" rel="stylesheet">
<link href="{{ asset('css/grafic_destacat.css') }}" rel="stylesheet">
<link href="{{ asset('css/vue-multiselect.min.css') }}" rel="stylesheet">
<link href="{{ asset('css/style.css') }}" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<script src="{{ asset('js/vue.js') }}"></script>
<script src="{{asset('js/tinymce')}}/tinymce.min.js"></script>

<script>

    var editor_config = {
        path_absolute: "{{url('/')}}/",
        selector: ".tinymce",
        plugins: [
            "link image code"
        ],
        toolbar: "bold italic | styleselect | bullist numlist outdent indent | link image media | removeformat | code  ",
        relative_urls: false,
        statusbar: false,
        menubar: false,
        content_css: '{{asset('css/tinymce.css')}}',
        file_browser_callback: function (field_name, url, type, win) {
            var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
            var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

            var cmsURL = editor_config.path_absolute + 'laravel-filemanager?field_name=' + field_name;
            if (type == 'image') {
                cmsURL = cmsURL + "&type=Images";
            } else {
                cmsURL = cmsURL + "&type=Files";
            }

            tinyMCE.activeEditor.windowManager.open({
                file: cmsURL,
                title: 'Gestor de fitxers',
                width: x * 0.8,
                height: y * 0.8,
                resizable: "yes",
                close_previous: "no"
            });
        }
    };
    tinymce.init(editor_config);

</script>

<script>

    var shared = {
        baseUrl: location.protocol + "//" + location.host,
        page: {
            "type": "home",
            "info": {
                "name": "",
                "id": ""
            }
        },
        info: "",
        user: {
            "logged": "{{ Auth::check() }}" ? true : false,
            "data": "{{ Auth::user() }}".replace(/&quot;/g, '"'),
            "can_post_edit": "{{  Auth::check() and Gate::allows('post-edit') }}" ? true : false
        }
    };

    window.shared = shared;

</script>

<script>
    window.trans = <?php
    // copy all translations from /resources/lang/CURRENT_LOCALE/* to global JS variable
    $lang_files = File::files(resource_path() . '/lang/' . App::getLocale());
    $trans = [];
    foreach ($lang_files as $f) {
        $filename = pathinfo($f)['filename'];
        $trans[$filename] = trans($filename);
    }
    echo json_encode($trans);
    ?>;
</script>

