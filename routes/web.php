<?php


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
    Route::get('/api/debug', 'App\AppController@debug');
}


/* Account authentication routes */

Route::get('accounts/register', 'Auth\AccountController@redirectToProvider');
Route::get('accounts/login', 'Auth\AccountController@handleProviderCallback');


/* Synapse ATOM feeds */

Route::get('feeds/synapses/{slug}', 'Atom\SyndicationController@synapseIndex');
Route::get('feeds/tags/{slug}', 'Atom\SyndicationController@tagIndex');


/* Web application manifest */

Route::get('/manifest.json', 'App\AppController@manifest');


/* Backend environment settings */

Route::get('/environment.json', 'App\AppController@environment');
