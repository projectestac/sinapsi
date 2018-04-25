<?php

namespace App\Policies;

use App\User;
use App\Models\Pivots\SynapseUser;
use Illuminate\Auth\Access\HandlesAuthorization;

class PrivilegePolicy extends ModelPolicy {
    use HandlesAuthorization;


    /**
     * Determine whether the user can create the resource.
     *
     * @param  \App\User $user      User
     * @param  array $values        Privilege values
     *
     * @return mixed
     */
    public function store(User $user, array $values) {
        return $user->isManagerFor($values['synapse_id']);
    }


    /**
     * Determine whether the user can view the resource.
     *
     * @param  \App\User $user      User
     * @param  array $values        Privilege values
     *
     * @return mixed
     */
    public function show(User $user, SynapseUser $privilege) {
        return $user->isManagerFor($privilege->synapse_id);
    }


    /**
     * Determine whether the user can update the resource.
     *
     * @param  \App\User                $user
     * @param  \App\Models\SynapseUser  $privilege
     *
     * @return mixed
     */
    public function update(User $user, SynapseUser $privilege) {
        return $user->isManagerFor($privilege->synapse_id);
    }


    /**
     * Determine whether the user can delete the resource.
     *
     * @param  \App\User                $user
     * @param  \App\Models\SynapseUser  $privilege
     *
     * @return mixed
     */
    public function destroy(User $user, SynapseUser $privilege) {
        return $user->isManagerFor($privilege->synapse_id);
    }

}
