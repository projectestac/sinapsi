<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    protected $fillable = ['title', 'type', 'content', 'scope', 'scope_id', 'options', 'order'];
    protected $dates = ['created_at', 'updated_at'];
}
