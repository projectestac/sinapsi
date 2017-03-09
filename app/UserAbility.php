<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;

class UserAbility extends Model
{
    public $table = "user_abilities";
    protected $fillable = ['scope','scope_id','user_id','ability'];
}
