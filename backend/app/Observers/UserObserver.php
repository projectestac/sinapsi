<?php

namespace App\Observers;

use Auth;
use App\User;
use App\Models\Author;
use App\Models\Synapse;
use App\Models\Pivots\SynapseUser;


class UserObserver {
    
    /**
     * Listen to the model created event. Creates an author and synapse
     * for the model and assigns them with administration rights to the
     * authenticated user.
     *
     * @param User $model
     * @return void
     */
    public function created(User $user) {
        $synapse = Synapse::create([
            'type' => 'authors',
            'name' => $user->name
        ]);
        
        SynapseUser::create([
            'role' => 'admin',
            'user_id' => $user->id,
            'synapse_id' => $synapse->id
        ]);
        
        $author = Author::create([
            'type' => 'users',
            'name' => $user->name,
            'user_id' => $user->id,
            'synapse_id' => $synapse->id
        ]);
        
        $synapse->update(['filters' => [
            'author_id' => $author->id
        ]]);
    }
    
    
    /**
     * Listen to the model updating event. Updates the author name
     * whenever the model name changes.
     *
     * @param School $model
     * @return void
     */
    public function updating(User $user) {
        if ($user->isDirty('name')) {
            $author = $user->author()->first();
            $author->update(['name' => $user->name]);
        }
    }

}