<?php

namespace App\Models;

use Seidor\Foundation\FoundationModel;
use App\Models\Author;
use App\User;


/**
 * Comment model class.
 */
class Comment extends FoundationModel {
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'content' =>            'string|max:500',
        'post_id' =>            'integer|min:1',
        'user_id' =>            'integer|min:1',
        'created_at' =>         'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'post_id' =>            'required',
        'user_id' =>            'required',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'post_id' =>            'integer',
        'user_id' =>            'integer',
        'created_at' =>         'datetime',
        'updated_at' =>         'datetime',
    ];
    
    /** Fields that can be searched automatically */
    protected $searchable = [
        'content' =>            'string',
    ];
    
    /** Relations that can be fetched automatically */
    protected $includable = [
        'author',
        'post',
        'user',
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];


    /**
     * Author for this comment.
     *
     * @return belongsTo            Model relation
     */
    public function author() {
        return $this->belongsTo(Author::class, 'user_id', 'user_id')
                    ->where('type', 'users');
    }


    /**
     * Post for this comment.
     *
     * @return belongsTo            Model relation
     */
    public function post() {
        return $this->belongsTo(Post::class)
                    ->withTrashedIfAdmin();
    }


    /**
     * User for this comment.
     *
     * @return belongsTo            Model relation
     */
    public function user() {
        return $this->belongsTo(User::class);
    }

}
