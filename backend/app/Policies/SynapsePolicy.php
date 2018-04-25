<?php

namespace App\Policies;

use App\User;
use App\Models\Synapse;
use App\Models\Pivots\SynapseUser;
use Illuminate\Auth\Access\HandlesAuthorization;

class SynapsePolicy extends ModelPolicy {
    use HandlesAuthorization;


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
        return $synapse->slug !== Synapse::GENERAL_SLUG;
    }

}
