<?php

namespace Sinapsi\Listeners;

use Illuminate\Support\Facades\Log;
use Sinapsi\Events\SinapsisChanged;

class UpdateSinapsisTree
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  AddSinapsi  $event
     * @return void
     */
    public function handle(SinapsisChanged $event)
    {
        app('Sinapsi\Http\Controllers\AppController')->updateSinapsisTree();
    }
}
