<?php

namespace App;

use Auth;
use Illuminate\Auth\Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Seidor\Foundation\FoundationModel;

use App\Models\Author;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Synapse;
use App\Models\Pivots\PostUser;
use App\Models\Pivots\SynapseUser;


/**
 * User model class.
 */
class User extends FoundationModel implements AuthenticatableContract {
    use Authenticatable, Notifiable;
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:0',
        'avatar_url' =>         'string|url|max:255',
        'email' =>              'string|email|max:255',
        'name' =>               'string|max:255',
        'provider_uid' =>       'string|max:127',
        'provider_token' =>     'string',
        'role' =>               'string|in:admin,author',
        'created_at' =>         'isodate',
        'disabled_at' =>        'isodate',
        'updated_at' =>         'isodate',
    ];
    
    /** Attributes that are required definitions */
    protected static $required = [
        'email' =>              'required',
        'name' =>               'required',
        'provider_uid' =>       'required',
        'provider_token' =>     'required',
    ];
    
    /** Constrained attributes */
    protected static $constrains = [
        'provider_uid' =>       'unique:users',
    ];
    
    /** Attributes that should be cast */
    protected $casts = [
        'id' =>                 'integer',
        'created_at' =>         'datetime',
        'disabled_at' =>        'datetime',
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
        'password',
        'provider_uid',
        'provider_token',
        'remember_token',
        'created_at',
        'disabled_at',
        'updated_at',
    ];
    
    /** Hidden attributes */
    protected $hidden = [
        'email',
        'password',
        'provider_uid',
        'provider_token',
        'remember_token',
    ];


    /**
     * Author for this user.
     *
     * @return hasOne               Model relation
     */
    public function author() {
        return $this->hasOne(Author::class)->where('type', 'users');
    }


    /**
     * Comments for this user.
     *
     * @return hasMany              Model relation
     */
    public function comments() {
        return $this->hasMany(Comment::class);
    }


    /**
     * Posts for this user.
     *
     * @return belongsToMany        Model relation
     */
    public function posts() {
        return $this->belongsToMany(Post::class)
            ->withTrashedIfRole('admin')
            ->withTimestamps();
    }


    /**
     * Synapse privileges for this user.
     *
     * @return hasMany              Model relation
     */
    public function privileges() {
        return $this->hasMany(SynapseUser::class);
    }


    /**
     * Post reactions from this user.
     *
     * @return hasMany              Model relation
     */
    public function reactions() {
        return $this->hasMany(PostUser::class);
    }


    /**
     * Synapses for this user.
     *
     * @return belongsToMany        Model relation
     */
    public function synapses() {
        return $this->belongsToMany(Synapse::class)
            ->withTrashedIfRole('admin')
            ->withTimestamps();
    }


    /**
     * Scopes a query to the authenticated user.
     *
     * @param $query                Query builder
     */
    public function scopeCurrent($query) {
        return (Auth::check() === false) ?
            $query->corrupt() : $query->whereId(Auth::user()->id);
    }


    /**
     * Overwrites the cards method to add the hidden email column
     * to the query's select clausule.
     *
     * @param $query        Query builder
     * @param $id           Primary key of an object
     * @param $relation     Relation being queried
     */
    public function scopeCards($query, $id = null, $relation = null) {
        $query = parent::scopeCards($query, $id, $relation);
        return $query->addSelect('email');
    }


    /**
     * Returns if the user belongs to the given role.
     *
     * @param $role         Role identifier
     * @return boolean      If the user belongs to the role
     */
    public function hasRole($role) {
        return $this->role === $role;
    }


    /**
     * Returns if the given author ID belongs to this user.
     *
     * @param $id           Author identifier
     * @return boolean      If the author exists and belongs to the user
     */
    public function isAuthor($id) {
        return $this->author()->whereId($id)->exists();
    }


    /**
     * Returns if the user can edit the given synapse.
     *
     * @param $id           Synapse identifier
     * @return boolean      If the user can edit the synapse
     */
    public function canAdminSynapse($id) {
        if ($this->role === 'admin') {
            return true;
        }

        $privilege = $this->privileges()->where('synapse_id', $id);
        return $privilege->where('role', 'admin')->exists();
    }


    /**
     * Returns if the user can edit the given synapse.
     *
     * @param $id           Synapse identifier
     * @return boolean      If the user can edit the synapse
     */
    public function canEditSynapse($id) {
        if ($this->role === 'admin') {
            return true;
        }

        $privilege = $this->privileges()->where('synapse_id', $id);
        return $privilege->whereIn('role', ['admin', 'editor'])->exists();
    }


    /**
     * Overwrites the getHidden method of the model. This method
     * overwrites the hidden attributes by removing the user email
     * field if the current user is an admin.
     */
    public function getHidden() {
        $hidden = parent::getHidden();
        
        // Grant administrators the right to see the user emails
        
        if (Auth::check() === true) {
            if (Auth::user()->hasRole('admin')) {
                $hidden = array_filter($hidden, function($value) {
                    return $value !== 'email';
                });
            }
        }
        
        return $hidden;
    }

}
