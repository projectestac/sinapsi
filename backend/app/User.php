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

    /** Administrator role */
    const ADMIN_ROLE = 'admin';

    /** Administrator role */
    const AUTHOR_ROLE = 'author';

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
        'avatar_url',
        'email',
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
            ->withTrashedIfAdmin()
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
            ->withTrashedIfAdmin()
            ->withTimestamps();
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
     * Returns if this user has the 'admin' role.
     */
    public function isAdmin() {
        return $this->role === User::ADMIN_ROLE;
    }


    /**
     * Returns if this user has the 'author' role.
     */
    public function isAuthor() {
        return $this->role === User::AUTHOR_ROLE;
    }


    /**
     * Returns if the given author belongs to this user.
     *
     * @param $id           Author identifier
     * @return boolean      If the author belongs to the user
     */
    public function isAuthorFor($id) {
        return $this->author()->whereId($id)->exists();
    }


    /**
     * Returns if the user has a privilege over the synapse with
     * the role 'editor' or 'manager'.
     *
     * @param $id           Synapse identifier
     * @return boolean      If the user has edition rights
     */
    public function isEditorFor($id) {
        $query = $this->privileges();
        $query->where('synapse_id', $id);
        $query->whereIn('role', ['editor', 'manager']);
        
        return $query->exists();
    }


    /**
     * Returns if the user has a privilege over the synapse with
     * the role 'manager'.
     *
     * @param $id           Synapse identifier
     * @return boolean      If the user has management rights
     */
    public function isManagerFor($id) {
        $query = $this->privileges();
        $query->where('synapse_id', $id);
        $query->where('role', 'manager');
        
        return $query->exists();
    }


    /**
     * Overwrites the getHidden method of the model.
     *
     * This method overwrites the hidden attributes by removing the
     * user email field if the current user is an administrator. Thus,
     * granting admins the right to see user emails.
     */
    public function getHidden() {
        $hidden = parent::getHidden();
        
        if (Auth::check() && Auth::user()->isAdmin()) {
            $hidden = array_filter($hidden, function($value) {
                return $value !== 'email';
            });
        }
        
        return $hidden;
    }

}
