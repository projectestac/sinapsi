<?php

namespace App\Observers;

use App\Models\Synapse;


class SynapseObserver {
    
    /**
     * Listen to the model created event.
     *
     * @param Synapse $model
     * @return void
     */
    public function created(Synapse $synapse) {
        if (is_null($synapse->synapse_id) === false) {
            Synapse::withTrashed()
                ->where('id', $synapse->synapse_id)
                ->increment('child_count');
        }
    }
    
    
    /**
     * Listen to the model updated event.
     * @param Synapse $model
     * @return void
     */
    public function updated(Synapse $synapse) {
        if (!$synapse->isDirty('synapse_id'))
            return;
        
        $oid = $synapse->getOriginal('synapse_id');
        $nid = $synapse->getDirty('synapse_id');
        
        if (is_null($oid) === false) {
            Synapse::withTrashed()
                ->where('id', $oid)
                ->where('child_count', '>', 0)
                ->decrement('child_count');
        }
        
        if (is_null($nid) === false) {
            Synapse::withTrashed()
                ->where('id', $nid)
                ->increment('child_count');
        }
    }
    
    
    /**
     * Listen to the model deleted event.
     * @param Synapse $model
     * @return void
     */
    public function deleted(Synapse $synapse) {
        if (is_null($synapse->synapse_id) === false) {
            Synapse::withTrashed()
                ->where('id', $synapse->synapse_id)
                ->where('child_count', '>', 0)
                ->decrement('child_count');
        }
    }

}
