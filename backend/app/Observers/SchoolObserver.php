<?php

namespace App\Observers;

use Auth;
use App\Models\Author;
use App\Models\School;
use App\Models\Synapse;
use App\Models\Pivots\SynapseUser;


class SchoolObserver {
    
    /**
     * Listen to the model created event. Creates an author and synapse
     * for the model and assigns them with administration rights to the
     * authenticated user.
     *
     * @param School $model
     * @return void
     */
    public function created(School $school) {
        $user = Auth::user();
        
        $synapse = Synapse::create([
            'type' => 'authors',
            'name' => $school->name
        ]);
        
        SynapseUser::create([
            'role' => 'manager',
            'user_id' => $user->id,
            'synapse_id' => $synapse->id
        ]);
        
        $author = Author::create([
            'type' => 'schools',
            'name' => $school->name,
            'school_id' => $school->id,
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
    public function updating(School $school) {
        if ($school->isDirty('name')) {
            $author = $school->author()->first();
            $author->update(['name' => $school->name]);
        }
    }

}
