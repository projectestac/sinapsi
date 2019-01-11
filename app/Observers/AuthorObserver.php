<?php

namespace App\Observers;

use Auth;
use App\Models\Author;


class AuthorObserver {
    
    /**
     * Listen to the model saving events. Suffixes the author name with
     * the school name or the author municipality name.
     *
     * @param School $model
     */
    public function saving(Author $author) {
        $name = $this->ownerName($author);
        $suffix = $this->authorQualifier($author);
        $author->name = is_null($suffix) ? $name : "$name ($suffix)";
    }
    
    
    /**
     * Returns the name of the object owning this author.
     *
     * @param Author $author    Author object
     * @return string           Owner name or null
     */
    private function ownerName(Author $author) {
        if ($author->isDirty('name'))
            return $author->name;
        
        if ($author->type === 'schools')
            return $author->school()->value('name');
        
        if ($author->type === 'projects')
            return $author->project()->value('name');
        
        if ($author->type === 'users')
            return $author->user()->value('name');
        
        return null;
    }
    
    
    /**
     * Returns the qualifier name of this author. That is, the school,
     * municipality or territopry name.
     *
     * @param Author $author    Author object
     * @return string           Qualifier name or null
     */
    private function authorQualifier(Author $author) {
        if ($author->type === 'schools') {
            if (!is_null($author->municipality_id))
                return $author->municipality()->value('name');
            
            if (!is_null($author->territory_id))
                return $author->territory()->value('name');
        } else {
            if (!is_null($author->school_id))
                return $author->school()->value('name');
        }
        
        return null;
    }

}
