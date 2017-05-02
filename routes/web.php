<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

require('api.php');
require('admin.php');

Route::get('embed', 'AppController@embed');

Route::get('sinapsis', 'AppController@showSinapsis');
Route::get('centres', 'AppController@showEduEntities');
Route::get('projectes', 'AppController@showProjects');
Route::get('docents', 'AppController@showUsers');

// Serveis educatius
Route::any('se/{codeid}', function ($codeid) {
    return redirect()->route('entity', ['type'=>'se','mId'=>$codeid]);
});

// Serveis territorials
Route::any('st/{id}', function ($id) {
    return redirect()->route('entity', ['type'=>'st','mId'=>$id]);
});

// Projects
Route::any('p/{id}', function ($id) {
    return redirect()->route('entity', ['type'=>'project','mId'=>$id]);
});

// Entities
Route::any('e/{type}/{mId}', 'EntityController@index')->name('entity');
Route::any('e/{type}/{mId}/embed', 'EntityController@embed');

// School
Route::any('s/{codename}', function ($codename) {
    return redirect()->route('entity', ['type'=>'school','mId'=>$codename]);
});

// Tag
Route::any('tag/{tag}', 'TagController@index');
Route::any('tag/{tag}/posts', 'TagController@posts');

// User
Route::get('user/{id}', 'UserController@index');

Route::get('user/{id}/edit', 'UserController@edit');
Route::post('user/{id}/edit', [
    'as' => 'user.update',
    'uses' =>'UserController@update'
]);

Route::auth();

Route::get('auth', 'Auth\LoginController@redirectToProvider');

Route::get('auth/callback', 'Auth\LoginController@handleProviderCallback');

Route::group(['middleware' => 'auth'], function () {
    Route::get("logout", 'Auth\LoginController@logout');

    // Stick
    Route::get("/post/{id}/stick", [
        'as' => 'post.stick',
        'uses' => 'PostController@stick'
    ]);

    Route::get("/post/{id}/unstick", [
        'as' => 'post.unstick',
        'uses' => 'PostController@unstick'
    ]);

    // Sinapsi
    Route::get('/sinapsi/create', [
        'as' => 'sinapsi.create',
        'uses' => 'SinapsiController@create'
    ]);

    Route::post('/sinapsi/create', [
        'as' => 'sinapsi.store',
        'uses' => 'SinapsiController@store'
    ]);

    Route::get('/{sinapsi_slug}/edit', [
        'as' => 'sinapsi.edit',
        'uses' => 'SinapsiController@edit'
    ]);

    Route::post('/{sinapsi_slug}/edit', [
        'as' => 'sinapsi.update',
        'uses' => 'SinapsiController@update'
    ]);

    Route::get('/{sinapsi_slug}/destroy', [
        'as' => 'sinapsi.destroy',
        'uses' => 'SinapsiController@destroy'
    ]);

    //Entity
    Route::get('/entity/create', [
        'as' => 'entity.create',
        'uses' => 'EntityController@create'
    ]);

    Route::post('/entity/create', [
        'as' => 'entity.store',
        'uses' => 'EntityController@store'
    ]);

    Route::get('/entity/{entity_codename}/edit', [
        'as' => 'entity.edit',
        'uses' => 'EntityController@edit'
    ]);

    Route::post('/entity/{entity_codename}/edit', [
        'as' => 'entity.update',
        'uses' => 'EntityController@update'
    ]);

    Route::get('/entity/{entity_codename}/destroy', [
        'as' => 'entity.destroy',
        'uses' => 'EntityController@destroy'
    ]);

    //Projectes
    Route::get('/project/create', [
        'as' => 'entity.create',
        'uses' => 'EntityController@create'
    ]);

    Route::post('/project/create', [
        'as' => 'entity.store',
        'uses' => 'EntityController@store'
    ]);

    Route::get('/project/{entity_codename}/edit', [
        'as' => 'entity.edit',
        'uses' => 'EntityController@edit'
    ]);

    Route::post('/project/{entity_codename}/edit', [
        'as' => 'entity.update',
        'uses' => 'EntityController@update'
    ]);

    Route::get('/project/{entity_codename}/destroy', [
        'as' => 'entity.destroy',
        'uses' => 'EntityController@destroy'
    ]);

    // Posts related operations on sinapsi
    Route::get("/post/{id}/stick/sinapsi/{sinapsi_id}", [
        'as' => 'post.stick.sinapsi',
        'uses' => 'PostController@stick'
    ]);

    Route::get("/post/{id}/unstick/sinapsi/{sinapsi_id}", [
        'as' => 'post.unstick.sinapsi',
        'uses' => 'PostController@unstick'
    ]);

    Route::get("/post/{post_id}/in/sinapsi/{sinapsi_id}", 'SinapsiController@post_in');
    Route::get("/post/{post_id}/out/sinapsi/{sinapsi_id}", 'SinapsiController@post_out');
    
    require('file-manager.php');
});


Route::get('post/{id}', 'PostController@index');
Route::get('{sinapsi_slug}/embed', 'SinapsiController@embed');
Route::any('{sinapsi_slug}', 'SinapsiController@index');
Route::any('/', [
    'as' => 'home',
    'uses' => 'AppController@index'
]);
