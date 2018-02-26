<?php

namespace App\Models;

use Seidor\Foundation\FoundationModel;


/**
 * Territory model class.
 */
class Territory extends FoundationModel {
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'name' =>               'string|max:255',
        'created_at' =>         'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'name' =>               'required',
    ];
    
    /** Constrained attributes */
    protected static $constrains = [
        'name' =>               'unique:territories',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'created_at' =>         'datetime',
        'updated_at' =>         'datetime',
    ];
    
    /** Fields that can be searched automatically */
    protected $searchable = [
        'name' =>               'string',
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];


    /**
     * Authors for this territory.
     *
     * @return hasMany              Model relation
     */
    public function authors() {
        return $this->hasMany(Author::class);
    }

}
