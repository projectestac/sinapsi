<?php

namespace App\Models;

use DB;
use Seidor\Foundation\FoundationModel;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\User;
use App\Models\Synapse;
use App\Models\Traits\HasURL;
use App\Models\Traits\HasTrashed;


/**
 * Post model class.
 */
class Post extends FoundationModel {
    use SoftDeletes, HasTrashed, HasURL;
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'comment_count' =>      'integer|min:0',
        'content' =>            'string',
        'excerpt' =>            'string|max:1000',
        'favourite_count' =>    'integer|min:0',
        'image_url' =>          'string|max:512',
        'like_count' =>         'integer|min:0',
        'md5_hash' =>           'string|max:32',
        'guid' =>               'string',
        'reputation' =>         'integer|min:0|max:255',
        'title' =>              'string|max:255',
        'url' =>                'string|url|max:512',
        'author_id' =>          'integer|min:1',
        'feed_id' =>            'integer|min:1',
        'created_at' =>         'isodate',
        'deleted_at' =>         'isodate',
        'published_at' =>       'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'url' =>                'required',
        'md5_hash' =>           'required',
        'guid' =>               'required',
        'author_id' =>          'required',
        'feed_id' =>            'required',
    ];
    
    /** Constrained attributes */
    protected static $constrains = [
        'url' =>                'unique:posts',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'comment_count' =>      'integer',
        'favourite_count' =>    'integer',
        'like_count' =>         'integer',
        'reputation' =>         'integer',
        'author_id' =>          'integer',
        'feed_id' =>            'integer',
        'created_at' =>         'datetime',
        'deleted_at' =>         'datetime',
        'published_at' =>       'datetime',
        'updated_at' =>         'datetime',
    ];
    
    /** Fields that can be searched automatically */
    protected $searchable = [
        'content' =>            'text',
        'title' =>              'text',
    ];
    
    /** Relations that can be fetched automatically */
    protected $includable = [
        'author',
        'feed',
        'reaction',
        'tags'
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'comment_count',
        'favourite_count',
        'like_count',
        'md5_hash',
        'guid',
        'created_at',
        'deleted_at',
        'updated_at',
    ];
    
    /** Hidden attributes */
    protected $hidden = [
        'md5_hash',
        'guid'
    ];
    
    /** Allowed post author filters */
    protected $authorFields = [
        'municipality_id',
        'school_id',
        'territory_id',
        'project_id',
    ];
    
    /** Allowed post reaction filters */
    protected $feedbackFields = [
        'liked',
        'favourited',
        'commented'
    ];


    /**
     * Author for this post.
     *
     * @return belongsTo            Model relation
     */
    public function author() {
        return $this->belongsTo(Author::class);
    }


    /**
     * Comments for this post.
     *
     * @return hasMany              Model relation
     */
    public function comments() {
        return $this->hasMany(Comment::class);
    }


    /**
     * Feed for this post.
     *
     * @return belongsTo            Model relation
     */
    public function feed() {
        return $this->belongsTo(Feed::class);
    }


    /**
     * Authenticated user reaction to this post.
     *
     * @return hasOne         Model relation
     */
    public function reaction() {
        return $this->hasOne(Pivots\PostUser::class)->forUser();
    }


    /**
     * User reactions to this post.
     *
     * @return hasMany              Model relation
     */
    public function feedbacks() {
        return $this->hasMany(Pivots\PostUser::class);
    }


    /**
     * Synapses for this post.
     *
     * @return belongsToMany        Model relation
     */
    public function synapses() {
        return $this->belongsToMany(Synapse::class)
            ->withTrashedIfRole('admin')
            ->withTimestamps();
    }


    /**
     * Tags for this post.
     *
     * @return belongsToMany        Model relation
     */
    public function tags() {
        return $this->belongsToMany(Tag::class)
            ->withTrashedIfRole('admin');
    }


    /**
     * Users for this post.
     *
     * @return belongsToMany        Model relation
     */
    public function users() {
        return $this->belongsToMany(User::class)->withTimestamps();
    }


    /**
     * Restrict the results to posts belonging to the given tags.
     *
     * @param array $ids          Tag identifiers
     */
    public function scopeWhereTagIn($query, array $ids) {
        $query->whereExists(function($query) use ($ids) {
            $query->from('post_tag')->whereIn('post_tag.tag_id', $ids);
            $query->whereRaw('`post_tag`.`post_id` = `posts`.`id`');
        });
        
        return $query;
    }


    /**
     * Restrict the results to posts belonging to the given tag.
     *
     * @param Tag $tag          Tag object
     */
    public function scopeForTag($query, $tag) {
        return $query->whereTagIn([$tag->id]);
    }


    /**
     * Restrict the results to those where the post belongs to a given
     * synapse. This method applies the synapse filters to the query.
     *
     * @param Synapse $synapse      Synapse object
     */
    public function scopeForSynapse($query, $synapse) {
        if (!empty($synapse->filters)) {
            if (is_array($synapse->filters)) {
                $filters = array_filter($synapse->filters, function($v) {
                    return is_null($v) === false;
                });

                $query->filter(new Request($filters));
            }
        }
        
        return $query;
    }


    /**
     * Extend the post filters by allowing to filter by synapse, tags or
     * author information.
     */
    public function scopeFilter($query, Request $request) {
        $query = parent::scopeFilter($query, $request);
        
        // Filter by the given synapse identifier
        
        if ($request->has('synapse_id')) {
            $id = $request->get('synapse_id');
            $synapse = Synapse::whereId($id)->first();
            
            if (!is_null($synapse)) {
                $query->forSynapse($synapse);
            } else {
                $query->corrupt();
            }
        }
        
        // Filter by the given tag identifiers
        
        if ($request->has('tag_id')) {
            $tags = (array) $request->get('tag_id');
            $query->whereTagIn($tags);
        }
        
        // Filter by the given author fields
        
        $filters = $request->only($this->authorFields);
        $filters = array_filter($filters);
        
        if (empty($filters) === false) {
            $query->whereHas('author', function($query) use ($filters) {
                foreach ($filters as $field => $ids) {
                    $query->whereIn($field, (array) $ids);
                }
            });
        }
        
        // Filter by the given user reaction fields
        
        $filters = $request->only($this->feedbackFields);
        $filters = array_filter($filters);
        
        if (empty($filters) === false) {
            $query->whereHas('feedbacks', function($query) use ($filters) {
                foreach ($filters as $field => $ids) {
                    $query->whereIn('user_id', (array) $ids);
                    $query->where($field, true);
                }
            });
        }
        
        return $query;
    }

}
