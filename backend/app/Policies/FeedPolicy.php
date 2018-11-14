<?php

namespace App\Policies;

use App\User;
use App\Models\Author;
use App\Models\Feed;
use Illuminate\Auth\Access\HandlesAuthorization;

class FeedPolicy extends ModelPolicy {
    use HandlesAuthorization;


    /**
     * Determine whether the user can create the feed.
     *
     * @param  \App\User $user      User
     * @param  array $values        Feed values
     *
     * @return mixed
     */
    public function store(User $user, array $values) {
        return $user->isAuthorFor($values['author_id']);
    }


    /**
     * Determine whether the user can update the feed.
     *
     * @param  \App\User            $user
     * @param  \App\Models\Feed     $feed
     *
     * @return mixed
     */
    public function update(User $user, Feed $feed) {
        return $user->isAuthorFor($feed->author_id);
    }


    /**
     * Determine whether the user can delete the feed.
     *
     * @param  \App\User            $user
     * @param  \App\Models\Feed     $feed
     *
     * @return mixed
     */
    public function destroy(User $user, Feed $feed) {
        return $user->isAuthorFor($feed->author_id);
    }

}
