<?php

namespace App\Observers;

use App\Models\Tag;


class TagObserver {
    
    /**
     * Listen to the model deleting events.
     *
     * @param Tag $model
     * @return void
     */
    public function deleting(Tag $tag) {
        $tag->synapse()->delete();
    }
    
    /**
     * Listen to the model restoring events.
     *
     * @param Tag $model
     * @return void
     */
    public function restoring(Tag $tag) {
        $tag->synapse()->restore();
    }

}
