<?php

namespace App\Models;

use DB;
use Auth;
use Seidor\Foundation\FoundationModel;


/**
 * Block model class.
 */
class Block extends FoundationModel {
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'content' =>            'string|nullable',
        'options' =>            'object|nullable',
        'title' =>              'string|max:255|nullable',
        'synapse_id' =>         'integer|min:1',
        'created_at' =>         'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'synapse_id' =>         'required',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'options' =>            'json',
        'synapse_id' =>         'integer',
        'created_at' =>         'datetime',
        'updated_at' =>         'datetime',
    ];
    
    /** Fields that can be searched automatically */
    protected $searchable = [
        'content' =>            'string',
        'title' =>              'string',
    ];
    
    /** Relations that can be fetched automatically */
    protected $includable = [
        'synapse',
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];


    /**
     * Options attribute mutator. This mehod accepts raw JSON
     * strings as filter values; all other values are converted to
     * JSON strings before storing them on the database.
     */
    public function setOptionsAttribute($options) {
        $serialized = is_array($options) ? json_encode($options) : $options;
        $this->attributes['options'] = $serialized;
    }


    /**
     * Synapse for this block.
     *
     * @return belongsTo            Model relation
     */
    public function synapse() {
        return $this->belongsTo(Synapse::class)
            ->withTrashedIfRole('admin');
    }


    /**
     * Restrict the results to those where the authenticated user has
     * an editor privilege over the synapse.
     *
     * Note that site admins can edit all the objects.
     */
    public function scopeForEditor($query) {
        if (Auth::user()->role === 'admin') {
            return $query;
        }
        
        $query->whereExists(function ($query) {
            $query->from('synapse_user');
            $query->where('user_id', Auth::user()->id);
            $query->where('synapse_id', DB::raw('`blocks`.`synapse_id`'));
            $query->whereIn('role', ['manager', 'editor']);
        });
        
        return $query;
    }

}
