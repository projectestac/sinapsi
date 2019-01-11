<?php

namespace App\Models;

use Auth;
use Seidor\Foundation\FoundationModel;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Traits\HasURL;
use App\Models\Traits\HasTrashed;


/**
 * Feed model class.
 */
class Feed extends FoundationModel {
    use SoftDeletes, HasTrashed, HasURL;
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'etag' =>               'string',
        'url' =>                'string|max:512',
        'author_id' =>          'integer|min:1',
        'created_at' =>         'isodate',
        'deleted_at' =>         'isodate',
        'modified_at' =>        'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'url' =>                'required',
        'author_id' =>          'required',
    ];
    
    /** Constrained attributes */
    protected static $constrains = [
        'url' =>                'unique:feeds',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'author_id' =>          'integer',
        'created_at' =>         'datetime',
        'deleted_at' =>         'datetime',
        'modified_at' =>        'datetime',
        'updated_at' =>         'datetime',
    ];
    
    /** Relations that can be fetched automatically */
    protected $includable = [
        'author',
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'etag',
        'created_at',
        'deleted_at',
        'modified_at',
        'updated_at',
    ];
    
    /** Hidden attributes */
    protected $hidden = [
        'etag'
    ];


    /**
     * Author for this feed.
     *
     * @return belongsTo            Model relation
     */
    public function author() {
        return $this->belongsTo(Author::class);
    }


    /**
     * Posts for this feed.
     *
     * @return hasMany              Model relation
     */
    public function posts() {
        return $this->hasMany(Post::class)
                    ->withTrashedIfAdmin();
    }

}
