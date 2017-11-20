<?php

namespace App\Models;

use DB;
use Auth;
use Seidor\Foundation\FoundationModel;


/**
 * Project model class.
 */
class Project extends FoundationModel {
    
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
        'name' =>               'unique:projects',
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
    
    /** Relations that can be fetched automatically */
    protected $includable = [
        'author'
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];


    /**
     * Author for this project.
     *
     * @return hasOne               Model relation
     */
    public function author() {
        return $this->hasOne(Author::class)->where('type', 'projects');
    }
    
    
    /**
     * Restrict the results to those where the project author is the
     * authenticated user.
     */
    public function scopeForAuthor($query) {
        $query->whereExists(function ($query) {
            $query->from('authors');
            $query->where('user_id', Auth::user()->id);
            $query->where('project_id', DB::raw('`projects`.`id`'));
        });
        
        return $query;
    }

}
