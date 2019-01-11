<?php

namespace App\Policies;

use App\User;
use App\Models\Block;
use App\Models\Pivots\SynapseUser;
use Illuminate\Auth\Access\HandlesAuthorization;

class BlockPolicy extends ModelPolicy {
    use HandlesAuthorization;


    /**
     * Determine whether the user can create the resource.
     *
     * @param  \App\User $user      User
     * @param  array $values        Block values
     *
     * @return mixed
     */
    public function store(User $user, array $values) {
        return $user->isEditorFor($values['synapse_id']);
    }


    /**
     * Determine whether the user can update the resource.
     *
     * @param  \App\User            $user
     * @param  \App\Models\Block    $block
     *
     * @return mixed
     */
    public function update(User $user, Block $block) {
        return $user->isEditorFor($block->synapse_id);
    }


    /**
     * Determine whether the user can delete the resource.
     *
     * @param  \App\User            $user
     * @param  \App\Models\Block    $block
     *
     * @return mixed
     */
    public function destroy(User $user, Block $block) {
        return $user->isEditorFor($block->synapse_id);
    }

}
