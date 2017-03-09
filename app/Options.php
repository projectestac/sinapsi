<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;

class Options extends Model
{
    protected $table = "options";
    protected $fillable = ['option', 'post_id', 'scope', 'scope_info', 'value'];
    protected $dates = ['created_at', 'updated_at'];
}
