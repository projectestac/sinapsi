<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;

class PostVote extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
