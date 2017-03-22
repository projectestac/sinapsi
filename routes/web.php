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

Route::any('q/sinapsis', 'AppController@getSinapsisBySearchTerm');

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

    // New Post
    Route::get("post/create", [
        'as' => 'posts.create',
        'uses' => 'PostController@create'
    ]);

    Route::post("post/create", [
        'as' => 'posts.preview',
        'uses' => 'PostController@preview'
    ]);

    Route::post("post/store", [
        'as' => 'posts.store',
        'uses' => 'PostController@store'
    ]);

    Route::get("/post/{id}/edit", [
        'as' => 'post.edit',
        'uses' => 'PostController@edit'
    ]);

    Route::post("/post/{id}/edit", [
        'as' => 'post.update',
        'uses' => 'PostController@update'
    ]);

    Route::get("post/{id}/destroy", [
        'as' => 'posts.destroy',
        'uses' => 'PostController@destroy'
    ]);

    // Likes
    Route::get("/post/{id}/like", [
        'as' => 'likes.submit',
        'uses' => 'UserController@like'
    ]);

    Route::get("/post/{id}/unvote", [
        'as' => 'likes.destroy',
        'uses' => 'UserController@unlike'
    ]);

    //Favorites
    Route::get("/post/{id}/favorite", [
        'as' => 'favorites.submit',
        'uses' => 'UserController@favorite'
    ]);

    Route::get("/post/{id}/unfavorite", [
        'as' => 'favorites.destroy',
        'uses' => 'UserController@unfavorite'
    ]);

    // Comments

    Route::post("/post/{post_id}/comment", [
        'as' => 'comment.store',
        'uses' => 'UserController@comment'
    ]);

    Route::post("/post/{post_id}/comment/{comment_id}/edit", [
        'as' => 'comment.edit',
        'uses' => 'UserController@editComment'
    ]);

    Route::post("/post/{post_id}/comment/{comment_id}/destroy", [
        'as' => 'comment.edit',
        'uses' => 'UserController@delComment'
    ]);

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

    Route::get('/{sinapsi_codename}/edit', [
        'as' => 'sinapsi.edit',
        'uses' => 'SinapsiController@edit'
    ]);

    Route::post('/{sinapsi_codename}/edit', [
        'as' => 'sinapsi.update',
        'uses' => 'SinapsiController@update'
    ]);

    Route::get('/{sinapsi_codename}/destroy', [
        'as' => 'sinapsi.destroy',
        'uses' => 'SinapsiController@destroy'
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
