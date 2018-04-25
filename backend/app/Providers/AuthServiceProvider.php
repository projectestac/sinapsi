<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider {

    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' =>                      'App\Policies\ModelPolicy',
        'App\Models\Author' =>              'App\Policies\AuthorPolicy',
        'App\Models\Block' =>               'App\Policies\BlockPolicy',
        'App\Models\Feed' =>                'App\Policies\FeedPolicy',
        'App\Models\Synapse' =>             'App\Policies\SynapsePolicy',
        'App\Models\Pivots\PostSynapse' =>  'App\Policies\BumpPolicy',
        'App\Models\Pivots\SynapseUser' =>  'App\Policies\PrivilegePolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot() {
        $this->registerPolicies();
    }

}
