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
Route::any('api/v1/tag/name/{name}', function ($name) {
    return getTagByName($name);
});
Route::any('api/v1/tag/id/{id}', function ($id) {
    return getTagById($id);
});
Route::any('api/v1/tag/{id}/posts', 'TagController@posts');
Route::any('api/v1/tag/{id}/posts/count', 'TagController@postsCount');
Route::any('api/v1/tags', function () {
    return getTags();
});

// Sinapsis
Route::any('api/v1/sinapsis', 'AppController@getSinapsisBySearchTerm');

// Cities
Route::any('api/v1/cities', function () {
    return getCities();
});
Route::any('api/v1/city/{city}', function ($city) {
    return getCity($city);
});

// Educational services
Route::any('api/v1/ssee', function () {
    return getSSEE();
});

// Schools
Route::any('api/v1/schools/table', function () {
    return getSchoolsTable();
});

Route::any('api/v1/school/name/{school}', function ($school) {
    return getSchoolByName($school);
});
Route::any('api/v1/school/id/{school}', function ($id) {
    return getSchoolById($id);
});

Route::any('api/v1/schools', function () {
    return getSchools();
});

// Projects
Route::any('api/v1/projects/table', function () {
    return getProjectsTable();
});

Route::any('api/v1/project/name/{name}', function ($name) {
    return getProjectByName($name);
});
Route::any('api/v1/project/id/{id}', function ($id) {
    return getProjectById($id);
});

Route::any('api/v1/projects', function () {
    return getProjects();
});



// Users

Route::any('api/v1/users', 'AppController@users');

Route::any('api/v1/user/name/{name}', function ($name) {
    return getUserByName($name);
});
Route::any('api/v1/user/id/{id}', function ($id) {
    return getUserById($id);
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
