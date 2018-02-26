<?php

namespace App\Models;

use Seidor\Foundation\FoundationModel;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Models\Traits\HasSlug;
use App\Models\Traits\HasTrashed;


/**
 * Tag model class.
 */
class Tag extends FoundationModel {
    use HasSlug, HasTrashed, SoftDeletes;
    
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'name' =>               'string|max:255',
        'post_count' =>         'integer|min:0',
        'slug' =>               'string|slug|max:254',
        'synapse_id' =>         'integer|min:1',
        'created_at' =>         'isodate',
        'deleted_at' =>         'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'name' =>               'required',
    ];
    
    /** Constrained attributes */
    protected static $constrains = [
        'name' =>               'unique:tags',
        'slug' =>               'unique:tags',
        'synapse_id' =>         'unique:tags',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'post_count' =>         'integer',
        'synapse_id' =>         'integer',
        'created_at' =>         'datetime',
        'deleted_at' =>         'datetime',
        'updated_at' =>         'datetime',
    ];
    
    /** Fields that can be searched automatically */
    protected $searchable = [
        'name' =>               'string',
    ];
    
    /** Relations that can be fetched automatically */
    protected $includable = [
        'synapse',
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'post_count',
        'created_at',
        'deleted_at',
        'updated_at',
    ];


    /**
     * Pags for this tag.
     *
     * @return belongsToMany        Model relation
     */
    public function posts() {
        return $this->belongsToMany(Post::class)
            ->withTrashedIfRole('admin');
    }


    /**
     * Synapse for this tag.
     *
     * @return belongsTo            Model relation
     */
    public function synapse() {
        return $this->belongsTo(Synapse::class);
    }

}
