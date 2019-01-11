<?php

namespace App\Models;

use Auth;
use Seidor\Foundation\FoundationModel;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\User;
use App\Models\Pivots\SynapseUser;
use App\Models\Traits\HasSlug;
use App\Models\Traits\HasTrashed;


/**
 * Synapse model class.
 */
class Synapse extends FoundationModel {
    use HasSlug, HasTrashed, SoftDeletes;

    /** General synapse slug */
    const GENERAL_SLUG = 'general';


    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'blocks' =>             'array|nullable',
        'blocks.*' =>           'integer|min:1|distinct|nullable',
        'description' =>        'string|max:512|nullable',
        'filters' =>            'object|nullable',
        'name' =>               'string|max:255',
        'slug' =>               'string|slug|max:255',
        'type' =>               'string|in:authors,tags,synapses',
        'synapse_id' =>         'integer|min:1|nullable',
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
        'slug' =>               'unique:synapses',
    ];

    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'blocks' =>             'array',
        'filters' =>            'json',
        'created_at' =>         'datetime',
        'deleted_at' =>         'datetime',
        'updated_at' =>         'datetime',
    ];

    /** Fields that can be searched automatically */
    protected $searchable = [
        'description' =>        'string',
        'name' =>               'string',
    ];

    /** Relations that can be fetched automatically */
    protected $includable = [
        'author',
        'synapse',
        'privilege',
    ];

    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'created_at',
        'deleted_at',
        'updated_at',
    ];

    /** Fields to show on parent/child relations */
    protected $nodeFields = [
        'id',
        'name',
        'slug',
        'synapse_id',
        'child_count',
    ];


    /**
     * Blocks attribute mutator. This method explicitly casts
     * the block identifiers to and integer array.
     */
    public function setBlocksAttribute($blocks) {
        $serialized = null;

        if (is_array($blocks)) {
            $values = array_map('intval', array_filter($blocks));
            $serialized = json_encode($values);
        }

        $this->attributes['blocks'] = $serialized;
    }


    /**
     * Filters attribute mutator. This mehod accepts raw JSON
     * strings as filter values; all other values are converted to
     * JSON strings before storing them on the database.
     */
    public function setFiltersAttribute($filters) {
        $serialized = is_array($filters) ? json_encode($filters) : $filters;
        $this->attributes['filters'] = $serialized;
    }


    /**
     * Author for this synapse.
     *
     * @return hasOne               Model relation
     */
    public function author() {
        return $this->hasOne(Author::class);
    }


    /**
     * Blocks for this synapse.
     *
     * @return hasMany              Model relation
     */
    public function blocks() {
        return $this->hasMany(Block::class);
    }


    /**
     * Posts for this synapse.
     *
     * @return belongsToMany        Model relation
     */
    public function posts() {
        return $this->belongsToMany(Post::class)
                    ->withTrashedIfAdmin()
                    ->withTimestamps();
    }


    /**
     * Authenticated user privilege for this synapse.
     *
     * @return hasOne         Model relation
     */
    public function privilege() {
        return $this->hasOne(Pivots\SynapseUser::class)->forUser();
    }


    /**
     * Tag for this synapse.
     *
     * @return hasOne               Model relation
     */
    public function tag() {
        return $this->hasOne(Tag::class)
                    ->withTrashedIfAdmin();
    }


    /**
     * Users for this synapse.
     *
     * @return belongsToMany        Model relation
     */
    public function users() {
        return $this->belongsToMany(User::class);
    }


    /**
     * Parent synapse for this synapse.
     *
     * @return belongsTo            Model relation
     */
    public function synapse() {
        return $this->belongsTo(Synapse::class, 'synapse_id')
                    ->withTrashedIfAdmin();
    }


    /**
     * Child synapses for this synapse.
     *
     * @return belongsTo            Model relation
     */
    public function childs() {
        return $this->hasMany(Synapse::class, 'synapse_id')
                    ->withTrashedIfAdmin();
    }


    /**
     * Overwrites the cards method to restrict the fields returned
     * for child relations.
     */
    public function scopeCards($query, $id = null, $relation = null) {
        return ($relation !== 'childs') ?
            parent::scopeCards($query, $id, $relation) :
            $query->nodeCards();
    }


    /**
     * Returns a node representation of the model. This method
     * restricts the returned fields to those defined on the
     * $nodeFields array.
     */
    public function scopeNodeCards($query) {
        return $query->select($this->nodeFields);
    }

}
