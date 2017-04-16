const elixir = require('laravel-elixir');
require('laravel-elixir-vue-2');

elixir.config.sourcemaps = false;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.styles([
        'app.css',
        'gencat/bootstrap.css',
        'gencat/styles.css',
        'gencat/leaflet.css',
        'gencat/grafic_destacat.css',
        'vue-multiselect.min.css',
        'posts.css',
        'search.css',
        'style.css',
        'sinapsi.css'
], 'public/css/styles.min.css');

    mix.webpack('app.js');

});
