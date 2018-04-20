<?php

namespace App\Observers;

use Auth;
use App\Models\Author;
use App\Models\Project;
use App\Models\Synapse;
use App\Models\Pivots\SynapseUser;


class ProjectObserver {
    
    /**
     * Listen to the model created event. Creates an author and synapse
     * for the model and assigns them with administration rights to the
     * authenticated user.
     *
     * @param Project $model
     * @return void
     */
    public function created(Project $project) {
        $user = Auth::user();
        
        $synapse = Synapse::create([
            'type' => 'authors',
            'name' => $project->name
        ]);
        
        SynapseUser::create([
            'role' => 'manager',
            'user_id' => $user->id,
            'synapse_id' => $synapse->id
        ]);
        
        $author = Author::create([
            'type' => 'projects',
            'name' => $project->name,
            'project_id' => $project->id,
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
    public function updating(Project $project) {
        if ($project->isDirty('name')) {
            $author = $project->author()->first();
            $author->update(['name' => $project->name]);
        }
    }

}
