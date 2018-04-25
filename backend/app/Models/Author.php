<?php

namespace App\Models;

use App\User;
use Seidor\Foundation\FoundationModel;


/**
 * Author model class.
 */
class Author extends FoundationModel {
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'name' =>               'string|max:550',
        'type' =>               'string|in:projects,schools,users',
        'municipality_id' =>    'integer|min:1|nullable',
        'school_id' =>          'integer|min:1|nullable',
        'territory_id' =>       'integer|min:1|nullable',
        'project_id' =>         'integer|min:1',
        'synapse_id' =>         'integer|min:1',
        'user_id' =>            'integer|min:1',
        'created_at' =>         'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'name' =>               'required',
        'type' =>               'required',
    ];
    
    /** Constrained attributes */
    protected static $constrains = [
        'synapse_id' =>         'unique:authors',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'municipality_id' =>    'integer',
        'project_id' =>         'integer',
        'school_id' =>          'integer',
        'synapse_id' =>         'integer',
        'territory_id' =>       'integer',
        'user_id' =>            'integer',
        'created_at' =>         'datetime',
        'updated_at' =>         'datetime',
    ];
    
    /** Fields that can be searched automatically */
    protected $searchable = [
        'name' =>               'string',
    ];
    
    /** Relations that can be fetched automatically */
    protected $includable = [
        'municipality',
        'project',
        'school',
        'synapse',
        'territory',
        'user',
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];


    /**
     * Feeds for this author.
     *
     * @return hasMany              Model relation
     */
    public function feeds() {
        return $this->hasMany(Feed::class);
    }


    /**
     * Municipality for this author.
     *
     * @return belongsTo            Model relation
     */
    public function municipality() {
        return $this->belongsTo(Municipality::class);
    }


    /**
     * Posts for this author.
     *
     * @return hasMany              Model relation
     */
    public function posts() {
        return $this->hasMany(Post::class)
                    ->withTrashedIfAdmin();
    }


    /**
     * Project for this author.
     *
     * @return belongsTo            Model relation
     */
    public function project() {
        return $this->belongsTo(Project::class);
    }


    /**
     * School for this author.
     *
     * @return belongsTo            Model relation
     */
    public function school() {
        return $this->belongsTo(School::class);
    }


    /**
     * Synapse for this author.
     *
     * @return belongsTo            Model relation
     */
    public function synapse() {
        return $this->belongsTo(Synapse::class)
                    ->withTrashedIfAdmin();
    }


    /**
     * Territory for this author.
     *
     * @return belongsTo            Model relation
     */
    public function territory() {
        return $this->belongsTo(Territory::class);
    }


    /**
     * User for this author.
     *
     * @return belongsTo            Model relation
     */
    public function user() {
        return $this->belongsTo(User::class);
    }

}
