<?php

namespace App\Models;

use DB;
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
        'url' =>                'string|url|max:512',
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
    
    /** Fields that can be searched automatically */
    protected $searchable = [
        'url' =>                'string',
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
            ->withTrashedIfRole('admin');
    }
    
    
    /**
     * Restrict the results to those where the feed author is the
     * authenticated user.
     */
    public function scopeForAuthor($query) {
        $query->whereExists(function ($query) {
            $query->from('authors');
            $query->where('id', DB::raw('`feeds`.`author_id`'));
            $query->where('user_id', Auth::user()->id);
        });
        
        return $query;
    }
    
}
