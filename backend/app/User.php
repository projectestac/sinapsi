<?php

namespace App;

use Socialite;
use Illuminate\Auth\Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Seidor\Foundation\FoundationModel;

use App\Models\Author;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Pivots\PostUser;
use App\Models\Pivots\SynapseUser;


/**
 * User model class.
 */
class User extends FoundationModel implements AuthenticatableContract {
    use Authenticatable, Notifiable, SoftDeletes;
    
    /** Attribute definitions */
    protected static $fields = [
        'id' =>                 'integer|min:0',
        'avatar_url' =>         'string|url|max:255',
        'email' =>              'string|email|max:255',
        'name' =>               'string|max:255',
        'provider_uid' =>       'string|max:500',
        'provider_token' =>     'string|max:500',
        'role' =>               'string|in:admin,author',
        'created_at' =>         'isodate',
        'deleted_at' =>         'isodate',
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
        'deleted_at' =>         'datetime',
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
        'deleted_at',
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
        return $this->belongsToMany(Post::class)->withTimestamps();
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
        return $this->belongsToMany(Synapse::class)->withTimestamps();
    }


    /**
     * Returns if the user belongs to the given role.
     *
     * @param $role         Role identifier
     * @return boolean      If the user belongs to the role
     */
    public function hasRole(string $role) {
        return $this->role === $role;
    }


    /**
     * Returns if the given author ID belongs to this user.
     *
     * @param $id           Author identifier
     * @return boolean      If the author exists and belongs to the user
     */
    public function isAuthor(int $id) {
        return $this->author()->whereID($id)->exists();
    }


    /**
     * Returns if the user can edit the given synapse.
     *
     * @param $id           Synapse identifier
     * @return boolean      If the user can edit the synapse
     */
    public function canAdminSynapse(int $id) {
        $privilege = $this->privileges()->where('synapse_id', $id);
        return $privilege->where('role', 'admin')->exists();
    }


    /**
     * Returns if the user can edit the given synapse.
     *
     * @param $id           Synapse identifier
     * @return boolean      If the user can edit the synapse
     */
    public function canEditSynapse(int $id) {
        $privilege = $this->privileges()->where('synapse_id', $id);
        return $privilege->whereIn('role', ['admin', 'editor'])->exists();
    }

}
