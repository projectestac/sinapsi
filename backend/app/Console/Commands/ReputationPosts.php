<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Jobs\RankPosts;


/**
 * Update the reputation of posts.
 */
class ReputationPosts extends Command {

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reputation:posts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the reputation of posts';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle() {
        RankPosts::dispatch();
    }

}
