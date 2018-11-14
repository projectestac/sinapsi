<?php

namespace App\Policies;

use App\User;
use App\Models\Author;
use Illuminate\Auth\Access\HandlesAuthorization;

class AuthorPolicy extends ModelPolicy {
    use HandlesAuthorization;


    /**
     * Determine whether the user can update the author.
     *
     * @param  \App\User            $user
     * @param  \App\Models\Author   $author
     *
     * @return mixed
     */
    public function update(User $user, Author $author) {
        return $author->user_id === $user->id;
    }

}
