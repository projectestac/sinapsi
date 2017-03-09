<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;

class SinapsiPostsSticky extends Model
{
    protected $fillable = ['sinapsi_id', 'post_id', 'sticky'];
}
