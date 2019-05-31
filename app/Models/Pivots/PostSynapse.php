<?php

namespace App\Models\Pivots;

use Auth;
use Seidor\Foundation\FoundationModel;

use App\Models\Post;
use App\Models\Synapse;


/**
 * PostSynapse model class.
 */
class PostSynapse extends FoundationModel {
    
    /** Table associated with the model */
    protected $table = 'post_synapse';
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'sticked' =>            'boolean',
        'post_id' =>            'integer|min:1',
        'synapse_id' =>         'integer|min:1',
        'created_at' =>         'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'post_id' =>            'required',
        'synapse_id' =>         'required',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'sticked' =>            'boolean',
        'post_id' =>            'integer',
        'synapse_id' =>         'integer',
        'created_at' =>         'datetime',
        'updated_at' =>         'datetime',
    ];
    
    /** Relations that can be fetched automatically */
    protected $includable = [
        'post',
        'synapse',
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];


    /**
     * Post for this relation.
     *
     * @return belongsTo            Model relation
     */
    public function post() {
        return $this->belongsTo(Post::class)
                    ->withTrashedIfAdmin();
    }


    /**
     * Synapse for this relation.
     *
     * @return belongsTo            Model relation
     */
    public function synapse() {
        return $this->belongsTo(Synapse::class)
                    ->withTrashedIfAdmin();
    }

}
