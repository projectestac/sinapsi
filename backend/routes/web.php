<?php

use Illuminate\Filesystem\Filesystem;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Application debug view */

if (config('app.debug')) {
    Route::get('/api/debug', function () {
        return view('debug');
    });
}


/* Account authentication routes */

Route::get('accounts/register', 'Auth\AccountController@redirectToProvider');
Route::get('accounts/login', 'Auth\AccountController@handleProviderCallback');


/* Synapse ATOM feeds */

Route::get('feeds/synapses/{slug}', 'Atom\SyndicationController@synapseIndex');
Route::get('feeds/tags/{slug}', 'Atom\SyndicationController@tagIndex');


/* Web application manifest */

Route::get('/manifest.json', function () {
    $filesystem = App::make(Filesystem::class);
    $iconsPath = public_path('images/launch/');
    $iconFiles = $filesystem->glob("$iconsPath/*.png");
    
    // Obtain all the icons for the application
    
    $icons = [];
    
    foreach ($iconFiles as $path) {
        $size = $filesystem->name($path);
        
        $icons[] = [
           "src" =>     "images/launch/$size.png",
           "sizes" =>   "{$size}x{$size}",
           "type" =>    "image/png" 
       ];
    }
    
    // Return the web application manifest
    
    $manifest = [
        "display" =>            "standalone",
        "short_name" =>         config('app.name'),
        "name" =>               config('app.name'),
        "start_url" =>          config('app.url'),
        "theme_color" =>        config('app.theme_color'),
        "background_color" =>   config('app.background_color'),
        "icons" =>              [ $icons ]
    ];
    
    return Response::json($manifest);
});
