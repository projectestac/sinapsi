<?php

namespace App\Policies;

use App\User;
use App\Model;
use Illuminate\Auth\Access\HandlesAuthorization;

class ModelPolicy {
    use HandlesAuthorization;


    /**
     * Grant all policies to administrators.
     *
     * @param  \App\User    $user
     * @param  \App\Model   $model
     * @return mixed
     */
    public function before(User $user, $ability) {
        return $user->isAdmin() ? true : null;
    }

}
