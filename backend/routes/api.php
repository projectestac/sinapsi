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


/* -- ADMINISTRATION ROUTES ----------------------------------------------- */

Route::group([
    'middleware' => [
        'api',
        'auth',
        'role:admin'
    ],
], function () {

    /** Users */

    Route::resource('users', 'UserController', [
        'except' => ['update', 'store', 'create', 'edit']]);

    Route::post('users/{id}', 'UserController@restore')
        ->name('users.restore');

    /** Authors */

    Route::resource('projects', 'ProjectController', [
        'only' => ['store', 'update', 'destroy']]);

    Route::resource('schools', 'SchoolController', [
        'only' => ['store', 'update', 'destroy']]);

    /** Sources */

    Route::post('feeds/{id}', 'FeedController@restore')
        ->name('feeds.restore');

    Route::resource('municipalities', 'MunicipalityController', [
        'except' => ['index', 'show', 'create', 'edit']]);

    Route::resource('territories', 'TerritoryController', [
        'except' => ['index', 'show', 'create', 'edit']]);

    /** Posts */

    Route::resource('comments', 'CommentController', [
        'only' => ['destroy']]);

    Route::resource('posts', 'PostController', [
        'only' => ['destroy']]);

    Route::post('posts/{id}', 'PostController@restore')
        ->name('posts.restore');

    Route::resource('tags', 'TagController', [
        'only' => ['destroy']]);

    Route::post('tags/{id}', 'TagController@restore')
        ->name('tags.restore');

    /** Synapses */

    Route::resource('synapses', 'SynapseController', [
        'only' => ['store', 'destroy']]);

});


/* -- AUTHENTICATED USER ROUTES ------------------------------------------- */

Route::group([
    'middleware' => [
        'api',
        'auth'
    ],
], function () {
    
    /** Authenticated user */

    Route::get('accounts/profile', 'Auth\AccountController@profile')
        ->name('accounts.profile');

    Route::post('accounts/logout', 'Auth\AccountController@logout')
        ->name('accounts.logout');

    /** Sources */

    Route::resource('authors', 'AuthorController', [
        'only' => ['update']]);

    Route::resource('feeds', 'FeedController', [
        'except' => ['index', 'show', 'create', 'edit']]);

    /** Posts */

    Route::resource('posts/reactions', 'ReactionController', [
       'only' => ['show', 'update']]);

    Route::resource('comments', 'CommentController', [
        'only' => ['store']]);

    /** Synapses */

    Route::resource('blocks', 'BlockController', [
        'except' => ['index', 'show', 'create', 'edit']]);

    Route::resource('synapses/bumps', 'BumpController', [
        'except' => ['create', 'edit']]);

    Route::resource('synapses/privileges', 'PrivilegeController', [
        'except' => ['create', 'edit']]);

    Route::resource('synapses', 'SynapseController', [
        'only' => ['update']]);

});


/* -- PUBLIC ACCESS ROTUES ------------------------------------------------ */

Route::group([
    'middleware' => [
        'api'
    ],
], function () {
    
    /** User authentication */

    Route::get('accounts/login', 'Auth\AccountController@login')
        ->name('accounts.login');

    /** Authors */

    Route::resource('projects', 'ProjectController', [
        'only' => ['index', 'show']]);

    Route::resource('schools', 'SchoolController', [
        'only' => ['index', 'show']]);

    /** Sources */

    Route::resource('authors', 'AuthorController', [
        'only' => ['index', 'show']]);

    Route::resource('municipalities', 'MunicipalityController', [
        'only' => ['index', 'show']]);

    Route::resource('territories', 'TerritoryController', [
        'only' => ['index', 'show']]);

    Route::resource('feeds', 'FeedController', [
        'only' => ['index', 'show']]);

    /** Posts */

    Route::resource('comments', 'CommentController', [
        'only' => ['index', 'show']]);

    Route::resource('posts', 'PostController', [
        'only' => ['index', 'show']]);

    Route::resource('tags', 'TagController', [
        'only' => ['index', 'show']]);

    /** Synapses */

    Route::resource('blocks', 'BlockController', [
        'only' => ['index', 'show']]);

    Route::get('synapses/nodes/{id?}', 'SynapseController@nodes')
        ->name('synapses.nodes');
    
    Route::resource('synapses', 'SynapseController', [
        'only' => ['index', 'show']]);

});
