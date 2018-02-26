<?php

namespace Seidor\Foundation;

use Validator;
use Illuminate\Support\ServiceProvider;

class FoundationServiceProvider extends ServiceProvider {

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot() {
        Validator::extend('isodate', 'Seidor\Foundation\Validators@date');
        Validator::extend('slug', 'Seidor\Foundation\Validators@slug');
    }

}
