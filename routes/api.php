<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Posts
Route::any('api/v1/post/{id}', 'PostController@post');
Route::get('api/v1/post/{id}/comments', 'PostController@comments');
Route::any('api/v1/posts', 'AppController@posts');
Route::any('api/v1/posts/count', 'AppController@postsCount');

// Blocks
Route::any("api/v1/blocks", "BlockController@index");

// Sinapsis
Route::any('api/v1/sinapsi/{sinapsi_id}/posts', 'SinapsiController@posts');
Route::any('api/v1/sinapsi/{sinapsi_id}/posts/count', 'SinapsiController@getPostsCount');

// Entities
Route::any('api/v1/e/{type}/{mId}/posts', 'EntityController@posts');
Route::any('api/v1/e/{type}/{mId}/posts/count', 'EntityController@postsCount');

// Tags
Route::any('api/v1/tag/{id}/posts', 'TagController@posts');
Route::any('api/v1/tag/{id}/posts/count', 'TagController@postsCount');

Route::any('api/v1/cities', function () {
    return getCities();
});
Route::any('api/v1/ssee', function () {
    return getSSEE();
});
Route::any('api/v1/tags', function () {
    return getTags();
});
Route::any('api/v1/schools', function () {
    return getSchools();
});
Route::any('api/v1/projects', function () {
    return getProjects();
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('api/v1/post/{post_id}/like', 'UserController@like');
    Route::get('api/v1/post/{post_id}/unlike', 'UserController@unlike');

    Route::get('api/v1/post/{post_id}/favorite', 'UserController@favorite');
    Route::get('api/v1/post/{post_id}/unfavorite', 'UserController@unfavorite');

    Route::post('api/v1/post/{post_id}/comment', 'UserController@doComment');
    Route::delete('api/v1/comment/{comment_id}', 'UserController@destroyComment');

    Route::post("api/v1/block/create", "BlockController@store");
    Route::post("api/v1/block/update", "BlockController@update");
    Route::post("api/v1/block/delete", "BlockController@destroy");
});

/* Laravel 5.3 origin
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
*/
