<?php

Route::group(['middleware' => 'role:admin'], function () {
    
    Route::get('settings', 'AppController@editAppSettings');
    Route::post('settings', 'AppController@updateAppSettings');
    Route::get('sinapsi-tree', 'AppController@updateSinapsisTree');

    Route::get('sinapsis-settings', 'AppController@editSinapsisTagsSettings');
    Route::post('sinapsis-settings', 'AppController@updateSinapsisTagsSettings');

    Route::post('get-alias', 'TagController@getAlias');

    Route::post('add-alias', [
        'as' => 'alias.add',
        'uses' => 'TagController@addAlias'
    ]);

    Route::post('destroy-alias', [
        'as' => 'alias.destroy',
        'uses' => 'TagController@destroyAlias'
    ]);

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

    Route::get("/posts/hidden", [
        'as' => 'posts.hidden',
        'uses' => 'PostController@hidden'
    ]);

    Route::post("/posts/hidden", [
        'as' => 'posts.hidden',
        'uses' => 'PostController@hidden'
    ]);

    Route::get("/post/{id}/refresh", [
        'as' => 'post.refresh',
        'uses' => 'ReaderController@refreshPost'
    ]);

    Route::get("/post/{id}/hide", [
        'as' => 'post.hide',
        'uses' => 'PostController@hide'
    ]);

    Route::get("/post/{id}/unhide", [
        'as' => 'post.unhide',
        'uses' => 'PostController@unhide'
    ]);

    Route::get('tag/{tag}/edit', [
        'as' => 'tag.edit',
        'uses' => 'TagController@edit'
    ]);

    Route::post('tag/{tag}/edit', [
        'as' => 'tag.update',
        'uses' => 'TagController@update'
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

    // Reader
    Route::get('reader', 'ReaderController@index');
    Route::get('logos', 'ReaderController@getLogos');

    Route::get('getrss/post', 'ReaderController@getPostByUrl');
    Route::post('getrss/list', 'ReaderController@getPostsByUrlsList');
    Route::get('getrss/{channel_id}', 'ReaderController@getPostsByChannel');
    
});
