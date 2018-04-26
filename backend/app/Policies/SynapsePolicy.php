<?php

namespace App\Policies;

use App\User;
use App\Models\Synapse;
use App\Models\Pivots\SynapseUser;
use Illuminate\Auth\Access\HandlesAuthorization;

class SynapsePolicy extends ModelPolicy {
    use HandlesAuthorization;


    /**
     * Make sure admins cannot delete the general synapse or
     * the authors synapses.
     *
     * @param  \App\User    $user
     * @param  \App\Model   $model
     * @return mixed
     */
    public function before(User $user, $ability) {
        return ($ability === 'destroy') ?
            null : parent::before($user, $ability);
    }


    /**
     * Determine whether the user can update the synapse.
     *
     * @param  \App\User            $user
     * @param  \App\Models\Synapse  $synapse
     *
     * @return mixed
     */
    public function update(User $user, Synapse $synapse) {
        return $user->isEditorFor($synapse->id);
    }


    /**
     * Determine whether the user can delete the synapse.
     *
     * @param  \App\User            $user
     * @param  \App\Models\Synapse  $synapse
     *
     * @return mixed
     */
    public function destroy(User $user, Synapse $synapse) {
        return ($synapse->type !== 'authors') &&
               ($synapse->slug !== Synapse::GENERAL_SLUG);
    }

}
