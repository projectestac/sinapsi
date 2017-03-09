<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;

class TagAlias extends Model
{
    protected $table = 'tag_alias';

    protected $fillable = ['slug', 'slug_alias', 'name_alias'];
    protected $dates = ['created_at', 'updated_at'];
}
