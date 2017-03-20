
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

    // Reader
    Route::get('reader', function () {
        return view('admin/reader');
    });

    Route::get('getrss/post', 'ReaderController@getPostByUrl');
    Route::post('getrss/list', 'ReaderController@getPostsByUrlsList');
    Route::get('getrss/{channel_id}', 'ReaderController@getPostsByChannel');
    
});
