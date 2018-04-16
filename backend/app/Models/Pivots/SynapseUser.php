<?php

namespace App\Models\Pivots;

use Auth;
use Seidor\Foundation\FoundationModel;

use App\User;
use App\Models\Synapse;


/**
 * SynapseUser model class.
 */
class SynapseUser extends FoundationModel {
    
    /** Table associated with the model */
    protected $table = 'synapse_user';
    
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:1',
        'role' =>               'string|in:manager,editor,viewer',
        'synapse_id' =>         'integer|min:1',
        'user_id' =>            'integer|min:1',
        'created_at' =>         'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'synapse_id' =>         'required',
        'user_id' =>            'required',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'synapse_id' =>         'integer',
        'user_id' =>            'integer',
        'created_at' =>         'datetime',
        'updated_at' =>         'datetime',
    ];
    
    /** Relations that can be fetched automatically */
    protected $includable = [
        'synapse',
        'user',
    ];
    
    /** Attributes that are not mass assignable */
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];


    /**
     * Synapse for this relation.
     *
     * @return belongsTo            Model relation
     */
    public function synapse() {
        return $this->belongsTo(Synapse::class)
            ->withTrashedIfRole('admin');
    }


    /**
     * User for this relation.
     *
     * @return belongsTo            Model relation
     */
    public function user() {
        return $this->belongsTo(User::class);
    }


    /**
     * Restrict the results to those where the authenticated user has
     * an management privileges over the synapse.
     *
     * Note that site admins can administer all the objects.
     */
    public function scopeForManager($query) {
        if (Auth::user()->role === 'admin') {
            return $query;
        }
        
        $query->where('user_id', Auth::user()->id);
        $query->where('role', 'manager');
        
        return $query;
    }

}
