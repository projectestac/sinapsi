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
        $hasDirtyName = $author->isDirty('name');

        $suffix = $this->authorQualifier($author);
        $name = $hasDirtyName ? $author->name : $this->ownerName($author);
        $author->name = is_null($suffix) ? $name : "$name ($suffix)";

        // If the author name was updated, update also the owner name.
        // Notice that there is some intended redundancy on the database:
        // we store the owner name twice, with and without the qualifier.

        if ($hasDirtyName === true) {
            $owner = $author->owner();
            $model = $owner->getRelated();

            $model->preventEvents(function() use ($owner, $name) {
                $owner->update(['name' => $name]);
            });
        }
    }


    /**
     * Returns the name of the object owning this author.
     *
     * @param Author $author    Author object
     * @return string           Owner name or null
     */
    private function ownerName(Author $author) {
        return $author->owner()->value('name');
    }


    /**
     * Returns the qualifier name of this author. That is, the school
     * or municipality of the author.
     *
     * @param Author $author    Author object
     * @return string           Qualifier name or null
     */
    private function authorQualifier(Author $author) {
        if ($author->type === 'schools') {
            if (!is_null($author->municipality_id))
                return $author->municipality()->value('name');
        } else {
            if (!is_null($author->school_id))
                return $author->school()->value('name');
        }

        return null;
    }

}
