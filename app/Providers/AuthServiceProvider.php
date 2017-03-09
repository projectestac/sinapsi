<?php

namespace Sinapsi\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'Sinapsi\Model' => 'Sinapsi\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Check rol before abilities
        Gate::before(function ($user, $ability) {
            if ($user->isAdmin()) {
                return true;
            }
        });

        /*
        |--------------------------------------------------------------------------
        | Global
        |--------------------------------------------------------------------------
        */
        Gate::define('manage-settings', function ($user) {
            return $user->hasAbility('manage-settings');
        });

        /*
        |--------------------------------------------------------------------------
        | Posts
        |--------------------------------------------------------------------------
        */

        Gate::define('post-create', function ($user) {
            return $user->hasAbility('post-create');
        });

        Gate::define('post-edit', function ($user) {
            return $user->hasAbility('post-edit');
        });

        Gate::define('post-highlight', function ($user) {
            return $user->hasAbility('post-highlight');
        });

        /*
        |--------------------------------------------------------------------------
        | Sinapsis
        |--------------------------------------------------------------------------
        */
        Gate::define('sinapsi-create', function ($user) {
            return $user->hasAbility('sinapsi-create');
        });

        Gate::define('sinapsi-manage', function ($user, $sinapsi_id) {
            return $user->hasAbility('manage', 'sinapsi', $sinapsi_id);
        });

        Gate::define('sinapsi-post-highlight', function ($user, $sinapsi_id) {
            return $user->hasAbility('highlight', 'sinapsi', $sinapsi_id);
        });
    }
}
