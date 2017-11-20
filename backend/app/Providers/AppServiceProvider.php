<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\User;
use App\Models\Author;
use App\Models\Project;
use App\Models\School;
use App\Models\Synapse;
use App\Observers\AuthorObserver;
use App\Observers\ProjectObserver;
use App\Observers\SchoolObserver;
use App\Observers\SynapseObserver;
use App\Observers\UserObserver;


class AppServiceProvider extends ServiceProvider {

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot() {
        setlocale(LC_ALL, config('app.LC_ALL'));
        
        Author::observe(AuthorObserver::class);
        Project::observe(ProjectObserver::class);
        School::observe(SchoolObserver::class);
        Synapse::observe(SynapseObserver::class);
        User::observe(UserObserver::class);
    }


    /**
     * Register any application services.
     *
     * @return void
     */
    public function register() {
        if ($this->app->environment('local')) {
            $this->app->register('Seidor\Scaffold\ScaffoldServiceProvider');
        }
    }

}
