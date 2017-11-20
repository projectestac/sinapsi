<?php

namespace App\Models\Pivots;

use Seidor\Foundation\FoundationModel;

use App\User;
use App\Models\Post;


/**
 * PostUser model class.
 */
class PostUser extends FoundationModel {
    
    /** Table associated with the model */
    protected $table = 'post_user';
    
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'commented' =>          'boolean',
        'favourited' =>         'boolean',
        'liked' =>              'boolean',
        'post_id' =>            'integer|min:1',
        'user_id' =>            'integer|min:1',
        'created_at' =>         'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'favourited' =>         'required_without:liked',
        'liked' =>              'required_without:favourited',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'commented' =>          'boolean',
        'favourited' =>         'boolean',
        'liked' =>              'boolean',
        'post_id' =>            'integer',
        'user_id' =>            'integer',
        'created_at' =>         'datetime',
        'updated_at' =>         'datetime',
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'commented',
        'created_at',
        'updated_at',
    ];


    /**
     * Post for this relation.
     *
     * @return belongsTo            Model relation
     */
    public function post() {
        return $this->belongsTo(Post::class);
    }


    /**
     * User for this relation.
     *
     * @return belongsTo            Model relation
     */
    public function user() {
        return $this->belongsTo(User::class);
    }
}
