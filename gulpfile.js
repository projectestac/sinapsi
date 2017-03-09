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
        'search_box.css',
        'style.css',
        'block.css',
        'pagination.css',
        'sinapsi.css',
    ], 'public/css/style.css');

    mix.webpack('app.js');

});
