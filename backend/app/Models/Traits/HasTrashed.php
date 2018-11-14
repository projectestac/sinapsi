<?php

namespace App\Models\Traits;

use Auth;
use Illuminate\Database\Eloquent\Builder;


/**
 * Trait for models with soft-deletes.
 */
trait HasTrashed {
    
    /**
     * Scopes a query to the include soft-deleted models if the
     * authenticated user has the given role.
     *
     * @param $query    Query builder
     * @param $role     User role
     */
    public function scopeWithTrashedIfRole($query, $role) {
        if (Auth::check() === true) {
            if (Auth::user()->hasRole($role)) {
                $query->withTrashed();
            }
        }
    }


    /**
     * Scopes a query to the include soft-deleted models if the
     * authenticated user is an administrator.
     *
     * @param $query    Query builder
     */
    public function scopeWithTrashedIfAdmin($query) {
        if (Auth::check() && Auth::user()->isAdmin()) {
            $query->withTrashed();
        }
    }

}
